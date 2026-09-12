import { Platform } from 'react-native';

export const COLORS = {
  bg: '#111111',
  card: '#1d1d1d',
  border: '#2d2d2d',
  fg: '#ffffff',
  muted: '#71717a',
  work: '#0ea5e9',
  expense: '#10b981',
  sleep: '#6366f1',
  habit: '#84cc16',
} as const;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;

export const TARGET_WORK_HOURS = 8;
export const TARGET_WORK_MS = TARGET_WORK_HOURS * 60 * 60 * 1000;
