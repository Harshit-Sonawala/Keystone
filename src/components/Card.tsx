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
        'rounded-card border border-border bg-card p-5 shadow-card',
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
