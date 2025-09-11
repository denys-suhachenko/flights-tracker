import dayjs from 'dayjs';
import type { TFunction } from 'i18next';

export const formatDate = (date: string) => {
  return dayjs(date).format('D MMMM YYYY');
};

export const formatTime = (date: string) => {
  return dayjs(date).format('hh:mm A');
};

export const formatDuration = (time: number | string, t?: TFunction) => {
  let hours = 0;
  let minutes = 0;

  if (typeof time === 'number') {
    hours = Math.floor(time / 60);
    minutes = time % 60;
  } else {
    hours = dayjs(time, 'HH:mm').hour();
    minutes = dayjs(time, 'HH:mm').minute();
  }

  let translationKey = 'units.duration.minutes';

  if (hours && minutes) {
    translationKey = 'units.duration.time';
  } else if (hours) {
    translationKey = 'units.duration.hours';
  }

  if (t) {
    return t(translationKey, {
      hours,
      minutes,
    });
  } else {
    return `${hours}:${minutes}`;
  }
};
