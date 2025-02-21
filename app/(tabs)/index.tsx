import Button from "@/shared/ui/btn/Button"
import { StyleSheet, Text, View } from "react-native"
import { router, Stack, useRouter } from "expo-router"
const IndexScreen = () => {
    const userId = false
    const router = useRouter()

    return (
        <View >
            <Stack.Screen name="index" options={{title: 'scroem', headerShown: false}}/>
            <Button><Text>123</Text></Button>
        </View>
    )
}
export default IndexScreen

const Style = StyleSheet.create(
    {
        // btn: {
        //     width: 150,
        //     height: 50,
        //     borderRadius: 1,
        //     borderWidth: 1,
        //     borderColor: 'black',
        //     justifyContent: 'center',
        //     alignItems: 'center'
        // },
    }
)