import { StyleSheet, Text, View } from "react-native"
import MessageBubble from "./MessageBubble"

const Chat =() =>{
    return(

    <View style={Style.chat}>
        <MessageBubble>Привет!</MessageBubble>
        <MessageBubble received={true}>Ну привет!</MessageBubble>
        </View>
)
}

const Style = StyleSheet.create({
   chat:{
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 384,
    height:40,
    marginLeft:4,
    backgroundColor: "#66ccff",
    fontSize: 15,
    marginTop: 10,
   }
})
export default Chat