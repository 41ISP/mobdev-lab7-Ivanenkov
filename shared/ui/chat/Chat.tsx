import { StyleSheet, Text, View } from "react-native"
import MessageBubble from "./MessageBubble"
import Input from "../input/Input"
import { useState } from "react"

const Chat = () => {
    const [message, setMessage] = useState("")
    return (
        <View style={Style.viv}>
            <MessageBubble >
                Привет!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit vero aut distinctio! 
                Libero quo eum nemo assumenda ab quas. Deserunt!
            </MessageBubble>
            <MessageBubble received={true} ><Text >Ну привет!</Text></MessageBubble>
            <Input value={message} setValue={setMessage} placevalue="Напишите сообщение"/>
        </View>
    )
}

const Style = StyleSheet.create({
    viv:{
        padding:10
    }
})
export default Chat