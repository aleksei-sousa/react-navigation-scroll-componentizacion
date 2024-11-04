import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index"
      options={{
          title: 'S',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            }
        }} />
        <Stack.Screen
            name='ScrollView'
        />
    </Stack>
  );
}