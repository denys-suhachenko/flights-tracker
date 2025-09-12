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
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
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

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const user = await authService.signIn(email, password);
      setIsLoading(false);
      setUser(user);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);

    try {
      await authService.signOut();
      setUser(null);
    } catch (error) {
      // TODO: handle error
    }

    setIsLoading(false);
  };

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await authService.signUp(email, password);
    } catch (error) {
      // TODO: handle error
    }

    setIsLoading(false);
  };

  const contextValue: AuthContextModel = {
    isLoading,
    isAuthenticated: !!localStorage.getItem('token'),
    signIn,
    signOut,
    signUp,
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
