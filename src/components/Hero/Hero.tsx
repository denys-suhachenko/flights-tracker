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

      <Box sx={{
        ...styles.mainHeader,
        backgroundImage: `url(${HeroImage})`,
      }}>
        <Box sx={styles.overlay} />

        <Container sx={styles.container}>
          <Stack direction="column" alignItems="center">
            <Typography variant="h3" align="center" sx={{ fontWeight: 500 }}>
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
