import { useUserStore } from "@/entity/user/model/Store"
import Contact from "@/shared/ui/contact/Contact"
import { router } from "expo-router"
import { ScrollView, StyleSheet, TouchableOpacity, } from "react-native"

const ContactScreen = () => {
    const {user, setUser} = useUserStore()
    const handleclick=()=>{
         
            setUser({ id: "" })
            router.replace('/login')
    }
    return (
        <ScrollView style={Style.contact}>
            <Contact />
            <TouchableOpacity style={Style.btn} onPress={handleclick}/>
        </ScrollView>
    )
}
const Style = StyleSheet.create(
    {
        contact:{
           
            backgroundColor:"#66ffff",
            padding:10,
        },
        btn:{
            width:150,
            height:100,
            borderRadius: 1,
            borderWidth: 1,
            backgroundColor: 'red',
        }
    }
)
export default ContactScreen