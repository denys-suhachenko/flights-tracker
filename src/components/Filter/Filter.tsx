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
import { useTranslation } from 'react-i18next';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

const airlines = [
    'SriLankan Airlines',
    'British Airways',
    'Air France',
    'Lufthansa',
    'Emirates',
    'Qantas',
];
const airports = [
    'London Heathrow',
    'Santorini',
    'John F. Kennedy International',
    'Los Angeles International',
    'Charles de Gaulle',
    'Leonardo da Vinci–Fiumicino',
    'Frankfurt am Main',
    'Adolfo Suárez Madrid–Barajas',
    'Dubai International',
    'Chhatrapati Shivaji International',
    'Sydney Kingsford Smith',
    'Melbourne Tullamarine',
];

const statuses = ['ON_TIME', 'DELAYED', 'CANCELLED', 'ARRIVED'];

const Filter = () => {
    const { t } = useTranslation();
    const [selectedAirports, setSelectedAirports] = useState<string[]>([]);
    const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
    const [passengersCount, setPassengersCount] = useState<number[]>([50, 250]);

    const handleChangeAirports = (event: SelectChangeEvent<string[]>) => {
        const value = event.target.value;
        setSelectedAirports(
            typeof value === 'string' ? value.split(',') : value
        );
    };

    const handleChangeAirlines = (event: SelectChangeEvent<string[]>) => {
        const value = event.target.value;
        setSelectedAirlines(
            typeof value === 'string' ? value.split(',') : value
        );
    };

    const handleChangeStatuses = (event: SelectChangeEvent<string[]>) => {
        const value = event.target.value;
        setSelectedStatuses(
            typeof value === 'string' ? value.split(',') : value
        );
    };

    return (
        <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                {t('pages.home.filter.title')}
            </Typography>

            <Stack spacing={2}>
                {/* Airports multiselect */}
                <FormControl fullWidth size="small">
                    <InputLabel>
                        {t('pages.home.filter.airports.title')}
                    </InputLabel>
                    <Select
                        multiple
                        value={selectedAirports}
                        onChange={handleChangeAirports}
                        renderValue={(selected) => selected.join(', ')}
                        label={t('pages.home.filter.airports.title')}
                    >
                        {airports.map((option) => (
                            <MenuItem key={option} value={option}>
                                <Checkbox
                                    checked={selectedAirports.includes(option)}
                                    sx={{ p: 0, mr: 1 }}
                                />
                                <ListItemText primary={option} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Airlines multiselect */}
                <FormControl fullWidth size="small">
                    <InputLabel>
                        {t('pages.home.filter.airlines.title')}
                    </InputLabel>
                    <Select
                        multiple
                        value={selectedAirlines}
                        onChange={handleChangeAirlines}
                        renderValue={(selected) => selected.join(', ')}
                        label={t('pages.home.filter.airlines.title')}
                    >
                        {airlines.map((option) => (
                            <MenuItem key={option} value={option}>
                                <Checkbox
                                    checked={selectedAirlines.includes(option)}
                                    sx={{ p: 0, mr: 1 }}
                                />
                                <ListItemText primary={option} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Divider />

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

                {/* Statuses multiselect */}
                <FormControl fullWidth size="small">
                    <InputLabel>
                        {t('pages.home.filter.status.title')}
                    </InputLabel>
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

                <Divider />

                {/* Passengers range slider */}
                <FormControl fullWidth>
                    <FormLabel sx={{ mb: 1 }}>
                        {t('pages.home.filter.passengers.title')}
                    </FormLabel>
                    <Slider
                        getAriaLabel={() =>
                            t('pages.home.filter.passengers.title')
                        }
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
