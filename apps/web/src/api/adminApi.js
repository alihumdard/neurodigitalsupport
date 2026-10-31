import BASE_URL from './api.js';

const buildUrl = (path) => `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

const TOKEN_STORAGE = 'adminToken';

export const getAdminToken = () => {
  try {
    return sessionStorage.getItem(TOKEN_STORAGE) || '';
  } catch {
    return '';
  }
};

export const setAdminToken = (token) => {
  try {
    sessionStorage.setItem(TOKEN_STORAGE, token);
  } catch {
    // ignore storage errors
  }
};

export const clearAdminToken = () => {
  try {
    sessionStorage.removeItem(TOKEN_STORAGE);
  } catch {
    // ignore storage errors
  }
};

export class UnauthorizedError extends Error {
  constructor(message, status = 401, code = null) {
    super(message);
    this.name = 'UnauthorizedError';
    this.status = status;
    this.code = code;
  }
}

const parseJsonResponse = async (response) => {
  try {
    return await response.json();
  } catch {
    return null;
  }
};

const request = async (path, { method = 'GET', headers = {}, body, isProtected = false } = {}, fallbackMessage) => {
  const finalHeaders = { Accept: 'application/json', ...headers };

  if (isProtected) {
    finalHeaders.Authorization = `Bearer ${getAdminToken()}`;
  }

  const response = await fetch(buildUrl(path), {
    method,
    headers: finalHeaders,
    body
  });

  const data = await parseJsonResponse(response);

  if (response.status === 401 || response.status === 403) {
    throw new UnauthorizedError(
      response.status === 403 ? data?.message || 'Your account can’t open this section.' : data?.message || 'Your session has expired. Please log in again.',
      response.status,
      data?.code ?? null
    );
  }

  if (!response.ok) {
    const message = data?.message || data?.error || fallbackMessage;
    const error = new Error(message);
    error.data = data;
    throw error;
  }

  return data;
};

/** Thrown when the password was right and the account needs its authenticator code too. */
export class TwoFactorRequired extends Error {
  constructor(message) {
    super(message);
    this.name = 'TwoFactorRequired';
  }
}

export const login = async (email, password, code) => {
  let data;
  try {
    data = await request(
      '/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(code ? { email, password, code } : { email, password })
      },
      'Invalid email or password.'
    );
  } catch (error) {
    if (error?.data?.two_factor) throw new TwoFactorRequired(error.message);
    throw error;
  }

  setAdminToken(data.token);
  try {
    sessionStorage.setItem('adminRole', data?.user?.role || 'admin');
  } catch {
    // ignore storage errors
  }

  return data.user;
};

export const logout = async () => {
  try {
    await request('/logout', { method: 'POST', isProtected: true }, 'Logout failed.');
  } finally {
    clearAdminToken();
    try {
      sessionStorage.removeItem('adminRole');
    } catch {
      // ignore storage errors
    }
  }
};

export const listBlogs = async () => {
  const data = await request('/blogs', {}, 'We could not load blog articles right now. Please try again.');

  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.data)) {
    return data.data;
  }

  return [];
};

export const listCategories = async () => {
  const data = await request('/categories', {}, 'We could not load categories right now. Please try again.');

  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.data)) {
    return data.data;
  }

  return [];
};

export const createBlog = async (formData) =>
  request(
    '/create/blog',
    { method: 'POST', body: formData, isProtected: true },
    'We could not create the blog right now. Please try again.'
  );

export const updateBlog = async (id, formData) =>
  request(
    `/update/blog/${id}`,
    { method: 'POST', body: formData, isProtected: true },
    'We could not update the blog right now. Please try again.'
  );

export const deleteBlog = async (id) =>
  request(
    `/blog/delete/${id}`,
    { method: 'DELETE', isProtected: true },
    'We could not delete the blog right now. Please try again.'
  );

export const createCategory = async (name) =>
  request(
    '/add/category',
    {
      method: 'POST',
      isProtected: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    },
    'We could not create the category right now. Please try again.'
  );

export const updateCategory = async (id, name) =>
  request(
    `/category/update/${id}`,
    {
      method: 'POST',
      isProtected: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    },
    'We could not update the category right now. Please try again.'
  );

export const deleteCategory = async (id) =>
  request(
    `/category/delete/${id}`,
    { method: 'DELETE', isProtected: true },
    'We could not delete the category right now. Please try again.'
  );

export const listInquiries = async () => {
  const data = await request(
    '/inquiries',
    { isProtected: true },
    'We could not load inquiries right now. Please try again.'
  );

  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.data)) {
    return data.data;
  }

  return [];
};

export const updateInquiry = async (id, payload) =>
  request(
    `/inquiries/${id}`,
    {
      method: 'POST',
      isProtected: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    },
    'We could not update this inquiry right now. Please try again.'
  );

export const deleteInquiry = async (id) =>
  request(
    `/inquiries/${id}`,
    { method: 'DELETE', isProtected: true },
    'We could not delete this inquiry right now. Please try again.'
  );

export const uploadContentImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  return request(
    '/upload-image',
    { method: 'POST', body: formData, isProtected: true },
    'We could not upload the image right now. Please try again.'
  );
};

// ── NuroTok admin (app users, CMS, config) ──────────────────────────────────

const ROLE_STORAGE = 'adminRole';

export const getAdminRole = () => {
  try {
    return sessionStorage.getItem(ROLE_STORAGE) || 'admin';
  } catch {
    return 'admin';
  }
};

const setAdminRole = (role) => {
  try {
    sessionStorage.setItem(ROLE_STORAGE, role || 'admin');
  } catch {
    // ignore storage errors
  }
};

/** Who is signed in, and their role (admin or editor). Called after login and on page load. */
export const fetchAdminMe = async () => {
  const data = await request('/admin/me', { isProtected: true }, 'We could not check your account.');
  setAdminRole(data?.user?.role);
  return data?.user;
};

export const setupTwoFactor = () => request('/admin/me/2fa/setup', json('POST', {}), 'We could not start two-step sign-in.');
export const confirmTwoFactor = (code) => request('/admin/me/2fa/confirm', json('POST', { code }), 'We could not turn on two-step sign-in.');
export const disableTwoFactor = (code) => request('/admin/me/2fa/disable', json('POST', { code }), 'We could not turn off two-step sign-in.');

const json = (method, payload) => ({
  method,
  isProtected: true,
  headers: { 'Content-Type': 'application/json' },
  body: payload === undefined ? undefined : JSON.stringify(payload)
});

const qs = (params = {}) => {
  const entries = Object.entries(params).filter(([, v]) => v !== undefined && v !== null && v !== '');
  return entries.length ? `?${new URLSearchParams(entries).toString()}` : '';
};

export const getDashboard = () => request('/admin/dashboard', { isProtected: true }, 'We could not load the dashboard.');
export const getAnalytics = (days = 30) => request(`/admin/analytics${qs({ days })}`, { isProtected: true }, 'We could not load analytics.');

export const listAppUsers = (params) => request(`/admin/app-users${qs(params)}`, { isProtected: true }, 'We could not load app users.');
export const getAppUser = (id) => request(`/admin/app-users/${id}`, { isProtected: true }, 'We could not load this user.');
export const updateAppUser = (id, payload) => request(`/admin/app-users/${id}`, json('POST', payload), 'We could not update this user.');
export const createAppUser = (payload) => request('/admin/app-users', json('POST', payload), 'We could not add this customer.');
export const assignAppUserPlan = (id, payload) => request(`/admin/app-users/${id}/plan`, json('POST', payload), 'We could not change the plan.');
export const appUserPassword = (id, payload = {}) => request(`/admin/app-users/${id}/password`, json('POST', payload), 'We could not reset the password.');
export const verifyAppUserEmail = (id) => request(`/admin/app-users/${id}/verify-email`, json('POST', {}), 'We could not mark the email as confirmed.');
export const deleteAppUser = (id) => request(`/admin/app-users/${id}`, json('DELETE'), 'We could not delete this user.');
export const exportAppUser = (id) => request(`/admin/app-users/${id}/export`, { isProtected: true }, 'We could not export this user.');
export const pushDeviceSettings = (id, deviceId, settings) =>
  request(`/admin/app-users/${id}/devices/${deviceId}/settings`, json('POST', { settings }), 'We could not send these settings.');

export const listFamilies = (params) => request(`/admin/families${qs(params)}`, { isProtected: true }, 'We could not load families.');
export const revokeFamily = (id) => request(`/admin/families/${id}/revoke`, json('POST', {}), 'We could not end this link.');
export const listReferrals = (page = 1) => request(`/admin/referrals${qs({ page })}`, { isProtected: true }, 'We could not load referrals.');

export const listPages = () => request('/admin/pages', { isProtected: true }, 'We could not load pages.');
export const savePage = (id, payload) => request(id ? `/admin/pages/${id}` : '/admin/pages', json('POST', payload), 'We could not save this page.');
export const deletePage = (id) => request(`/admin/pages/${id}`, json('DELETE'), 'We could not delete this page.');

export const listConfigs = () => request('/admin/configs', { isProtected: true }, 'We could not load app settings.');
export const saveConfig = (payload) => request('/admin/configs', json('POST', payload), 'We could not save this setting.');
export const deleteConfig = (key) => request(`/admin/configs/${encodeURIComponent(key)}`, json('DELETE'), 'We could not remove this setting.');

export const listAnnouncements = () => request('/admin/announcements', { isProtected: true }, 'We could not load announcements.');
export const saveAnnouncement = (id, payload) =>
  request(id ? `/admin/announcements/${id}` : '/admin/announcements', json('POST', payload), 'We could not save this announcement.');
export const sendAnnouncement = (id) => request(`/admin/announcements/${id}/send`, json('POST', {}), 'We could not send this announcement.');
export const deleteAnnouncement = (id) => request(`/admin/announcements/${id}`, json('DELETE'), 'We could not delete this announcement.');

export const listAdmins = () => request('/admin/admins', { isProtected: true }, 'We could not load admin accounts.');
export const saveAdmin = (id, payload) => request(id ? `/admin/admins/${id}` : '/admin/admins', json('POST', payload), 'We could not save this admin.');
export const deleteAdmin = (id) => request(`/admin/admins/${id}`, json('DELETE'), 'We could not remove this admin.');

export const listAudit = (params) => request(`/admin/audit${qs(params)}`, { isProtected: true }, 'We could not load the activity log.');

// SMTP and third-party credentials. Secrets are write-only: the server never sends them back.
export const getIntegrations = () => request('/admin/integrations', { isProtected: true }, 'We could not load the integrations.');
export const saveIntegrations = (values) => request('/admin/integrations', json('POST', { values }), 'We could not save the integrations.');
export const sendTestMail = (to) => request('/admin/integrations/test-mail', json('POST', { to }), 'The test email could not be sent.');

// Server health, the admin two-step policy, and checking a plan against RevenueCat.
export const getHealth = () => request('/admin/health', { isProtected: true }, 'We could not load system health.');
export const setAdminSecurity = (requireAdmin2fa, password) => request('/admin/security', json('POST', { require_admin_2fa: requireAdmin2fa, password }), 'We could not change the sign-in policy.');
export const reconcileAppUser = (id, apply = false) => request(`/admin/app-users/${id}/reconcile`, json('POST', { apply }), 'We could not check with RevenueCat.');
