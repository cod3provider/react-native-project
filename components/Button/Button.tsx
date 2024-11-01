import {TouchableOpacity, ViewStyle} from "react-native";
import {FC, ReactNode} from "react";
import {styles} from "@/components/Button/styles";


type ButtonProps = {
  children: ReactNode,
  onPress: () => void,
  style?: ViewStyle,
}

const Button: FC<ButtonProps> = ({children, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Button;