import { Workday } from '@/types';
import {
  Colors,
  TARGET_WORK_MS,
  WORK_CLOCK_CONFIG,
  calculateElapsedMs,
  formatDuration,
  formatTime,
} from '@/utils';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface WorkClockProps {
  currentWorkday: Workday | null;
}

export const WorkClock: React.FC<WorkClockProps> = ({ currentWorkday }) => {
  const [now, setNow] = useState<number>(Date.now());

  const isActive = Boolean(
    currentWorkday?.clockIn && !currentWorkday?.clockOut,
  );

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const elapsedMs = calculateElapsedMs(currentWorkday, now);
  const remainingMs = Math.max(0, TARGET_WORK_MS - elapsedMs);
  const progress = Math.min(Math.max(elapsedMs / TARGET_WORK_MS, 0), 1);

  const { SIZE, STROKE_WIDTH } = WORK_CLOCK_CONFIG;
  const radius = (SIZE - STROKE_WIDTH) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress * circumference;

  const isClockedIn = isActive;
  const statusLabel = isClockedIn
    ? currentWorkday?.lunchStart && !currentWorkday?.lunchEnd
      ? 'On Lunch Break'
      : 'Clocked In'
    : 'Clocked Out';

  return (
    <View className="items-center justify-center relative py-5">
      <Svg width={SIZE} height={SIZE} className="absolute">
        {/* Background Track Circle */}
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={radius}
          stroke="#1F1B2E"
          strokeWidth={STROKE_WIDTH}
          fill="transparent"
        />
        {/* Progress Circle */}
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={radius}
          stroke={Colors.work.primary}
          strokeWidth={STROKE_WIDTH}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
        />
      </Svg>

      {/* Internal Text Metrics */}
      <View className="flex flex-col items-center justify-center w-52 h-52 gap-5">
        <Text className="text-neutral-400">{formatTime(now)}</Text>
        <Text className="text-white text-4xl font-semibold">
          {formatDuration(elapsedMs)}
        </Text>
        <Text className="text-work-primary text-sm font-medium">
          {statusLabel}
        </Text>
        <Text className="text-neutral-500 text-sm font-semibold">
          {formatDuration(remainingMs).toUpperCase()} Left
        </Text>
      </View>
    </View>
  );
};
