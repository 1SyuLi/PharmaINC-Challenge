import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import {
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme/theme';

import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
