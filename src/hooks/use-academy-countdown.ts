'use client';

import { useState, useEffect } from 'react';

export interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

// Fixed Global Early Bird Target Date (Synchronized across all devices worldwide)
// Classes begin September 23, 2026; Early bird closes September 12, 2026 23:59:59 WAT (UTC+1)
const FIXED_TARGET_TIMESTAMP = new Date('2026-09-12T23:59:59+01:00').getTime();

export function useAcademyCountdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: '02',
    hours: '03',
    minutes: '59',
    seconds: '57',
  });

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = (): TimeLeft => {
      const difference = FIXED_TARGET_TIMESTAMP - Date.now();

      if (difference <= 0) {
        return {
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return { mounted, timeLeft };
}
