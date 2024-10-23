import React from 'react';
import {View, Image} from "react-native";
import {REGISTER_SCREEN_STYLES} from './styles';
import LoginForm from "@/components/LoginForm/LoginForm";

export default function LoginScreen() {
  return (
    <View style={REGISTER_SCREEN_STYLES.container}>
      <Image
        source={require('@/assets/images/Photo_BG.png')}
        resizeMode="cover"
        style={REGISTER_SCREEN_STYLES.backgroundImage}
      />
      <LoginForm/>
    </View>
  )
}