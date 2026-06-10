export const Colors = {
  // Backgrounds
  background: '#000000',
  card: '#0E0D12',
  surface: '#1A1825',

  // Borders
  border: '#2A2838',

  // Text
  textPrimary: '#F1F0F5',
  textSecondary: '#9896A4',
  textMuted: '#5C5A68',

  // Module: Work Clock
  work: {
    primary: '#0EA5E9',
    dark: '#0369A1',
  },

  // Module: Expenses
  expenses: {
    primary: '#10B981',
    dark: '#047857',
  },

  // Module: Sleep
  sleep: {
    primary: '#6366F1',
    dark: '#4338CA',
  },

  // Module: Habits
  habits: {
    primary: '#84CC16',
    dark: '#4D7C0F',
  },
} as const;

export const FontFamily = {
  outfitThin: 'Outfit_100Thin',
  outfitLight: 'Outfit_300Light',
  outfitRegular: 'Outfit_400Regular',
  outfitMedium: 'Outfit_500Medium',
  outfitSemiBold: 'Outfit_600SemiBold',
  outfitBold: 'Outfit_700Bold',
  outfitExtraBold: 'Outfit_800ExtraBold',
  interRegular: 'Inter_400Regular',
  interMedium: 'Inter_500Medium',
  interSemiBold: 'Inter_600SemiBold',
  interBold: 'Inter_700Bold',
} as const;

// Future: add LightColors and a useTheme() hook
export type AppColors = typeof Colors;
