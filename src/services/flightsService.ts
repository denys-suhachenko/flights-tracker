import type { Airline, Airport, Flight } from '@app/types/flight';

import httpService, { type ApiListResponse } from './httpService';

const getFlights = async (
  page = 1,
  size = 10
): Promise<ApiListResponse<Flight>> => {
  const response = await httpService.get('/flights', {
    params: {
      page,
      size,
    },
  });
  return response.data;
};

const getAirports = async (): Promise<Airport[]> => {
  const response = await httpService.get('/airports');
  return response.data;
};

const getAirlines = async (): Promise<Airline[]> => {
  const response = await httpService.get('/airlines');
  return response.data;
};

export default {
  getFlights,
  getAirports,
  getAirlines,
};
