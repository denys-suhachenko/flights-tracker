import { useEffect, useMemo, useState } from 'react';
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
import { useQuery, keepPreviousData } from '@tanstack/react-query';

import flightsService from '@app/services/flightsService';
import FlightTrackingCard from '@app/components/FlightTrackingCard/FlightTrackingCard';

import FilterMobile from '@app/components/Filter/FilterMobile';

const DEFAULT_PAGE_SIZE = 4;

const sortVariants = [
  'default',
  'flight_duration',
  'distance',
  'departute_date',
  'arrival_date',
] as const;

type SortVariant = (typeof sortVariants)[number];

const FlightsList = () => {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const [page, setPage] = useState(1);
  const [order, setOrder] = useState<SortVariant>('default');
  const [isOpenedSnackbar, setIsOpenedSnackbar] = useState(false);

  const params = useMemo(
    () => ({
      page,
      pageSize: DEFAULT_PAGE_SIZE,
      order,
    }),
    [page, order]
  );

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['flights', params],
    queryFn: ({ signal }) =>
      flightsService.getFlights(params.page, params.pageSize, params.order, {
        signal,
      }),
    placeholderData: keepPreviousData,
  });

  const pageCount = data?.count ? Math.ceil(data.count / DEFAULT_PAGE_SIZE) : 0;

  useEffect(() => {
    if (isError) {
      setIsOpenedSnackbar(true);
    }
  }, [isError]);

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
          value={order}
          onChange={(e) => {
            setPage(1);
            setOrder(e.target.value);
          }}
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
          {data?.results ? (
            data.results.map((flight) => (
              <FlightTrackingCard key={flight.id} flightInfo={flight} />
            ))
          ) : (
            <Paper sx={{ p: 2 }}>{t('pages.home.list.empty')}</Paper>
          )}

          {pageCount > 1 && (
            <Pagination
              count={pageCount}
              page={page}
              color="primary"
              sx={{ display: 'flex', justifyContent: 'center' }}
              onChange={(_, value) => setPage(value)}
            />
          )}
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
          {error instanceof Error ? error.message : t('common.fetch.error')}
        </Alert>
      </Snackbar>
    </>
  );
};

export default FlightsList;
