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
  const response = await fetch(buildUrl('/blogs'));
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

export const submitContactForm = async (payload) => {
  const response = await fetch(buildUrl('/contact-us'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await parseJsonResponse(response);

  if (!response.ok) {
    const message =
      data?.message ||
      data?.error ||
      'We could not submit your message right now. Please try again.';

    throw new Error(message);
  }

  return data;
};

export default BASE_URL;
