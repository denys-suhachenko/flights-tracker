import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';

import NavbarLogo from '@app/assets/navbar-logo-white.svg';

import LanguageSwitcher from './components/LanguageSwitcher';

const pages = ['home', 'about'];

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="relative">
      <Container sx={{ maxWidth: '100%' }}>
        <Toolbar>
          <Link to="/">
            <Box
              component="img"
              src={NavbarLogo}
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
                sx={{ color: 'white' }}
              >
                {t(`navbar.items.${page}`)}
              </Button>
            ))}
          </Box>
          <LanguageSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
