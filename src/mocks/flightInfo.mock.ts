import type { FlightInfo } from '../components/FlightTrackingCard/FlightTrackingCard.types';

export const flights: FlightInfo[] = [
    {
        id: '1',
        airline: {
            name: 'SriLankan Airlines',
            code: 'UL',
            country: 'Sri Lanka',
            logoUrl:
                'https://content.airhex.com/content/logos/airlines_UL_200_200_s.png',
        },
        aircraft: {
            code: 'A320',
            name: 'Airbus A320',
        },
        flightNumber: 'UL 236',
        status: 'ON_TIME',
        flightDuration: 2.18,
        departure: {
            date: '2025-06-19T09:00:00',
            code: 'LDN',
            city: 'London',
            country: 'United Kingdom',
            icao: 'EGLL', // London Heathrow Airport
        },
        arrival: {
            date: '2025-06-20T00:25:00',
            code: 'JTR',
            city: 'Santorini',
            country: 'Greece',
            icao: 'LGSR', // Santorini (Thira) International
        },
        totalTime: 15.42,
        totalPassengers: 45,
    },
    {
        id: '2',
        airline: {
            name: 'British Airways',
            code: 'BA',
            country: 'United Kingdom',
            logoUrl:
                'https://content.airhex.com/content/logos/airlines_BA_200_200_s.png',
        },
        aircraft: {
            code: 'B777',
            name: 'Boeing 777-300ER',
        },
        flightNumber: 'BA 789',
        status: 'DELAYED',
        flightDuration: 1.75,
        departure: {
            date: '2025-06-21T11:30:00',
            code: 'JFK',
            city: 'New York',
            country: 'United States',
            icao: 'KJFK', // John F. Kennedy International Airport
        },
        arrival: {
            date: '2025-06-21T14:15:00',
            code: 'LAX',
            city: 'Los Angeles',
            country: 'United States',
            icao: 'KLAX', // Los Angeles International Airport
        },
        totalTime: 2.75,
        totalPassengers: 180,
    },
    {
        id: '3',
        airline: {
            name: 'Air France',
            code: 'AF',
            country: 'France',
            logoUrl:
                'https://content.airhex.com/content/logos/airlines_AF_200_200_s.png',
        },
        aircraft: {
            code: 'A321',
            name: 'Airbus A321neo',
        },
        flightNumber: 'AF 456',
        status: 'ON_TIME',
        flightDuration: 3.33,
        departure: {
            date: '2025-06-22T08:15:00',
            code: 'CDG',
            city: 'Paris',
            country: 'France',
            icao: 'LFPG', // Charles de Gaulle Airport
        },
        arrival: {
            date: '2025-06-22T11:35:00',
            code: 'FCO',
            city: 'Rome',
            country: 'Italy',
            icao: 'LIRF', // Leonardo da Vinci–Fiumicino Airport
        },
        totalTime: 3.33,
        totalPassengers: 120,
    },
    {
        id: '4',
        airline: {
            name: 'Lufthansa',
            code: 'LH',
            country: 'Germany',
            logoUrl:
                'https://content.airhex.com/content/logos/airlines_LH_200_200_s.png',
        },
        aircraft: {
            code: 'E195',
            name: 'Embraer E195',
        },
        flightNumber: 'LH 123',
        status: 'CANCELLED',
        flightDuration: 0,
        departure: {
            date: '2025-06-23T10:45:00',
            code: 'FRA',
            city: 'Frankfurt',
            country: 'Germany',
            icao: 'EDDF', // Frankfurt am Main Airport
        },
        arrival: {
            date: '2025-06-23T13:30:00',
            code: 'MAD',
            city: 'Madrid',
            country: 'Spain',
            icao: 'LEMD', // Adolfo Suárez Madrid–Barajas
        },
        totalTime: 2.75,
        totalPassengers: 95,
    },
    {
        id: '5',
        airline: {
            name: 'Emirates',
            code: 'EK',
            country: 'UAE',
            logoUrl:
                'https://content.airhex.com/content/logos/airlines_EK_200_200_s.png',
        },
        aircraft: {
            code: 'A380',
            name: 'Airbus A380-800',
        },
        flightNumber: 'EK 789',
        status: 'ON_TIME',
        flightDuration: 4.15,
        departure: {
            date: '2025-06-24T07:30:00',
            code: 'DXB',
            city: 'Dubai',
            country: 'UAE',
            icao: 'OMDB', // Dubai International Airport
        },
        arrival: {
            date: '2025-06-24T11:45:00',
            code: 'BOM',
            city: 'Mumbai',
            country: 'India',
            icao: 'VABB', // Chhatrapati Shivaji International Airport
        },
        totalTime: 4.25,
        totalPassengers: 220,
    },
    {
        id: '6',
        airline: {
            name: 'Qantas',
            code: 'QF',
            country: 'Australia',
            logoUrl:
                'https://content.airhex.com/content/logos/airlines_QF_200_200_s.png',
        },
        aircraft: {
            code: 'B738',
            name: 'Boeing 737-800',
        },
        flightNumber: 'QF 321',
        status: 'DELAYED',
        flightDuration: 2.5,
        departure: {
            date: '2025-06-25T18:00:00',
            code: 'SYD',
            city: 'Sydney',
            country: 'Australia',
            icao: 'YSSY', // Sydney Kingsford Smith Airport
        },
        arrival: {
            date: '2025-06-25T20:30:00',
            code: 'MEL',
            city: 'Melbourne',
            country: 'Australia',
            icao: 'YMML', // Melbourne Tullamarine Airport
        },
        totalTime: 2.5,
        totalPassengers: 150,
    },
];
