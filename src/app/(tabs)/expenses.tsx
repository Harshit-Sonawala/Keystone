import { Card, ScreenWrapper } from '@/components';
import { Text, View } from 'react-native';

export default function ExpensesScreen() {
  return (
    <ScreenWrapper>
      <View className="flex flex-col gap-1">
        <Text className="text-3xl font-semibold text-fg">Expenses</Text>
        <Text className="text-base text-muted">Track Daily Expenses</Text>
      </View>
      <Card>
        <Text className="text-muted text-center">
          Expenses tracking feature coming soon.
        </Text>
      </Card>
    </ScreenWrapper>
  );
}
