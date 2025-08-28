import dayjs from 'dayjs';
import type { TFunction } from 'i18next';

export const formatDate = (date: string) => {
  return dayjs(date).format('D MMMM YYYY');
};

export const formatTime = (date: string) => {
  return dayjs(date).format('hh:mm A');
};

export const formatDuration = (time: string, t: TFunction) => {
  const hours = dayjs(time, 'HH:mm').hour();
  const minutes = dayjs(time, 'HH:mm').minute();
  let translationKey = 'units.duration.minutes';

  if (hours && minutes) {
    translationKey = 'units.duration.time';
  } else if (hours) {
    translationKey = 'units.duration.hours';
  }

  return t(translationKey, {
    hours,
    minutes,
  });
};
