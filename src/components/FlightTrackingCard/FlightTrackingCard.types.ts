export interface FlightInfo {
    id: string;
    airline: {
        name: string;
        code: string;
        country: string;
        logoUrl: string;
    };
    aircraft: {
        code: string;
        name: string;
    };
    flightNumber: string;
    status: 'ON_TIME' | 'DELAYED' | 'CANCELLED' | 'ARRIVED';
    flightDuration: number;
    departure: {
        date: string;
        code: string;
        city: string;
        country: string;
        icao: string;
    };
    arrival: {
        date: string;
        code: string;
        city: string;
        country: string;
        icao: string;
    };
    totalTime: number;
    totalPassengers: number;
}
