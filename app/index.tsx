import Button from "@/shared/ui/btn/Button"
import Input from "@/shared/ui/input/Input"
import { router } from "expo-router"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { create} from "zustand"


const LoginScreen = () => {
    const [value, setValue] = useState("")
    const [userId, setUserId]= useState()
    useEffect(() => {
        // if(userId = value)
    }, [])
    return (
        <View>
            <Input value={value} setValue={setValue} placevalue="Введите свой id"></Input>
            <Button onClick={() => router.replace('/(tabs)')}></Button>
        </View>
    )
}
export default LoginScreen