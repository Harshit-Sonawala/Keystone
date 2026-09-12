import { COLORS } from '@/utils';
import { Tabs } from 'expo-router';
import { Clock, Moon, SquareCheck, Wallet } from 'lucide-react-native';
import { Pressable } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: COLORS.muted,
        tabBarButton: ({ children, onPress, onLongPress, style }) => (
          <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={style}
            android_ripple={{
              borderless: true,
              color: 'transparent',
            }}
          >
            {children}
          </Pressable>
        ),
        tabBarStyle: {
          backgroundColor: COLORS.bg,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
        },
      }}
    >
      {/* 1. Work Clock Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Work Clock',
          tabBarActiveTintColor: COLORS.work,
          tabBarIcon: ({ color, size }) => <Clock size={size} color={color} />,
        }}
      />

      {/* 2. Expenses Tab */}
      <Tabs.Screen
        name="expenses"
        options={{
          title: 'Expenses',
          tabBarActiveTintColor: COLORS.expense,
          tabBarIcon: ({ color, size }) => <Wallet size={size} color={color} />,
        }}
      />

      {/* 3. Sleep Tab */}
      <Tabs.Screen
        name="sleep"
        options={{
          title: 'Sleep',
          tabBarActiveTintColor: COLORS.sleep,
          tabBarIcon: ({ color, size }) => <Moon size={size} color={color} />,
        }}
      />

      {/* 4. Checklist Tab */}
      <Tabs.Screen
        name="checklist"
        options={{
          title: 'Checklist',
          tabBarActiveTintColor: COLORS.habit,
          tabBarIcon: ({ color, size }) => (
            <SquareCheck size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
