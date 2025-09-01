import { Box, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';

import Navbar from '@app/components/Navbar/Navbar';

import SearchBar from './components/SearchBar';
import styles from './Header.styles';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ position: 'relative' }}>
      <Navbar />

      <Box sx={styles.mainHeader}>
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
