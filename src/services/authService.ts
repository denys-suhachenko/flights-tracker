import httpService from './httpService';

const login = async (email: string, password: string) => {
  const response = await httpService.post('/auth/login', {
    email,
    password,
  });

  localStorage.setItem('token', response.data.token);

  return response.data.user;
};

const logout = async () => {
  try {
    await httpService.post('/auth/logout');
    localStorage.removeItem('token');
  } catch (error) {
    throw error;
  }
};

const register = async (email: string, password: string) => {
  const response = await httpService.post('/auth/register', {
    email,
    username: email,
    password,
    confirm_password: password,
  });

  localStorage.setItem('token', response.data.token);

  return response.data.user;
};

export default {
  login,
  logout,
  register,
};
