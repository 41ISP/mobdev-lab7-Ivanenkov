import { PropsWithChildren } from "react"
import { StyleSheet, Text, View } from "react-native"

interface IMessageBubbleProps extends PropsWithChildren {
    received?: boolean,

}
const MessageBubble = ({ children, received }: IMessageBubbleProps) => {
    return (
        <View style={received ? {...Style.messageBubble,  ...Style.messageBubble2 } : {...Style.messageBubble}}>
            <Text>
                {children}
            </Text>
            <Text style={Style.time}>13:07</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    messageBubble: {
        borderWidth: 1,
        width: '60%',
        backgroundColor: "#66ccff",
        fontSize: 15,
        borderRadius: 7,
        marginTop: 10,
        alignSelf: 'flex-end',
        padding: 10,
    },
    
    messageBubble2: {
        alignSelf: 'flex-start'
    },
    time: {

        alignSelf: 'flex-end'
    }

})
export default MessageBubble