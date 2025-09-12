import { Box, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';

import Navbar from '@app/components/Navbar/Navbar';

import HeroImage from '@app/assets/images/hero.png';

import SearchBar from './components/SearchBar';
import styles from './Hero.styles';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Box sx={(theme) => styles.wrapper(theme)}>
      <Navbar />

      <Box
        sx={{
          ...styles.mainHeader,
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <Box sx={styles.overlay} />

        <Container sx={styles.container}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={4}
            sx={{ maxWidth: '70%', mx: 'auto' }}
          >
            <Typography
              variant="h1"
              align="center"
              sx={{
                fontSize: 48,
                fontWeight: 'medium',
              }}
            >
              {t('hero.title')}
            </Typography>

            <Typography align="center" sx={{ fontSize: 20 }}>
              {t('hero.description')}
            </Typography>

            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'block',
                },
                width: '100%',
                mt: 2,
              }}
            >
              <SearchBar />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
