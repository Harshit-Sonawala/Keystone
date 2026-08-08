import { Workday } from '@/types';
import {
  Colors,
  TARGET_WORK_MS,
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
  const SIZE = 260;
  const STROKE_WIDTH = 15;
  const CENTER = SIZE / 2;
  const RADIUS = (SIZE - STROKE_WIDTH) / 2;
  const CIRCUMFERENCE = RADIUS * 2 * Math.PI;

  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const elapsedMs = calculateElapsedMs(currentWorkday, now);

  return (
    <View
      style={{ width: SIZE, height: SIZE }}
      className="flex items-center justify-center relative self-center"
    >
      <Svg
        width={SIZE}
        height={SIZE}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {/* Background Track Circle */}
        <Circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke="#1F1B2E"
          strokeWidth={STROKE_WIDTH}
          fill="transparent"
        />
        {/* Progress Circle */}
        <Circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke={Colors.work.primary}
          strokeWidth={STROKE_WIDTH}
          fill="transparent"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={
            CIRCUMFERENCE *
            (1 - Math.min(Math.max(elapsedMs / TARGET_WORK_MS, 0), 1))
          }
          strokeLinecap="round"
          transform={`rotate(-90 ${CENTER} ${CENTER})`}
        />
      </Svg>

      {/* Internal Text Metrics */}
      <View className="flex flex-col items-center justify-center gap-y-1">
        <Text className="text-neutral-400 font-medium">{formatTime(now)}</Text>
        <Text className="text-white text-4xl font-semibold">
          {formatDuration(elapsedMs)}
        </Text>
        <Text className="text-work-primary font-medium">
          {currentWorkday?.clockIn && !currentWorkday?.clockOut
            ? currentWorkday.lunchStart && !currentWorkday.lunchEnd
              ? 'On Lunch Break'
              : 'Clocked In'
            : 'Clocked Out'}
        </Text>
        <Text className="text-neutral-500 font-semibold tracking-widest">
          {`${formatDuration(Math.max(0, TARGET_WORK_MS - elapsedMs))} Left`}
        </Text>
      </View>
    </View>
  );
};
