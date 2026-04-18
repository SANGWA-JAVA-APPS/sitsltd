import { API_BASE_URL } from '../Confs';

async function request(endpoint, options = {}) {
  const { headers = {}, ...rest } = options;
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...headers },
    ...rest,
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${res.statusText}`);
  return res.json();
}

export const JobsApi = {
  getAll:   ()   => request('/jobs'),
  getById:  (id) => request(`/jobs/${id}`),
};
