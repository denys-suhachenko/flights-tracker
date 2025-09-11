import authService from '@app/services/authService';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';

interface AuthContextModel {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
  register: (email: string, password: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextModel | null>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setIsLoading(false);
      return;
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const user = await authService.login(email, password);
      setIsLoading(false);
      setUser(user);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await authService.logout();
      setUser(null);
    } catch (error) {
      // TODO: handle error
    }

    setIsLoading(false);
  };

  const register = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await authService.register(email, password);
    } catch (error) {
      // TODO: handle error
    }

    setIsLoading(false);
  };

  const contextValue: AuthContextModel = {
    isLoading,
    isAuthenticated: !!localStorage.getItem('token'),
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthentication = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthentication must be used within an AuthProvider');
  }

  return context;
};
