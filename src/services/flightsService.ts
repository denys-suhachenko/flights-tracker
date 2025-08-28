import httpService from './httpService';

const getFlights = async () => {
    const response = await httpService.get('/flights');
    return response.data;
};

const getAirports = async () => {
    const response = await httpService.get('/airports');
    return response.data;
};

const getAirlines = async () => {
    const response = await httpService.get('/airlines');
    return response.data;
};

export default {
    getFlights,
    getAirports,
    getAirlines,
};
