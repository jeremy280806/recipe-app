import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}> 
        <Stack
          screenOptions={{
            headerShown: false,
          }} 
        >
          <Stack.Screen name="index" options={{ title: "Home" }} /> 
          <Stack.Screen name="about" options={{ title: "About" }} /> 
          <Stack.Screen name="recipe" options={{ title: "Recipe" }} />
          <Stack.Screen name="recipe/[id]" options={{ title: "Detail Recipe" }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
