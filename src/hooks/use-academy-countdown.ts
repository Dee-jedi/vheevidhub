'use client';

import { useState, useEffect } from 'react';

export interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

// 2-Day Cycle Duration in Milliseconds (48 Hours = 172,800,000 ms)
const CYCLE_DURATION_MS = 2 * 24 * 60 * 60 * 1000;

// Universal Fixed Anchor Epoch (WAT UTC+1)
// Ensures every device across the world computes the exact same 2-day cycle in real-time
const ANCHOR_TIMESTAMP = new Date('2026-09-01T00:00:00+01:00').getTime();

export function useAcademyCountdown() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: '01',
    hours: '23',
    minutes: '59',
    seconds: '57',
  });

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = (): TimeLeft => {
      const now = Date.now();
      const rawElapsed = (now - ANCHOR_TIMESTAMP) % CYCLE_DURATION_MS;
      const elapsed = rawElapsed >= 0 ? rawElapsed : rawElapsed + CYCLE_DURATION_MS;
      const remaining = CYCLE_DURATION_MS - elapsed;

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remaining / (1000 * 60)) % 60);
      const seconds = Math.floor((remaining / 1000) % 60);

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
