import { Box, Stack } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import dayjs from 'dayjs';

import { FlightStatus, type Flight } from '@app/types/flight';

import styles from './FlightProgressLine.styles';
import { blueGrey } from '@mui/material/colors';

interface FlightProgressLineProps {
  flightInfo: Flight;
}

const FlightProgressLine = ({ flightInfo }: FlightProgressLineProps) => {
  const totalDuration = dayjs(flightInfo.arrival_time).diff(
    flightInfo.departure_time,
    'minutes'
  );
  const currentDuration = dayjs().diff(flightInfo.departure_time, 'minutes');
  const progress = Math.max(0, Math.min(currentDuration / totalDuration, 1));

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        flexGrow: 1,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          ...styles.destinationDot,
          bgcolor:
            flightInfo.status === FlightStatus.CANCELLED
              ? 'error.main'
              : blueGrey[700],
        }}
      />

      <Box sx={[styles.solidLine(`${progress * 100}%`)]}></Box>

      {flightInfo.status !== FlightStatus.CANCELLED && (
        <FlightIcon sx={styles.flightIcon} />
      )}

      <Box sx={[styles.dashedLine(`${(1 - progress) * 100}%`)]}></Box>

      <Box
        sx={{
          ...styles.destinationDot,
          bgcolor:
            flightInfo.status === FlightStatus.ARRIVED
              ? 'success.main'
              : blueGrey[700],
        }}
      />
    </Stack>
  );
};

export default FlightProgressLine;
