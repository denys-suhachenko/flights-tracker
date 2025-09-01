import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

import { formatDuration } from '@app/utils/formatters';

interface FlightDurationTimerProps {
  departureTime: string;
}

const FlightDurationTimer = ({ departureTime }: FlightDurationTimerProps) => {
  const { t } = useTranslation();
  const [duration, setDuration] = useState(0);

  const calculateDuration = () => {
    return dayjs().diff(dayjs(departureTime), 'minute');
  };

  // milliseconds remaining until the next minute
  const timeToRefresh = (60 - dayjs().second()) * 1000;

  useEffect(() => {
    setDuration(calculateDuration());

    const timeout = setTimeout(() => {
      setDuration(calculateDuration());

      const interval = setInterval(() => {
        setDuration(calculateDuration());
      }, 1000);

      return () => clearInterval(interval);
    }, timeToRefresh);

    return () => clearTimeout(timeout);
  }, [departureTime]);

  return formatDuration(duration, t);
};

export default FlightDurationTimer;
