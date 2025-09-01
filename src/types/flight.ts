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
    status: FlightStatus;
    created_at: string;
    updated_at: string;
}
