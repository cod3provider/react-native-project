import React from "react";
import {Button, ImageBackground, Linking, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";

import {REGISTER_FORM_STYLES} from './styles';

export default function RegisterForm() {
  const openLink = () => {
    Linking.openURL('#');
  }

  return (
    <View style={REGISTER_FORM_STYLES.container}>
      <Text style={REGISTER_FORM_STYLES.text}>Реєстрація</Text>
      <View style={REGISTER_FORM_STYLES.inputContainer}>
        <TextInput
          style={REGISTER_FORM_STYLES.input}
          placeholderTextColor = '#BDBDBD'
          selectionColor= '#212121'
          placeholder="Логін"
        />
        <TextInput
          style={REGISTER_FORM_STYLES.input}
          placeholderTextColor = '#BDBDBD'
          selectionColor= '#212121'
          placeholder="Адреса електронної пошти"
        />
        <TextInput
          style={REGISTER_FORM_STYLES.input}
          placeholderTextColor = '#BDBDBD'
          selectionColor= '#212121'
          placeholder="Пароль"
        />
      </View>

      <View style={REGISTER_FORM_STYLES.buttonsContainer}>
        <TouchableOpacity style={REGISTER_FORM_STYLES.registerBtn}>
          <Text style={REGISTER_FORM_STYLES.registerBtnText}>
            Зареєстуватися
          </Text>
        </TouchableOpacity>

        <View style={REGISTER_FORM_STYLES.textContainer}>
          <Text style={REGISTER_FORM_STYLES.textLink}>Вже є акаунт?</Text>
          <TouchableOpacity onPress={openLink}>
            <Text style={REGISTER_FORM_STYLES.textLink}>Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}