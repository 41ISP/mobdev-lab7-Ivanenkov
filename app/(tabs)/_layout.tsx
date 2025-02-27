import { useUserStore } from '@/entity/user/model/Store';
import Topbar from '@/shared/ui/Topbar';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [isMounted, setIsMounted] = useState(false)
  // const [user, setUser] = useUserStore()
  const router = useRouter()
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // useEffect(() => {
  //   if (isMounted && ) {
  //     router.push("/login")
  //   }
  // }, [isMounted])


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


