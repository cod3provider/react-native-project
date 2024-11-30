import { FC } from "react"
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native"

// import { colors } from "../../styles/global";

type ButtonProps = {
  children: React.ReactNode,
  buttonStyle?: ViewStyle
  onPress: () => void;
}

const ButtonTouchable: FC<ButtonProps> = ({ children, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity
      style={[style.button, buttonStyle]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ButtonTouchable;

const style = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: 'orange',
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
})