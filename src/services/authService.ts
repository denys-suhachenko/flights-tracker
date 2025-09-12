import httpService from './httpService';

const signIn = async (email: string, password: string) => {
  const response = await httpService.post('/auth/login', {
    email,
    password,
  });

  localStorage.setItem('token', response.data.token);

  return response.data.user;
};

const signOut = async () => {
  try {
    await httpService.post('/auth/logout');
    localStorage.removeItem('token');
  } catch (error) {
    throw error;
  }
};

const signUp = async (email: string, password: string) => {
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
  signIn,
  signOut,
  signUp,
};
