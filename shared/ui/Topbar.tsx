import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Button from "./btn/Button"
import { router } from "expo-router"
import { useUserStore } from "@/entity/user/model/Store"
const Topbar = () => {
        const {user, setUser} = useUserStore()
    
    const handleclick=()=>{
         
        setUser({ id: "" })
        router.replace('/login')
}
    return (
        <View style={Style.view}>
            <Button onClick={()=> router.push('/')}>Сообщение💬</Button>
            <Button onClick={()=> router.push('/ContactScreen')}>Контакты📞</Button>
            <Button onClick={()=> router.push('/ChatsScreen')}>Чаты📝</Button>
            <Button onClick={handleclick}><Text>↩️</Text></Button>
            
        </View>
    )
}

const Style = StyleSheet.create(
    {
        view:
        {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            
        },
    }
)
export default Topbar