import React, {FC, useState} from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";

import {REGISTER_SCREEN_STYLES} from './styles';

import AddButton from "@/assets/icons/AddButton";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {StackParamsList} from "@/navigation/StackNavigator";

type HomeScreenProps = NativeStackScreenProps<StackParamsList, 'Register'>;

const RegistrationScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
  const [login, setLogin] = useState('');
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const onRegister = () => {
    console.log(`login: ${login}, mail: ${mail}, password: ${password}`);
    navigation.navigate('Home');
  }

  const handleNameChange = (value: string) => {
    setLogin(value);
  }

  const handleEmailChange = (value: string) => {
    setEmail(value);
  }

  const handlePassChange = (value: string) => {
    setPassword(value);
  }

  const openLink = () => {
    navigation.navigate('Login');
  }

  const showPassword = () => {
    setIsPasswordVisible(prev => !prev);
  }

  const showPassButton = (
    <TouchableOpacity
      onPress={showPassword}
      style={REGISTER_SCREEN_STYLES.buttonShow}
    >
      <Text style={REGISTER_SCREEN_STYLES.buttonShowText}>
        {(isPasswordVisible ? 'Показати' : 'Сховати')}
      </Text>
    </TouchableOpacity>
  )


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
          <View style={REGISTER_SCREEN_STYLES.container}>
            <Image
              source={require('@/assets/images/Photo_BG.png')}
              resizeMode="cover"
              style={REGISTER_SCREEN_STYLES.backgroundImage}
            />

            <View style={REGISTER_SCREEN_STYLES.registerFormContainer}>
              <View style={REGISTER_SCREEN_STYLES.userImagePlaceholder}/>

              <TouchableOpacity style={REGISTER_SCREEN_STYLES.plusButton}>
                <AddButton/>
              </TouchableOpacity>

              <Text style={REGISTER_SCREEN_STYLES.text}>Реєстрація</Text>


              <View style={REGISTER_SCREEN_STYLES.inputContainer}>
                <Input
                  selectionColor='#212121'
                  placeholder="Логін"
                  value={login}
                  onTextChange={handleNameChange}
                />
                <Input
                  placeholder="Адреса електронної пошти"
                  selectionColor='#212121'
                  value={mail}
                  onTextChange={handleEmailChange}
                />
                <Input
                  selectionColor='#212121'
                  placeholder="Пароль"
                  value={password}
                  onTextChange={handlePassChange}
                  secureTextEntry={isPasswordVisible}
                  additionalComponent={showPassButton}
                />
              </View>

              <View style={REGISTER_SCREEN_STYLES.buttonsContainer}>
                <Button onPress={onRegister} style={REGISTER_SCREEN_STYLES.registerBtn}>
                  <Text style={REGISTER_SCREEN_STYLES.registerBtnText}>
                    Зареєстуватися
                  </Text>
                </Button>

                <View style={REGISTER_SCREEN_STYLES.textContainer}>
                  <Text style={REGISTER_SCREEN_STYLES.textLink}>Вже є акаунт?</Text>

                  <TouchableOpacity onPress={openLink}>
                    <Text style={REGISTER_SCREEN_STYLES.textLink}>Увійти</Text>
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

export default RegistrationScreen;