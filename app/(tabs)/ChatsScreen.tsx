import Chats from "@/shared/ui/chats/Chats"
import { ScrollView, StyleSheet} from "react-native"

const ChatsScreen = () =>{
    const Data =[

    ]
    return(
        <ScrollView style={Style.chat}>
            {/* <FlatList> */}

            <Chats/>
            {/* </FlatList> */}
        </ScrollView>
    )
}
const Style = StyleSheet.create(
    {
        chat:{
            
            backgroundColor:"66ffcc",
            padding: 10,
        }
    }
)
export default ChatsScreen