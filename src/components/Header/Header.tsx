import { Box, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';

import SearchBar from './components/SearchBar';
import Navbar from '../Navbar/Navbar';

import './Header.scss';

const Header = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ position: 'relative' }}>
            <Navbar />
            <Box className="main-header" sx={{ pt: 8.5 }}>
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        zIndex: 1,
                    }}
                />

                <Container
                    sx={{
                        padding: '48px 32px 96px 32px',
                        position: 'relative',
                        zIndex: 2,
                    }}
                >
                    <Stack
                        direction="column"
                        alignItems="center"
                    >
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 500, textAlign: 'center' }}
                        >
                            {t('header.title')}
                        </Typography>

                        <SearchBar />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default Header;
