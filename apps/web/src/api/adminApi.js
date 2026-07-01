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
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
    this.status = 401;
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
    throw new UnauthorizedError(data?.message || 'Your session has expired. Please log in again.');
  }

  if (!response.ok) {
    const message = data?.message || data?.error || fallbackMessage;
    throw new Error(message);
  }

  return data;
};

export const login = async (email, password) => {
  const data = await request(
    '/login',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    },
    'Invalid email or password.'
  );

  setAdminToken(data.token);

  return data.user;
};

export const logout = async () => {
  try {
    await request('/logout', { method: 'POST', isProtected: true }, 'Logout failed.');
  } finally {
    clearAdminToken();
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
