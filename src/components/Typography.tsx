import { Text } from 'react-native';

type TypographyVariant = 'body' | 'caption' | 'muted';

type TypographyProps = {
  variant?: TypographyVariant;
  className?: string;
  children: React.ReactNode;
};

const variantStyles: Record<TypographyVariant, string> = {
  body: 'font-outfit-regular text-base text-foreground',
  caption: 'font-outfit-medium text-sm text-foreground-muted',
  muted: 'font-outfit-regular text-sm text-foreground-faint',
};

export default function Typography({
  variant = 'body',
  className = '',
  children,
}: TypographyProps) {
  return (
    <Text className={`${variantStyles[variant]} ${className}`}>{children}</Text>
  );
}
