import { WorkClock } from '@/components/WorkClock';
import { Workday } from '@/types';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [currentWorkday, setCurrentWorkday] = useState<Workday | null>({
    id: `WD-${Date.now()}`,
    clockIn: Date.now() - 2.5 * 60 * 60 * 1000, // Clocked in 2.5 hours ago
    lunchStart: null,
    lunchEnd: null,
    extraClocks: [],
    targetClockOut: Date.now() + 5.5 * 60 * 60 * 1000,
    clockOut: null,
    overtime: 0,
  });

  return (
    <ScrollView className="flex-1 bg-bg">
      <SafeAreaView>
        <View className="flex flex-col gap-6 py-3">
          {/* Header */}
          <View className="flex flex-col gap-1 px-6">
            <Text className="text-base text-muted uppercase">
              Welcome Back, Harshit
            </Text>
            <Text className="text-3xl font-semibold text-fg">
              Keystone Work Clock
            </Text>
          </View>
          {/* Work Clock */}
          <WorkClock currentWorkday={currentWorkday} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
