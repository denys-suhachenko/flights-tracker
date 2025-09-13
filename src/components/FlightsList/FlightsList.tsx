import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Stack,
  Pagination,
  Snackbar,
  CircularProgress,
  Box,
  Paper,
  Select,
  MenuItem,
  Typography,
  useMediaQuery,
} from '@mui/material';

import type { Flight } from '@app/types/flight';
import flightsService from '@app/services/flightsService';
import FlightTrackingCard from '@app/components/FlightTrackingCard/FlightTrackingCard';

import FilterMobile from '@app/components/Filter/FilterMobile';

const DEFAULT_PAGE_SIZE = 4;

const sortVariants = [
  'default',
  'flight_duration',
  'distance',
  'deparute_date',
  'arrival_date',
];

const FlightsList = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const [count, setCount] = useState(0);
  const [flights, setFlights] = useState<Flight[]>([]);

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [isOpenedSnackbar, setIsOpenedSnackbar] = useState(false);

  const pageCount = Math.ceil(count / DEFAULT_PAGE_SIZE);

  const fetchFlights = async (page: number) => {
    setIsLoading(true);

    try {
      const response = await flightsService.getFlights(page, DEFAULT_PAGE_SIZE);
      setFlights(response.results);
      setCount(response.count);
    } catch (error: any) {
      setError(error.message);
      setIsOpenedSnackbar(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights(page);
  }, [page]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: {
            xs: 'space-between',
            md: 'flex-end',
          },
          mb: 2,
        }}
      >
        {!isDesktop && <FilterMobile />}

        <Select
          variant="standard"
          size="small"
          displayEmpty
          renderValue={(value) => (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" fontWeight="medium">
                {t('pages.home.sort.prefix')}
              </Typography>
              <Typography variant="body2">
                {t(`pages.home.sort.items.${value}`)}
              </Typography>
            </Box>
          )}
          sx={{
            '&:after': {
              borderBottomWidth: 1,
            },
          }}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sortVariants.map((value) => (
            <MenuItem key={value} value={value}>
              {t(`pages.home.sort.items.${value}`)}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Stack spacing={3}>
          {flights?.length ? (
            flights.map((flight) => (
              <FlightTrackingCard key={flight.id} flightInfo={flight} />
            ))
          ) : (
            <Paper>{t('pages.home.empty')}</Paper>
          )}

          <Pagination
            count={pageCount}
            page={page}
            color="primary"
            sx={{ display: 'flex', justifyContent: 'center' }}
            onChange={(_, value) => setPage(value)}
          />
        </Stack>
      )}

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
