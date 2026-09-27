import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaProvider style={{flex: 1}}>
        <Stack
            screenOptions={{
                headerShown: false,
            }} 
        >
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="about" options={{ title: "About" }} />
          <Stack.Screen name="recipe" options={{ title: "Recipe" }} />
        </Stack>
      </SafeAreaProvider>
    </SafeAreaProvider>
  );
}