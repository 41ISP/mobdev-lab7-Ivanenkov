import Topbar from '@/shared/ui/Topbar';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  return (
   <>
    <Stack>
      <Stack.Screen name="index" options={{title: 'scroem', headerShown: false}}/>
      <Stack.Screen name="ContactScreen" options={{title: 'Contact',headerShown: false}}/>
      <Stack.Screen name="ChatsScreen" options={{title: 'Chats', headerShown: false}}/>
      <Stack.Screen name="LoginScreen" options={{title: 'Login', headerShown: false}}/>
    </Stack>
      <Topbar/>
    </>
  );
}


