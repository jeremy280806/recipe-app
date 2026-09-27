import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/* flex: 1 ditambahkan agar layout memenuhi seluruh layar */}
      <SafeAreaView style={{ flex: 1 }}>
        <Stack 
          screenOptions={{ 
            headerShown: false // Menghilangkan header bawaan
            /* (Catatan dari video): Jika headerShow tidak false, kamu bisa mengatur gayanya:
               headerTintColor: 'blue',
               headerStyle: { backgroundColor: 'gray' },
               headerTitleStyle: { fontSize: 50, fontWeight: 'bold' } 
            */
          }}
        >
          {/* Mendaftarkan nama-nama file screen (rute) */}
          <Stack.Screen name="index" options={{ title: 'Home' }} />
          <Stack.Screen name="about" options={{ title: 'About' }} />
          <Stack.Screen name="recipe" options={{ title: 'Recipe' }} />
          <Stack.Screen name="recipe/[id]" options={{ title: 'Detail Recipe' }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};