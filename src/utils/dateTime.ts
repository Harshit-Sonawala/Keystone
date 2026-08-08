import { Workday } from '@/types';

/**
 * Calculates total elapsed work milliseconds for a Workday record.
 */
export function calculateElapsedMs(workday: Workday | null, nowMs: number = Date.now()): number {
  if (!workday || !workday.clockIn) return 0;

  const endMs = workday.clockOut || nowMs;
  let totalMs = endMs - workday.clockIn;

  if (workday.lunchStart) {
    const lunchEndMs = workday.lunchEnd || nowMs;
    totalMs -= Math.max(0, lunchEndMs - workday.lunchStart);
  }

  if (workday.extraClocks) {
    for (const [inTime, outTime] of workday.extraClocks) {
      const extraEnd = outTime || nowMs;
      totalMs += Math.max(0, extraEnd - inTime);
    }
  }

  return Math.max(0, totalMs);
}

/**
 * Formats duration in milliseconds to "Xh Ym" string.
 */
export function formatDuration(ms: number): string {
  const totalMinutes = Math.floor(ms / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}

/**
 * Formats timestamp to 12-hour local time string (e.g. "10:30 AM").
 */
export function formatTime(timestamp: number | Date = Date.now()): string {
  const date = typeof timestamp === 'number' ? new Date(timestamp) : timestamp;
  return date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}
