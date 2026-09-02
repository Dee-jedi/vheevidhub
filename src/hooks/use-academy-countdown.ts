'use client';

import { useState, useEffect } from 'react';

export interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const STORAGE_KEY = 'vheevid_academy_early_bird_target';

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

    let targetTime = localStorage.getItem(STORAGE_KEY);

    if (!targetTime) {
      // 2 days, 3 hours, 59 minutes, 57 seconds from now
      const now = new Date();
      const target = new Date(
        now.getTime() +
          2 * 24 * 60 * 60 * 1000 +
          3 * 60 * 60 * 1000 +
          59 * 60 * 1000 +
          57 * 1000
      );
      targetTime = target.toISOString();
      localStorage.setItem(STORAGE_KEY, targetTime);
    }

    const calculateTimeLeft = (): TimeLeft => {
      const difference = new Date(targetTime as string).getTime() - new Date().getTime();

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
