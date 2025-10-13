import axios from 'axios';
import { QueryClient, type QueryFunctionContext } from '@tanstack/react-query';

export interface ApiListResponse<T = any> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface QueryOptions {
  signal?: AbortSignal;
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

export const queryClient = new QueryClient();

export default axiosInstance;
