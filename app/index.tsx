import { useUserStore } from "@/entity/user/model/Store"
import Button from "@/shared/ui/btn/Button"
import Input from "@/shared/ui/input/Input"
import { router, Stack } from "expo-router"
import { useEffect, useState } from "react"
import { View } from "react-native"

const LoginScreen = () => {
    const [value, setValue] = useState("")
    const {user, setUser} = useUserStore()
    
    const handleClick= () =>{
        if(value.trim().length >0 )
        {
            setUser({id: value})
            router.replace('/(tabs)')
            alert(value)
        }
    }
    useEffect(() => {
        // if(userId = value)

    }, [])
    return (
        <View>
            <Stack.Screen name="index" options={{title: 'scroem', headerShown: false}}/>
            <Input value={value} setValue={setValue} placevalue="Введите свой id"></Input>
            <Button onClick={handleClick}></Button>
        </View>
    )
}
export default LoginScreen