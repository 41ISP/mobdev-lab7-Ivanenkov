import Button from "@/shared/ui/btn/Button"
import { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { router, useRouter } from "expo-router"
const IndexScreen = () => {
    const userId = false
    const router = useRouter()

    return (
        <View >
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