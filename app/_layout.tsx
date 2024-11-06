import { Stack } from 'expo-router/stack';

import { ThemeProvider } from "styled-components/native";

const theme = {
  colors: {
    red: "#f64348",
    dark: "#1c1A1D",
    light: "#EAEAEA",

  },
  fonts: {

  }
}

export default function Layout() {
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