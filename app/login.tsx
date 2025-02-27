import { useUserStore } from "@/entity/user/model/Store"
import Button from "@/shared/ui/btn/Button"
import Input from "@/shared/ui/input/Input"
import { router} from "expo-router"
import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import messangerAPI from "@/shared/ui/api/api"
const LoginScreen = () => {
    const [value, setValue] = useState("")
    const { user, setUser } = useUserStore()

    const handleClick = () => {
 
        if (value.trim().length > 0) {
            messangerAPI.registration(value)
            setUser({ id: value })
            router.replace('/(tabs)')
        }
    
    }
    useEffect(() => {
        // if(userId = value)

    }, [])
    return (
        <View style={Style.viv}>
            
            <Input value={value} setValue={setValue} placevalue="Введите свой id"></Input>
            <Button onClick={handleClick}></Button>
        </View>
    )
}

const Style = StyleSheet.create(
    {
        viv:{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        }
    }
)
export default LoginScreen