export enum FlightStatus {
    SCHEDULED = 'scheduled',
    ON_TIME = 'on_time',
    DELAYED = 'delayed',
    CANCELLED = 'cancelled',
    ARRIVED = 'arrived',
}

export interface Aircraft {
    id: number;
    icao: string; // ICAO aircraft type, e.g. A320, B738
    iata?: string; // IATA aircraft code, e.g. 320, 738
    manufacturer: string;
    model: string;
    seats_capacity: number;
}

export interface Airport {
    id: number;
    iata: string;
    name: string;
    city: string;
    country: string;
    timezone: string; // IATA timezone, e.g.: Europe/Kyiv
}

export interface Airline {
    id: number;
    iata: string; // IATA code, e.g. 'LH' for Lufthansa
    icao: string; // ICAO code, e.g. 'DLH' for Lufthansa
    name: string;
    country?: string;
    alliance?: string;
    logo_url?: string;
}

export interface Flight {
    id: number;
    aircraft: Aircraft;
    airline: Airline;
    departure_airport: Airport;
    arrival_airport: Airport;
    flight_number: string;
    departure_time: string;
    arrival_time: string;
    duration: string;
    passengers_total: number;
    status: string;
    created_at: string;
    updated_at: string;
}

// export interface FlightInfo {
//     id: string;
//     airline: {
//         name: string;
//         code: string;
//         country: string;
//         logoUrl: string;
//     };
//     aircraft: {
//         code: string;
//         name: string;
//     };
//     flightNumber: string;
//     status: 'ON_TIME' | 'DELAYED' | 'CANCELLED' | 'ARRIVED';
//     flightDuration: number;
//     departure: {
//         date: string;
//         code: string;
//         city: string;
//         country: string;
//         icao: string;
//     };
//     arrival: {
//         date: string;
//         code: string;
//         city: string;
//         country: string;
//         icao: string;
//     };
//     totalTime: number;
//     totalPassengers: number;
// }
