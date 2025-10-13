import type { Airline, Airport, Flight } from '@app/types/flight';

import httpService, {
  type ApiListResponse,
  type QueryOptions,
} from './httpService';

const getFlights = async (
  page = 1,
  size = 10,
  order = 'default',
  options?: QueryOptions // TODO: make global queryFn in QueryClient to prevent options duplication
): Promise<ApiListResponse<Flight>> => {
  const response = await httpService.get('/flights', {
    params: {
      page,
      size,
      order,
    },
    ...options,
  });
  return response.data;
};

const getAirports = async (options?: QueryOptions): Promise<Airport[]> => {
  const response = await httpService.get('/airports', options);
  return response.data;
};

const getAirlines = async (options?: QueryOptions): Promise<Airline[]> => {
  const response = await httpService.get('/airlines', options);
  return response.data;
};

export default {
  getFlights,
  getAirports,
  getAirlines,
};
