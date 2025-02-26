import { StyleSheet, View } from "react-native"
import { Stack, } from "expo-router"
import Chat from "@/shared/ui/chat/Chat"

const IndexScreen = () => {

    return (
        <View style={Style.btn}>
            <Stack.Screen name="index" options={{ title: 'scroem', headerShown: false }} />
            <Chat />

        </View>
    )
}
export default IndexScreen

const Style = StyleSheet.create(
    {
        btn: {
         backgroundColor: "#e2eafc"
        }
    }
)