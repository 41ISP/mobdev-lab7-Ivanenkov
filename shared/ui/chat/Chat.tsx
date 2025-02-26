import { ScrollView, StyleSheet, Text, TouchableOpacity, View, ViewComponent } from "react-native"
import MessageBubble from "./MessageBubble"
import Input from "../input/Input"
import { useState } from "react"


const Chat = () => {
    const [message, setMessage] = useState("")
    return (
        <View style={Style.viv}>
            <ScrollView style={Style.messageviv}>

                <MessageBubble >
                    Привет!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit vero aut distinctio!
                    Libero quo eum nemo assumenda ab quas. Deserunt!
                </MessageBubble>
                <MessageBubble received={true} ><Text >Ну привет!</Text></MessageBubble>
            </ScrollView>
            <View style={Style.input}>
                <Input value={message} setValue={setMessage} placevalue="Напишите сообщение" />
                <TouchableOpacity style={Style.messagebtn}><Text style={Style.text}>✈️👍</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    text:{
        fontSize: 25,
        verticalAlign: 'middle',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viv: {
        padding: 10,
        height: "100%",
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    messagebtn:{
        width: 70,
        height: 70,
        borderWidth: 0.5,
        backgroundColor: "#66ccff",
        borderColor: 'black',
        alignSelf: 'flex-end'
    },
    messageviv: {
        // flex:1,
    }
})
export default Chat