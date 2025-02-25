import { View } from "react-native"
import { Stack, } from "expo-router"
import Chat from "@/shared/ui/chat/Chat"
import Input from "@/shared/ui/input/Input"
const IndexScreen = () => {

    return (
        <View >
            <Stack.Screen name="index" options={{ title: 'scroem', headerShown: false }} />
            <Chat />

        </View>
    )
}
export default IndexScreen

// const Style = StyleSheet.create(
//     {
//         // btn: {
//         //     width: 150,
//         //     height: 50,
//         //     borderRadius: 1,
//         //     borderWidth: 1,
//         //     borderColor: 'black',
//         //     justifyContent: 'center',
//         //     alignItems: 'center'
//         // },
//     }
// )