import { StyleSheet, Text, View } from "react-native"

const Chats =() =>{
    return(
        <View style={Style.contact}>
            <Text>id</Text>
        </View>
    )
}


const Style = StyleSheet.create(
    {
        contact:{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            width: "100%",
            height:40,
            backgroundColor: "#66ccff",
            fontSize: 15,
            marginTop: 10,
          
           
        }
    }
)
export default Chats