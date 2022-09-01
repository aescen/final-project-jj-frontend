import { useState, useEffect } from 'react';

const calTimeLeft = (t) => {
  if (!t) return 0;

  const left = t - new Date().getTime();

  if (left < 0) return 0;

  return left;
};

export default function PaymentCountdown(endTime) {
  const [end, setEndTime] = useState(endTime);
  const [timeLeft, setTimeLeft] = useState(endTime);

  useEffect(() => {
    setTimeLeft(calTimeLeft(end));

    const timer = setInterval(() => {
      const targetLeft = calTimeLeft(end);
      setTimeLeft(targetLeft);

      if (targetLeft === 0) {
        clearInterval(timer);
      }
    });
    return () => clearInterval(timer);
  }, [end]);

  return [timeLeft, setEndTime];
}
