import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView, Platform, TextInput, Linking, ScrollView
} from "react-native";
import {REGISTER_SCREEN_STYLES} from './styles';
// import RegisterForm from "@/components/RegisterForm/RegisterForm";
import {REGISTER_FORM_STYLES} from "@/components/RegisterForm/styles";
import AddButton from "@/assets/icons/AddButton";

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const openLink = () => {
    Linking.openURL('#');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={REGISTER_SCREEN_STYLES.container}>
        <Image
          source={require('@/assets/images/Photo_BG.png')}
          resizeMode="cover"
          style={REGISTER_SCREEN_STYLES.backgroundImage}
        />
        {/*<RegisterForm/>*/}
        <View style={REGISTER_FORM_STYLES.container}>
          <View style={REGISTER_FORM_STYLES.userImagePlaceholder}/>

          <TouchableOpacity style={REGISTER_SCREEN_STYLES.plusButton}>
            <AddButton/>
          </TouchableOpacity>

          <Text style={REGISTER_FORM_STYLES.text}>Реєстрація</Text>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >

            <View style={REGISTER_FORM_STYLES.inputContainer}>
              <TextInput
                style={REGISTER_FORM_STYLES.input}
                placeholderTextColor='#BDBDBD'
                selectionColor='#212121'
                placeholder="Логін"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={REGISTER_FORM_STYLES.input}
                placeholderTextColor='#BDBDBD'
                selectionColor='#212121'
                placeholder="Адреса електронної пошти"
                value={mail}
                onChangeText={setMail}
              />
              <TextInput
                style={REGISTER_FORM_STYLES.input}
                placeholderTextColor='#BDBDBD'
                selectionColor='#212121'
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </KeyboardAvoidingView>

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
      </View>
     </TouchableWithoutFeedback>
  )
}