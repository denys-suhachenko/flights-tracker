import axios from 'axios';

export interface ApiListResponse<T = any> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const setAuthToken = (token: string) => {
  if (!token) {
    return;
  }

  localStorage.setItem('token', token);
};

const removeAuthToken = () => {
  localStorage.removeItem('token');
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
