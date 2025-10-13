import {
  Box,
  Button,
  Card,
  Link,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { CardContent } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useTranslation } from 'react-i18next';

import { formatDate, formatDuration, formatTime } from '@app/utils/formatters';
import { FlightStatus, type Flight } from '@app/types/flight';

import FlightProgressLine from './components/FlightProgressLine/FlightProgressLine';
import FlightDurationTimer from './components/FlightDurationTimer/FlightDurationTimer';

interface FlightTrackingCardProps {
  flightInfo: Flight;
}

const FlightTrackingCard = ({ flightInfo }: FlightTrackingCardProps) => {
  const { t } = useTranslation();

  const statusColors = {
    [FlightStatus.ON_TIME]: 'success.main',
    [FlightStatus.DELAYED]: 'warning.main',
    [FlightStatus.CANCELLED]: 'error.main',
  };

  const renderDuration = () => {
    if (flightInfo.status === FlightStatus.ON_TIME) {
      return <FlightDurationTimer departureTime={flightInfo.departure_time} />;
    } else if (flightInfo.status === FlightStatus.ARRIVED) {
      return formatDuration(flightInfo.duration, t);
    }
    return null;
  };

  return (
    <Card variant="soft">
      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ pb: 1, borderBottom: '1px dashed #bdbdbd' }}
        >
          <Typography variant="h6">
            {`${flightInfo.airline.iata} ${flightInfo.flight_number}`}
          </Typography>

          <Stack direction="column" alignItems="flex-end">
            <Typography
              variant="body2"
              fontWeight={500}
              color={
                statusColors[flightInfo.status as keyof typeof statusColors]
              }
            >
              {t(`components.flight_tracking_card.status.${flightInfo.status}`)}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                display: 'inline-block',
                minHeight: '20px',
              }}
            >
              {renderDuration()}
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={0.5} sx={{ width: '100%', py: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="body2">
              {formatTime(flightInfo.departure_time)}
            </Typography>

            <Typography variant="body2">
              {formatTime(flightInfo.arrival_time)}
            </Typography>
          </Box>

          <Box
            display={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h5" fontWeight={600}>
              {flightInfo.departure_airport.iata}
            </Typography>

            <Box sx={{ flexGrow: 1, px: 2 }}>
              <FlightProgressLine flightInfo={flightInfo} />
            </Box>

            <Typography variant="h5" fontWeight={600}>
              {flightInfo.arrival_airport.iata}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="body2">
              {`${flightInfo.departure_airport.city} - ${flightInfo.departure_airport.country}`}
            </Typography>

            <Typography variant="body2">
              {`${flightInfo.arrival_airport.city} - ${flightInfo.arrival_airport.country}`}
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ pt: 2, borderTop: '1px dashed #bdbdbd' }}
        >
          <Stack direction="row" alignItems="center" spacing={3}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Tooltip
                title={t('components.flight_tracking_card.arrival_date')}
              >
                <CalendarMonthIcon fontSize="small" />
              </Tooltip>
              <Typography variant="body2">
                {formatDate(flightInfo.arrival_time)}
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Tooltip title={t('components.flight_tracking_card.duration')}>
                <ScheduleIcon fontSize="small" />
              </Tooltip>
              <Typography variant="body2">
                {formatDuration(flightInfo.duration, t)}
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Tooltip title={t('components.flight_tracking_card.passengers')}>
                <PeopleIcon fontSize="small" />
              </Tooltip>
              <Typography variant="body2">
                {flightInfo.passengers_total}
              </Typography>
            </Stack>
          </Stack>

          <Link href="/" underline="hover" sx={{ fontWeight: 'medium' }}>
            {t('components.flight_tracking_card.learn_more')}
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FlightTrackingCard;
