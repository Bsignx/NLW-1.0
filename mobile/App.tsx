import React from 'react';
import Home from './src/pages/Home';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { Roboto_400Regular, Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto';

import Routes from './src/routes'

const App = () => {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes />
    </>
  );
}

export default App