import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Button from "./btn/Button"
import { router } from "expo-router"
const Topbar = () => {

    return (
        <View style={Style.view}>
            <Button onClick={()=> router.push('/')}>Сообщение💬</Button>
            <Button onClick={()=> router.push('/ContactScreen')}>Контакты📞</Button>
            <Button onClick={()=> router.push('/ChatsScreen')}>Чаты📝</Button>
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