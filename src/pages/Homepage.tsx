import { Box, Container, Grid } from '@mui/material';

import Header from '@app/components/Hero/Hero';
import Filter from '@app/components/Filter/Filter';
import FlightsList from '@app/components/FlightsList/FlightsList';
import Footer from '@app/components/Footer/Footer';

const Homepage = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100dvh',
    }}
  >
    <Header />

    <Container>
      <Grid container spacing={3} sx={{ py: 4 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Filter />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <FlightsList />
        </Grid>
      </Grid>
    </Container>

    <Footer />
  </Box>
);

export default Homepage;
