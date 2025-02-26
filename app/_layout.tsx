import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [userId, setUserId] = useState(false)
  const router = useRouter()

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const userAuth = false
    setUserId(userAuth)
    if (userAuth) {
      router.replace("/(tabs)")
    }
  }, [])

  if (!loaded) {
    return null;
  }

  return (
    <Stack>

  <Stack.Screen name="index" options={{ title: 'scroem', headerShown: false }} />  
    </Stack>
  )
}


