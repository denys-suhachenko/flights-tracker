import { useEffect, useState } from 'react';
import { Alert, Stack, Pagination, Snackbar } from '@mui/material';

import type { Flight } from '@app/types/flight';
import flightsService from '@app/services/flightsService';
import FlightTrackingCard from '@app/components/FlightTrackingCard/FlightTrackingCard';
import { useAuthentication } from '@app/providers/AuthProvider';

const DEFAULT_PAGE_SIZE = 3;

const FlightsList = () => {
  const { isAuthenticated, login } = useAuthentication();

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [flights, setFlights] = useState<Flight[]>([]);

  const [error, setError] = useState<string>('');
  const [isOpenedSnackbar, setIsOpenedSnackbar] = useState(false);

  const pageCount = Math.ceil(count / DEFAULT_PAGE_SIZE);

  const fetchFlights = async (page: number) => {
    try {
      const response = await flightsService.getFlights(page, DEFAULT_PAGE_SIZE);
      setFlights(response.results);
      setCount(response.count);
    } catch (error: any) {
      setError(error.message);
      setIsOpenedSnackbar(true);
    }
  };

  useEffect(() => {
    fetchFlights(page);
  }, [page]);

  return (
    <>
      <Stack spacing={3}>
        {flights.map((flight) => (
          <FlightTrackingCard key={flight.id} flightInfo={flight} />
        ))}
      </Stack>

      <Pagination
        count={pageCount}
        page={page}
        color="primary"
        sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}
        onChange={(_, value) => setPage(value)}
      />

      <Snackbar
        open={isOpenedSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={2000}
        onClose={() => setIsOpenedSnackbar(false)}
      >
        <Alert
          onClose={() => setIsOpenedSnackbar(false)}
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

export default FlightsList;
