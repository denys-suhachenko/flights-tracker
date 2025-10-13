import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';
import { useQueryClient } from '@tanstack/react-query';

import authService from '@app/services/authService';

interface AuthContextModel {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextModel | null>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (!storedToken) {
      setIsLoading(false);
      return;
    }

    setToken(storedToken);
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const { token: newToken, user: userProfile } = await authService.signIn(
        email,
        password
      );
      setToken(newToken);
      setUser(userProfile ?? null);

      await queryClient.invalidateQueries();
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);

    try {
      await authService.signOut();

      localStorage.removeItem('token');
      setToken(null);
      setUser(null);

      queryClient.clear();
    } catch (error) {
      // TODO: handle error
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      await authService.signUp(email, password);
      // TODO: add redirect to login page/dialog (or auto login)
    } catch (error) {
      // TODO: handle error
    } finally {
      setIsLoading(false);
    }
  };

  const contextValue = useMemo<AuthContextModel>(
    () => ({
      isAuthenticated: !!token,
      isLoading,
      user,
      signIn,
      signOut,
      signUp,
    }),
    [isLoading, token, user]
  );

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
