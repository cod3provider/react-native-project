import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  Platform,
  Keyboard,
  KeyboardAvoidingView, TouchableWithoutFeedback, SafeAreaView
} from "react-native";
// import {REGISTER_SCREEN_STYLES} from './styles';
// import LoginForm from "@/components/LoginForm/LoginForm";
// import {LOGIN_FORM_STYLES} from "@/components/LoginForm/styles";
import {LOGIN_SCREEN_STYLES} from "@/screens/LoginScreen/styles";

export default function LoginScreen() {
  const openLink = () => {
    Linking.openURL('#');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
          <View style={LOGIN_SCREEN_STYLES.container}>
            <Image
              source={require('@/assets/images/Photo_BG.png')}
              resizeMode="cover"
              style={LOGIN_SCREEN_STYLES.backgroundImage}
            />
            {/*<LoginForm/>*/}

            <View style={LOGIN_SCREEN_STYLES.loginFormContainer}>
              <Text style={LOGIN_SCREEN_STYLES.text}>Увійти</Text>

              <View style={LOGIN_SCREEN_STYLES.inputContainer}>
                <TextInput
                  style={LOGIN_SCREEN_STYLES.input}
                  placeholderTextColor='#BDBDBD'
                  selectionColor='#212121'
                  placeholder="Адреса електронної пошти"
                />
                <TextInput
                  style={LOGIN_SCREEN_STYLES.input}
                  placeholderTextColor='#BDBDBD'
                  selectionColor='#212121'
                  placeholder="Пароль"
                />
              </View>

              <View style={LOGIN_SCREEN_STYLES.buttonsContainer}>
                <TouchableOpacity style={LOGIN_SCREEN_STYLES.registerBtn}>
                  <Text style={LOGIN_SCREEN_STYLES.registerBtnText}>
                    Увійти
                  </Text>
                </TouchableOpacity>

                <View style={LOGIN_SCREEN_STYLES.textContainer}>
                  <Text style={LOGIN_SCREEN_STYLES.textLink}>Немає акаунту?</Text>

                  <TouchableOpacity onPress={openLink}>
                    <Text style={LOGIN_SCREEN_STYLES.textLink}>Зареєструватися</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}