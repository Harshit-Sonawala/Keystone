import { Text } from 'react-native';

type HeadingVariant = 'sm' | 'md' | 'lg';

type HeadingProps = {
  variant?: HeadingVariant;
  className?: string;
  children: React.ReactNode;
};

const variantStyles: Record<HeadingVariant, string> = {
  sm: 'font-outfit-medium text-lg text-foreground',
  md: 'font-outfit-medium text-xl text-foreground',
  lg: 'font-outfit-semibold text-3xl text-foreground',
};

export default function Heading({
  variant = 'md',
  className,
  children,
}: HeadingProps) {
  return (
    <Text className={`${variantStyles[variant]} ${className}`}>{children}</Text>
  );
}
