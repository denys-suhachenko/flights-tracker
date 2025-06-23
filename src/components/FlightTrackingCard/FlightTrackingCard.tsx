import { Box, Button, Card, Stack, Tooltip, Typography } from '@mui/material';
import { CardContent } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useTranslation } from 'react-i18next';

import { formatDate, formatDuration, formatTime } from '../../utils/format';

import type { FlightInfo } from './FlightTrackingCard.types';
import FlightProgressLine from './components/FlightProgressLine';

interface FlightTrackingCardProps {
    flightInfo: FlightInfo;
}

const FlightTrackingCard = ({ flightInfo }: FlightTrackingCardProps) => {
    const { t } = useTranslation();

    return (
        <Card>
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ pb: 1, borderBottom: '1px dashed #bdbdbd' }}
                >
                    <Typography variant="h6">
                        {flightInfo.flightNumber}
                    </Typography>

                    <Stack direction="column" alignItems="flex-end">
                        <Typography variant="body2" color="success.main">
                            {t(
                                `components.flight_tracking_card.status.${flightInfo.status}`
                            )}
                        </Typography>

                        <Typography variant="caption">
                            {`${formatDuration(flightInfo.flightDuration, t)}`}
                        </Typography>
                    </Stack>
                </Stack>

                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{ width: '100%', py: 2 }}
                >
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="body2" mb={0.5}>
                            {`${t('components.flight_tracking_card.departure')}: ${formatTime(flightInfo.departure.date)}`}
                        </Typography>

                        <Typography variant="h5" fontWeight={600}>
                            {flightInfo.departure.code}
                        </Typography>

                        <Typography variant="body2">
                            {`${flightInfo.departure.city} - ${flightInfo.departure.country}`}
                        </Typography>
                    </Box>

                    <FlightProgressLine flightInfo={flightInfo} />

                    <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" mb={0.5}>
                            {`${t('components.flight_tracking_card.arrival')}: ${formatTime(flightInfo.arrival.date)}`}
                        </Typography>

                        <Typography variant="h5" fontWeight={600}>
                            {flightInfo.arrival.code}
                        </Typography>

                        <Typography variant="body2">
                            {`${flightInfo.arrival.city} - ${flightInfo.arrival.country}`}
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
                                title={t(
                                    'components.flight_tracking_card.arrival_date'
                                )}
                            >
                                <CalendarMonthIcon fontSize="small" />
                            </Tooltip>
                            <Typography variant="body2">
                                {formatDate(flightInfo.arrival.date)}
                            </Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Tooltip
                                title={t(
                                    'components.flight_tracking_card.duration'
                                )}
                            >
                                <ScheduleIcon fontSize="small" />
                            </Tooltip>
                            <Typography variant="body2">
                                {formatDuration(flightInfo.totalTime, t)}
                            </Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Tooltip
                                title={t(
                                    'components.flight_tracking_card.passengers'
                                )}
                            >
                                <PeopleIcon fontSize="small" />
                            </Tooltip>
                            <Typography variant="body2">
                                {flightInfo.totalPassengers}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Button size="small">
                        {t('components.flight_tracking_card.learn_more')}
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default FlightTrackingCard;
