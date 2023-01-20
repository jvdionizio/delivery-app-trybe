import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://delivery-app-trybe-production.up.railway.app/}',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const verifyToken = async (token) => {
  try {
    await api.post('/token', { token });
    return true;
  } catch (error) {
    return false;
  }
};

export const requestApi = async (endpoint) => {
  console.log('endpoint', endpoint);
  const { data } = await api.get(endpoint);
  console.log('data', data);
  return data;
};

export const changeStatus = async (id, status) => {
  const { data } = await api.put(`/customer/orders/${id}`, { status });
  return data;
};

export const postLogin = async (email, password) => {
  const { data } = await api.post('/login', { email, password });
  return data;
};
