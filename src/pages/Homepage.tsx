import { Container, Grid } from '@mui/material';

import Header from '@app/components/Header/Header';
import Filter from '@app/components/Filter/Filter';
import FlightsList from '@app/components/FlightsList/FlightsList';

const Homepage = () => {
  return (
    <>
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
    </>
  );
};

export default Homepage;
