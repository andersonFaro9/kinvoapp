import { Stack } from 'expo-router'


export default function Layout() {
  return (
    
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFF',
          },

          headerTintColor: '#FFF',
          headerShown: false,
        }}
      ></Stack>
    
  )
}

