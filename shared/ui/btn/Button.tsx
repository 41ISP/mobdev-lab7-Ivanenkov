import { PropsWithChildren } from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
interface IButtonProps extends PropsWithChildren {
  onClick?:()=> void,
  
}

const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <TouchableOpacity style={Style.btn} onPress={onClick}><Text>{children}</Text></TouchableOpacity>
  )
}

const Style = StyleSheet.create(
    {
        btn: {
            width: 130,
            height: 50,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: "#66ccff",
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center'
        },
    }
)

export default Button