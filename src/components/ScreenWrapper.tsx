import React from 'react';
import { ScrollView, View, type ScrollViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface ScreenWrapperProps extends ScrollViewProps {
  children?: React.ReactNode;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <ScrollView className="flex-1 bg-bg" {...props}>
      <SafeAreaView className="flex-1">
        <View className="flex flex-col gap-6 py-3 px-6">{children}</View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ScreenWrapper;
