import dayjs from 'dayjs';

export const convertDateToHours = (date: string) => {
    return dayjs(date).diff(dayjs(), 'hours');
};
