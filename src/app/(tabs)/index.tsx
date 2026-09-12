import { ScreenWrapper, WorkClock } from '@/components';
import { Workday } from '@/types';
import { useState } from 'react';
import { Text, View } from 'react-native';

export default function WorkClockScreen() {
  const [currentWorkday, setCurrentWorkday] = useState<Workday | null>({
    id: `WD-${Date.now()}`,
    clockIn: Date.now() - 2.5 * 60 * 60 * 1000,
    lunchStart: null,
    lunchEnd: null,
    extraClocks: [],
    targetClockOut: Date.now() + 5.5 * 60 * 60 * 1000,
    clockOut: null,
    overtime: 0,
  });

  return (
    <ScreenWrapper>
      {/* Header */}
      <View className="flex flex-col gap-1">
        <Text className="text-base text-muted uppercase">
          Welcome Back, Harshit
        </Text>
        <Text className="text-3xl font-semibold text-fg">
          Keystone Work Clock
        </Text>
      </View>
      {/* Work Clock */}
      <WorkClock currentWorkday={currentWorkday} />
    </ScreenWrapper>
  );
}
