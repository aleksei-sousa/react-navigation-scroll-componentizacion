import { Stack } from 'expo-router/stack';

import { ThemeProvider } from "styled-components/native";


import { useFonts } from 'expo-font'
import { Roboto_700Bold } from '@expo-google-fonts/roboto'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react';
import { View } from 'react-native'

//SplashScreen.preventAutoHideAsync()

const theme = {
  colors: {
    red: "#f64348",
    dark: "#1c1A1D",
    light: "#EAEAEA",

  },
  fonts: {
    Roboto700: 'Roboto_700Bold'
  }
}

export default function Layout() {

  const [fontsLoaded] = useFonts({ Roboto_700Bold })

  if(!fontsLoaded){
    return null
  }

  return (
<ThemeProvider theme={theme}>
    <Stack>
      <Stack.Screen name="index"
      options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            }
          }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="/ViewsType/index" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="ViewsType/ScrollView" options={{ headerShown: false }} /> */}
      
    </Stack>
</ThemeProvider>
  );
}