import React from 'react';
import {View, ImageBackground} from "react-native";
import {REGISTER_SCREEN_STYLES} from './styles';
import RegisterForm from "@/components/RegisterForm/RegisterForm";

export default function RegistrationScreen() {
  return (
    <View style={REGISTER_SCREEN_STYLES.container}>
      <ImageBackground
        source={require('@/assets/images/Photo_BG.png')}
        resizeMode="cover"
        style={REGISTER_SCREEN_STYLES.backgroundImage}
      />
      <RegisterForm/>
    </View>
  )
}