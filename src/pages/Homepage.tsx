import { Box, Container, Grid, useMediaQuery } from '@mui/material';

import Hero from '@app/components/Hero/Hero';
import Filter from '@app/components/Filter/Filter';
import FlightsList from '@app/components/FlightsList/FlightsList';
import Footer from '@app/components/Footer/Footer';

const Homepage = () => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100dvh',
      }}
    >
      <Hero />

      <Container>
        <Grid container spacing={3} sx={{ py: 4 }}>
          {isDesktop && (
            <Grid size={{ xs: 12, md: 4 }}>
              <Filter />
            </Grid>
          )}

          <Grid size={{ xs: 12, md: 8 }}>
            <FlightsList />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Homepage;
