import React, {FC} from "react";
import {TextInput, View, ViewStyle} from "react-native";
import {styles} from "@/components/Input/styles";

type InputProps = {
  placeholder: string,
  selectionColor: string,
  value: string,
  onTextChange: (text: string) => void,
  secureTextEntry?: boolean,
  additionalComponent?: React.ReactNode,
  style?: ViewStyle,
}

const Input: FC<InputProps> = ({
                                 placeholder,
                                 selectionColor,
                                 value,
                                 onTextChange,
                                 secureTextEntry = false,
                                 additionalComponent,
                                 style,
                               }) => {
  return (
    <View
      style={[styles.input, style]}
    >
      <TextInput
        value={value}
        placeholder={placeholder}
        selectionColor={selectionColor}
        onChangeText={onTextChange}
        secureTextEntry={secureTextEntry}
      />
      {additionalComponent}
    </View>
  )
}

export default Input;