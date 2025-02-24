import { PropsWithChildren } from "react"
import { Text, View } from "react-native"

interface IMessageBubbleProps extends PropsWithChildren
{
    received?:boolean,
}
const MessageBubble = ({children, received}: IMessageBubbleProps) =>{
    return(
        <View>
            <Text>
                {children}
            </Text>
        
        </View>
    )
}
export default MessageBubble