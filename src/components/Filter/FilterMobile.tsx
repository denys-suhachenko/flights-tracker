import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Typography,
  Button,
  SwipeableDrawer,
  Box,
  IconButton,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Stack,
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { FlightStatus, type Airline, type Airport } from '@app/types/flight';
import flightsService from '@app/services/flightsService';

const statuses = [
  FlightStatus.SCHEDULED,
  FlightStatus.ON_TIME,
  FlightStatus.DELAYED,
  FlightStatus.CANCELLED,
  FlightStatus.ARRIVED,
];

const FilterMobile = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [airports, setAirports] = useState<Airport[]>([]);
  const [airlines, setAirlines] = useState<Airline[]>([]);

  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedAirlines, setSelectedAirlnes] = useState<string[]>([]);
  const [departure, setDeparture] = useState<string>('');
  const [arrival, setArrival] = useState<string>('');

  const airlinesByIata = useMemo(
    () =>
      Object.fromEntries(airlines.map((val) => [val.iata, val])) as Record<
        string,
        Airline
      >,
    [airlines]
  );

  useEffect(() => {
    flightsService.getAirports().then((data) => {
      setAirports(data);
    });
  }, []);

  useEffect(() => {
    flightsService.getAirlines().then((data) => {
      setAirlines(data);
    });
  }, []);

  const handleChangeStatuses = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedStatuses(typeof value === 'string' ? value.split(',') : value);
  };

  const handleChangeAirlines = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedAirlnes(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <>
      <IconButton
        sx={{
          display: {
            xs: 'inline-flex',
            md: 'none',
          },
        }}
        onClick={() => setIsOpen(true)}
      >
        <FilterAltIcon />
      </IconButton>

      <SwipeableDrawer
        disableDiscovery={false}
        keepMounted
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: '100%',
              maxWidth: '100%',
              height: '100dvh',
            },
          },
        }}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'background.paper',
            borderBottom: 1,
            borderColor: 'divider',
            py: 1,
            px: 2,
            zIndex: 1,
          }}
        >
          <Typography variant="h6">{t('pages.home.filter.title')}</Typography>
          <IconButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            flex: 1,
            overflow: 'auto',
            p: 2,
          }}
        >
          <Stack spacing={3}>
            {/* Statuses multiselect */}
            <FormControl fullWidth size="small">
              <InputLabel>{t('pages.home.filter.status.title')}</InputLabel>
              <Select
                multiple
                label={t('pages.home.filter.status.title')}
                renderValue={(selected) =>
                  selected.map((status) => (
                    <Chip
                      key={status}
                      label={t(
                        `components.flight_tracking_card.status.${status}`
                      )}
                      size="small"
                    />
                  ))
                }
                value={selectedStatuses}
                onChange={handleChangeStatuses}
              >
                {statuses.map((option) => (
                  <MenuItem key={option} value={option}>
                    <Checkbox
                      checked={selectedStatuses.includes(option)}
                      sx={{ p: 0, mr: 1 }}
                    />
                    {t(`components.flight_tracking_card.status.${option}`)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Departure airport select */}
            <FormControl fullWidth size="small">
              <InputLabel>{t('pages.home.filter.from')}</InputLabel>
              <Select
                label={t('pages.home.filter.from')}
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              >
                {airports.map((option) => (
                  <MenuItem key={option.iata} value={option.iata}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Arrival airport select */}
            <FormControl fullWidth size="small">
              <InputLabel>{t('pages.home.filter.to')}</InputLabel>
              <Select
                label={t('pages.home.filter.to')}
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
              >
                {airports.map((option) => (
                  <MenuItem key={option.id} value={option.iata}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Airlines multiselect */}
            <FormControl fullWidth size="small">
              <InputLabel>{t('pages.home.filter.airlines.title')}</InputLabel>
              <Select
                multiple
                label={t('pages.home.filter.airlines.title')}
                renderValue={(selected) =>
                  selected.map((iata) => (
                    <Chip
                      key={iata}
                      label={airlinesByIata[iata].name ?? iata}
                      size="small"
                    />
                  ))
                }
                value={selectedAirlines}
                onChange={handleChangeAirlines}
              >
                {airlines.map((option) => (
                  <MenuItem key={option.id} value={option.iata}>
                    <Checkbox
                      checked={selectedAirlines.includes(option.iata)}
                      sx={{ p: 0, mr: 1 }}
                    />
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Box>

        <Box
          sx={{
            position: 'sticky',
            bottom: 0,
            bgcolor: 'background.paper',
            borderTop: 1,
            borderColor: 'divider',
            p: 2,
            zIndex: 1,
          }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={() => setIsOpen(false)}
          >
            {t('pages.home.filter.actions.apply')}
          </Button>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default FilterMobile;
