import Container from '@mui/material/Container';
import { Grid, Stack } from '@mui/material';

import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import FlightTrackingCard from '../components/FlightTrackingCard/FlightTrackingCard';
import { flights as mockFlights } from '../mocks/flightInfo.mock';

const Homepage = () => {
    return (
        <div>
            <Header />
            <Container>
                <Grid container spacing={3} sx={{ py: 4 }}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Filter />
                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }}>
                        <Stack spacing={3}>
                            {mockFlights.map((flight) => (
                                <FlightTrackingCard
                                    key={flight.id}
                                    flightInfo={flight}
                                />
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Homepage;
