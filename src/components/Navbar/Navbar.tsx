import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';

import NavbarWhiteLogo from '@app/assets/navbar-logo-white.svg';
import NavbarBlackLogo from '@app/assets/navbar-logo-black.svg';

import LanguageSwitcher from './components/LanguageSwitcher';
import { useAuthentication } from '@app/providers/AuthProvider';
import LoginDialog from '../Auth/dialogs/LoginDialog/LoginDialog';

const pages = ['home', 'about'];

const Navbar = () => {
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useAuthentication();
  const [isScrolled, setIsScrolled] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      {
        threshold: 0,
      }
    );
    observer.observe(anchorRef.current!);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Box
        ref={anchorRef}
        sx={{
          position: 'absolute',
          top: 0,
          height: 1,
          width: 1,
          pointerEvents: 'none',
        }}
      />

      <AppBar
        position="fixed"
        color="transparent"
        elevation={3}
        sx={{
          bgcolor: isScrolled ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
          color: isScrolled ? 'text.primary' : 'common.white',
          backdropFilter: 'blur(12px)',
        }}
      >
        <Container sx={{ maxWidth: '100%' }}>
          <Toolbar>
            <Link to="/">
              <Box
                component="img"
                src={isScrolled ? NavbarBlackLogo : NavbarWhiteLogo}
                alt="Logo"
                sx={{ width: 32, height: 32, mr: 2 }}
              />
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={page === 'home' ? '/' : `/${page}`}
                  variant="text"
                  color="inherit"
                >
                  {t(`navbar.items.${page}`)}
                </Button>
              ))}
            </Box>

            {isAuthenticated ? (
              <Button color="inherit" onClick={logout}>
                {t('auth.logout')}
              </Button>
            ) : (
              <LoginDialog />
            )}

            <LanguageSwitcher />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
