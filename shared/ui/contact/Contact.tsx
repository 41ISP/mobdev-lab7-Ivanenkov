import { ScrollView, StyleSheet, View } from "react-native"
import { Text } from "react-native"
const Contact = () => {
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
            width: 384,
            height:40,
            marginLeft:4,
            backgroundColor: "#66ccff",
            fontSize: 15,
            marginTop: 10,
        }
    }
)
export default Contact