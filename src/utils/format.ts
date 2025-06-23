import dayjs from 'dayjs';
import type { TFunction } from 'i18next';

export const formatDate = (date: string) => {
    return dayjs(date).format('YYYY-MM-DD');
};

export const formatTime = (date: string) => {
    return dayjs(date).format('hh:mm A');
};

export const formatDuration = (duration: number, t: TFunction) => {
    const hours = Math.floor(duration); // integer part of duration
    const minutes = Math.floor((duration - hours) * 60); // convert decimal part to minutes
    let translationKey = 'units.duration.minutes'; // show minutes by default (even 0 min)

    if (hours && minutes) {
        translationKey = 'units.duration.time'; // show time if both hours and minutes are present
    } else if (hours) {
        translationKey = 'units.duration.hours'; // show hours if only hours are present
    }

    return t(translationKey, {
        hours,
        minutes,
    });
};
