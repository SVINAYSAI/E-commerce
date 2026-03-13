import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetHours?: number;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetHours = 48 }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: targetHours,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date().getTime() + targetHours * 60 * 60 * 1000;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const totalHours = hours + days * 24;

        setTimeLeft({
          hours: totalHours,
          minutes,
          seconds,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetHours]);

  const formatNumber = (num: number): string => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 font-display text-[64px] leading-none text-gloss-black">
        <span>{formatNumber(timeLeft.hours)}</span>
        <span className="text-gloss-rose">:</span>
        <span>{formatNumber(timeLeft.minutes)}</span>
        <span className="text-gloss-rose">:</span>
        <span>{formatNumber(timeLeft.seconds)}</span>
      </div>
      <div className="flex gap-8 mt-2 text-[11px] font-body font-medium tracking-[0.2em] uppercase text-gloss-grey">
        <span>HOURS</span>
        <span>MINUTES</span>
        <span>SECONDS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
