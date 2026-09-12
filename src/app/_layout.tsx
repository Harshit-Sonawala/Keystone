import { DarkTheme, Stack, ThemeProvider } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
