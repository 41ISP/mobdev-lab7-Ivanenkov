import { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
interface IButtonProps extends PropsWithChildren {
  onClick?:()=> void,
  
}

const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <TouchableOpacity style={Style.btn} onPress={onClick}>{children}</TouchableOpacity>
  )
}

const Style = StyleSheet.create(
    {
        btn: {
            width: 150,
            height: 50,
            borderRadius: 1,
            borderWidth: 1,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center'
        },
    }
)

export default Button