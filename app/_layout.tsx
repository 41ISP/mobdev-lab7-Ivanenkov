import Input from '@/shared/ui/input/Input';
import Topbar from '@/shared/ui/Topbar';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Redirect, Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';
import LoginScreen from '.';


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
    <Stack />
  )
}


