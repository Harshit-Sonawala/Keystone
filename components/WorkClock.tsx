import { Workday } from '@/types';
import {
  Colors,
  TARGET_WORK_HOURS,
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
    <View className="items-center justify-center relative my-5">
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
      <View className="items-center justify-center w-52 h-52">
        <Text className="text-neutral-400 text-sm font-medium mb-1">
          {formatTime(now)}
        </Text>
        <Text className="text-white text-4xl font-semibold">
          {formatDuration(elapsedMs)}
        </Text>
        <Text className="text-work-primary text-sm font-medium mt-2">
          {statusLabel}
        </Text>
        <Text className="text-neutral-500 text-xs font-semibold tracking-widest mt-1">
          TARGET: {TARGET_WORK_HOURS}H
        </Text>
      </View>
    </View>
  );
};
