import Topbar from '@/shared/ui/Topbar';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
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
      
    </Stack>
      <Topbar/>
    </>
  );
}


