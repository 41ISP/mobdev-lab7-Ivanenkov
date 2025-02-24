import Chat from "@/shared/ui/chats/Chats"
import { ScrollView, StyleSheet, Text, View } from "react-native"

const ChatsScreen = () =>{
    return(
        <ScrollView style={Style.chat}>
            <Chat/>
        </ScrollView>
    )
}
const Style = StyleSheet.create(
    {
        chat:{
            borderWidth: 0,
            backgroundColor:"66ffcc",
        }
    }
)
export default ChatsScreen