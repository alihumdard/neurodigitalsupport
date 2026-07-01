const BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'https://neurodigital.oraclesforce.com').replace(/\/+$/, '');

const buildUrl = (path) => `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

const parseJsonResponse = async (response) => {
  try {
    return await response.json();
  } catch {
    return null;
  }
};

export const getBlogs = async () => {
  const response = await fetch(buildUrl('/blogs'), {
    headers: { Accept: 'application/json' }
  });
  const data = await parseJsonResponse(response);

  if (!response.ok) {
    const message =
      data?.message ||
      data?.error ||
      'We could not load blog articles right now. Please try again.';

    throw new Error(message);
  }

  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.data)) {
    return data.data;
  }

  return [];
};

const postJson = async (path, payload, fallbackMessage) => {
  const response = await fetch(buildUrl(path), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await parseJsonResponse(response);

  if (!response.ok) {
    const message = data?.message || data?.error || fallbackMessage;
    throw new Error(message);
  }

  return data;
};

export const submitContactForm = async (payload) =>
  postJson('/contact-us', payload, 'We could not submit your message right now. Please try again.');

export const submitNewsletterSignup = async (email) =>
  postJson('/newsletter', { email }, 'We could not subscribe you right now. Please try again.');

export const submitGetStartedForm = async (payload) =>
  postJson('/get-started', payload, 'We could not submit your request right now. Please try again.');

export default BASE_URL;
