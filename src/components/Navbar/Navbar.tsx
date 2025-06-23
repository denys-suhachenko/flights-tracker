import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container, styled, type ButtonProps } from '@mui/material';

import LanguageSwitcher from './components/LanguageSwitcher';

interface NavButtonProps extends ButtonProps {
    to: string;
}

const NavButton = styled(({ to, ...props }: NavButtonProps) => (
    <Button component={Link} to={to} {...props} />
))(({ theme }) => ({
    fontWeight: 500,
    color: theme.palette.common.white,
}));

const pages = ['home', 'about'];

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <AppBar
            position="absolute"
            elevation={0}
            sx={{ backgroundColor: 'transparent' }}
        >
            <Container sx={{ maxWidth: '100%' }}>
                <Toolbar>
                    <Box
                        component="img"
                        src={'/src/assets/images/logo.svg'}
                        alt="Logo"
                        sx={{ width: 40, height: 40, mr: 2 }}
                    />

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {pages.map((page) => (
                            <NavButton
                                key={page}
                                variant="text"
                                component={Link}
                                to={page === 'home' ? '/' : `/${page}`}
                            >
                                {t(`navbar.items.${page}`)}
                            </NavButton>
                        ))}
                    </Box>
                    <LanguageSwitcher />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
