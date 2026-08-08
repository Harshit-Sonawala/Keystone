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
    <ScrollView className="flex-1 bg-black">
      <SafeAreaView className="flex-1 px-6 py-6 gap-y-6">
        <View className="gap-y-1">
          <Text className="text-3xl font-semibold text-white">
            Keystone Work Clock
          </Text>
          <Text className="text-base text-neutral-400">
            Track daily work hours
          </Text>
        </View>

        {/* Work Clock Circular Gauge */}
        <WorkClock currentWorkday={currentWorkday} />
      </SafeAreaView>
    </ScrollView>
  );
}
