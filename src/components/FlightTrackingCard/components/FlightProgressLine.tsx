import { Box, Stack } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';

import type { FlightInfo } from '../FlightTrackingCard.types';
import styles from './FlightProgressLine.styles';

interface FlightProgressLineProps {
    flightInfo: FlightInfo;
}

const FlightProgressLine = ({ flightInfo }: FlightProgressLineProps) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            sx={{
                justifyContent: 'space-between',
                flexGrow: 1,
            }}
        >
            <Box sx={[styles.destinationDot, styles.departureDotLine]} />
            <FlightIcon sx={styles.flightIcon} />
            <Box sx={[styles.destinationDot, styles.arrivalDotLine]} />
        </Stack>
    );
};

export default FlightProgressLine;
