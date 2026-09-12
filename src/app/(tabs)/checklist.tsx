import { Card, ScreenWrapper } from '@/components';
import { Text, View } from 'react-native';

export default function ChecklistScreen() {
  return (
    <ScreenWrapper>
      <View className="flex flex-col gap-1">
        <Text className="text-3xl font-semibold text-fg">Daily Checklist</Text>
        <Text className="text-base text-muted">Build Productive Habits</Text>
      </View>
      <Card>
        <Text className="text-muted text-center">
          Checklist & habits feature coming soon.
        </Text>
      </Card>
    </ScreenWrapper>
  );
}
