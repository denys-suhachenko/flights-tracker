import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Alert, Grid, Snackbar, Stack } from '@mui/material';

import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import FlightTrackingCard from '../components/FlightTrackingCard/FlightTrackingCard';
import type { Flight } from '../types/flight';
import flightsService from '../services/flightsService';

const Homepage = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<string>('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    flightsService
      .getFlights()
      .then((data) => {
        setFlights(data);
      })
      .catch((err) => {
        setError(err.message);
        setOpenSnackbar(true);
      });
    // setFlights(mockFlights);
    // fetch('http://127.0.0.1:8000/api/flights')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setFlights(data);
    //     })
    //     .catch((err) => {
    //         console.log('error', err);
    //     });
  }, []);

  return (
    <>
      <div>
        <Header />
        <Container>
          <Grid container spacing={3} sx={{ py: 4 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Filter />
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={3}>
                {flights.map((flight) => (
                  <FlightTrackingCard key={flight.id} flightInfo={flight} />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Homepage;
