import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-black">
      <SafeAreaView className="flex-1 px-6 py-8">
        <View className="mb-8">
          <Text className="text-3xl font-extrabold text-white">Keystone</Text>
          <Text className="text-base text-neutral-400 mt-1">
            Track your day, build your habits.
          </Text>
        </View>

        <View className="space-y-4 gap-y-4">
          {/* Work Clock Card */}
          <Pressable className="bg-card border-l-4 border-work-primary p-5 rounded-2xl shadow-lg active:opacity-80">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-work-primary text-xs font-bold uppercase tracking-wider">
                  Work Clock
                </Text>
                <Text className="text-white text-lg font-bold mt-1">
                  0h 0m logged
                </Text>
                <Text className="text-neutral-400 text-sm mt-1">
                  Min target: 8h | Clocked Out
                </Text>
              </View>
              <View className="bg-work-dark/20 px-3 py-2 rounded-xl">
                <Text className="text-work-primary font-bold">Clock In</Text>
              </View>
            </View>
          </Pressable>

          {/* Expenses Card */}
          <Pressable className="bg-card border-l-4 border-expense-primary p-5 rounded-2xl shadow-lg active:opacity-80">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-expense-primary text-xs font-bold uppercase tracking-wider">
                  Expenses
                </Text>
                <Text className="text-white text-lg font-bold mt-1">
                  ₹0.00 spent
                </Text>
                <Text className="text-neutral-400 text-sm mt-1">
                  7 categories configured
                </Text>
              </View>
              <View className="bg-expense-dark/20 px-3 py-2 rounded-xl">
                <Text className="text-expense-primary font-bold">Log</Text>
              </View>
            </View>
          </Pressable>

          {/* Sleep Card */}
          <Pressable className="bg-card border-l-4 border-sleep-primary p-5 rounded-2xl shadow-lg active:opacity-80">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-sleep-primary text-xs font-bold uppercase tracking-wider">
                  Sleep Tracking
                </Text>
                <Text className="text-white text-lg font-bold mt-1">
                  No sleep log today
                </Text>
                <Text className="text-neutral-400 text-sm mt-1">
                  Press to log wake-up or bed time
                </Text>
              </View>
              <View className="bg-sleep-dark/20 px-3 py-2 rounded-xl">
                <Text className="text-sleep-primary font-bold">Sleep</Text>
              </View>
            </View>
          </Pressable>

          {/* Daily Habits Card */}
          <Pressable className="bg-card border-l-4 border-habit-primary p-5 rounded-2xl shadow-lg active:opacity-80">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-habit-primary text-xs font-bold uppercase tracking-wider">
                  Daily Habits
                </Text>
                <Text className="text-white text-lg font-bold mt-1">
                  0% Completed
                </Text>
                <Text className="text-neutral-400 text-sm mt-1">
                  0 of 5 habits marked done
                </Text>
              </View>
              <View className="bg-habit-dark/20 px-3 py-2 rounded-xl">
                <Text className="text-habit-primary font-bold">View</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
