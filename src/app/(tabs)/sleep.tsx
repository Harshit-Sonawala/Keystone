import { Card, ScreenWrapper } from '@/components';
import { Text, View } from 'react-native';

export default function SleepScreen() {
  return (
    <ScreenWrapper>
      <View className="flex flex-col gap-1">
        <Text className="text-3xl font-semibold text-fg">Sleep Tracker</Text>
        <Text className="text-base text-muted">Improve Rest & Recovery</Text>
      </View>
      <Card>
        <Text className="text-muted text-center">
          Sleep tracking feature coming soon.
        </Text>
      </Card>
    </ScreenWrapper>
  );
}
