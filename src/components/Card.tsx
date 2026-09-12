import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../utils';

export interface CardProps extends ViewProps {
  className?: string;
  children?: React.ReactNode;
}

export const Card = ({ className, children, style, ...props }: CardProps) => {
  return (
    <View
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900',
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </View>
  );
};

export default Card;
