import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1 px-6 py-8">
        <View className="mb-8">
          <Text className="text-3xl font-semibold text-white">Keystone Work Clock</Text>
          <Text className="text-base text-neutral-400 mt-1">
            Track your daily work hours.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
