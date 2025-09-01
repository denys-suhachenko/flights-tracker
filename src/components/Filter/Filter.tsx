import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  InputLabel,
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Typography,
  type SelectChangeEvent,
  Divider,
  Button,
  Slider,
  FormLabel,
  Stack,
  FormHelperText,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import flightsService from '@app/services/flightsService';
import { type Airline, type Airport, FlightStatus } from '@app/types/flight';

const statuses = [
  FlightStatus.SCHEDULED,
  FlightStatus.ON_TIME,
  FlightStatus.DELAYED,
  FlightStatus.CANCELLED,
  FlightStatus.ARRIVED,
];

const Filter = () => {
  const { t } = useTranslation();

  const [airports, setAirports] = useState<Airport[]>([]);
  const [selectedAirports, setSelectedAirports] = useState<Airport[]>([]);

  const [airlines, setAirlines] = useState<Airline[]>([]);
  const [selectedAirlines, setSelectedAirlines] = useState<Airline[]>([]);

  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [passengersCount, setPassengersCount] = useState<number[]>([50, 250]);

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

  const handleChangeAirports = (event: SelectChangeEvent<Airport[]>) => {
    const value = event.target.value;
    setSelectedAirports(
      typeof value === 'string'
        ? (value
            .split(',')
            .map((id) => airports.find((airport) => airport.id === Number(id)))
            .filter((airport) => airport !== undefined) as Airport[])
        : value
    );
  };

  const handleChangeAirlines = (event: SelectChangeEvent<Airline[]>) => {
    const value = event.target.value;
    setSelectedAirlines(
      typeof value === 'string'
        ? (value
            .split(',')
            .map((id) => airlines.find((airline) => airline.id === Number(id)))
            .filter((airline) => airline !== undefined) as Airline[])
        : value
    );
  };

  const handleChangeStatuses = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setSelectedStatuses(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        {t('pages.home.filter.title')}
      </Typography>

      <Stack spacing={2}>
        {/* Statuses multiselect */}
        <FormControl fullWidth size="small">
          <InputLabel>{t('pages.home.filter.status.title')}</InputLabel>
          <Select
            multiple
            value={selectedStatuses}
            onChange={handleChangeStatuses}
            renderValue={(selected) => selected.join(', ')}
            label={t('pages.home.filter.status.title')}
          >
            {statuses.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox
                  checked={selectedStatuses.includes(option)}
                  sx={{ p: 0, mr: 1 }}
                />
                <ListItemText
                  primary={t(
                    `components.flight_tracking_card.status.${option}`
                  )}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Divider textAlign="left" sx={{ fontSize: 14 }}>
          Departures
        </Divider>

        {/* Departure date */}
        <FormControl fullWidth size="small">
          <DatePicker
            label={t('pages.home.filter.departure_date.title')}
            slotProps={{
              textField: {
                size: 'small',
                fullWidth: true,
              },
            }}
          />
        </FormControl>

        <Divider textAlign="left" sx={{ fontSize: 14 }}>
          Arrivals
        </Divider>

        {/* Arrival date */}
        <FormControl fullWidth size="small">
          <DatePicker
            label={t('pages.home.filter.arrival_date.title')}
            slotProps={{
              textField: {
                size: 'small',
                fullWidth: true,
              },
            }}
          />
        </FormControl>

        {/* Airports multiselect */}
        <FormControl fullWidth size="small">
          <InputLabel>{t('pages.home.filter.airports.title')}</InputLabel>
          <Select
            multiple
            value={selectedAirports}
            onChange={handleChangeAirports}
            renderValue={(selected) =>
              selected.map((airport) => airport.name).join(', ')
            }
            label={t('pages.home.filter.airports.title')}
          >
            {airports.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                <Checkbox
                  checked={
                    selectedAirports.findIndex(
                      (airport) => airport.id === option.id
                    ) !== -1
                  }
                  sx={{ p: 0, mr: 1 }}
                />
                <ListItemText primary={option.name} secondary={option.city} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Airlines multiselect */}
        <FormControl fullWidth size="small">
          <InputLabel>{t('pages.home.filter.airlines.title')}</InputLabel>
          <Select
            multiple
            value={selectedAirlines}
            onChange={handleChangeAirlines}
            renderValue={(selected) =>
              selected.map((airline) => airline.name).join(', ')
            }
            label={t('pages.home.filter.airlines.title')}
          >
            {airlines.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                <Checkbox
                  checked={
                    selectedAirlines.findIndex(
                      (airline) => airline.id === option.id
                    ) !== -1
                  }
                  sx={{ p: 0, mr: 1 }}
                />
                <ListItemText primary={option.name} />
                <img
                  src={option.logo_url}
                  alt={option.name}
                  style={{ width: 24, height: 24 }}
                />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Divider />

        <Divider />

        {/* Passengers range slider */}
        <FormControl fullWidth>
          <FormLabel sx={{ mb: 1 }}>
            {t('pages.home.filter.passengers.title')}
          </FormLabel>
          <Slider
            getAriaLabel={() => t('pages.home.filter.passengers.title')}
            value={passengersCount}
            step={10}
            max={500}
            onChange={(_, value) => setPassengersCount(value)}
            valueLabelDisplay="auto"
            disableSwap
          />
          <FormHelperText sx={{ mx: 0 }}>
            {t('pages.home.filter.passengers.range', {
              from: passengersCount[0],
              to: passengersCount[1],
            })}
          </FormHelperText>
        </FormControl>
      </Stack>

      {/* Submit button */}
      <Button variant="contained" sx={{ mt: 2, width: '100%' }}>
        {t('pages.home.filter.actions.submit')}
      </Button>
    </Paper>
  );
};

export default Filter;
