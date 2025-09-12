import { useEffect, useRef, useState, type RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';

import NavbarWhiteLogo from '@app/assets/navbar-logo-white.svg';
import NavbarBlackLogo from '@app/assets/navbar-logo-black.svg';

import LanguageSwitcher from './components/LanguageSwitcher';
import { useAuthentication } from '@app/providers/AuthProvider';
import LoginDialog from '../Auth/dialogs/LoginDialog/LoginDialog';
import MobileMenu from './components/MobileMenu';

interface NavbarProps {
  pages?: string[];
  scrollAnchorRef?: RefObject<HTMLElement | null>;
}

const Navbar = ({ pages, scrollAnchorRef }: NavbarProps) => {
  const { t } = useTranslation();
  const { isAuthenticated, signOut } = useAuthentication();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!scrollAnchorRef) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      {
        threshold: 0,
      }
    );
    observer.observe(scrollAnchorRef.current!);

    return () => observer.disconnect();
  }, []);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={3}
      sx={{
        bgcolor: isScrolled ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
        color: isScrolled ? 'text.primary' : 'common.white',
        backdropFilter: 'blur(12px)',
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem',
      }}
    >
      <Container sx={{ maxWidth: '100%' }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MobileMenu pages={pages} />
            </Box>

            {pages?.length && (
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
            )}
          </Box>

          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}
          >
            {isAuthenticated ? (
              <Button color="inherit" onClick={signOut}>
                {t('auth.logout')}
              </Button>
            ) : (
              <LoginDialog />
            )}

            <Box sx={{ lineHeight: 0 }}>
              <LanguageSwitcher />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
