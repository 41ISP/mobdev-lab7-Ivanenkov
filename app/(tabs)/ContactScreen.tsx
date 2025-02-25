import Contact from "@/shared/ui/contact/Contact"
import { ScrollView, StyleSheet, } from "react-native"

const ContactScreen = () => {

    return (
        <ScrollView style={Style.contact}>
            <Contact />
        </ScrollView>
    )
}
const Style = StyleSheet.create(
    {
        contact:{
           
            backgroundColor:"#66ffff",
            padding:10,
        }
    }
)
export default ContactScreen