import React, {FC, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";

import {LOGIN_SCREEN_STYLES} from "@/screens/LoginScreen/styles";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {StackParamsList} from "@/navigation/StackNavigator";
import {loginDB} from "@/utils/auth";
import {useDispatch} from "react-redux";

type HomeScreenProps = NativeStackScreenProps<StackParamsList, 'Login'>;

const LoginScreen: FC<HomeScreenProps> =({ navigation, route }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  // useEffect(() => {
  //   console.log(route)
  //   console.log('route?.params?: ', route);
  // }, [])

  const openLink = () => {
    navigation.navigate('Register');
  }

  const onEmailChange = (value: string) => {
    setEmail(value);
  }

  const onPasswordChange = (value: string) => {
    setPassword(value);
  }

  const showPassword = () => {
    setIsPasswordVisible(prev => !prev);
  }

  const showPassButton = (
    <TouchableOpacity
      onPress={showPassword}
      style={LOGIN_SCREEN_STYLES.buttonShow}
    >
      <Text style={LOGIN_SCREEN_STYLES.buttonShowText}>
        {(isPasswordVisible ? 'Показати' : 'Сховати')}
      </Text>
    </TouchableOpacity>
  )

  const onLogin = async () => {
    console.log(`email: ${email}, password: ${password}`);
    try {
      await loginDB({email, password}, dispatch);
    } catch (err) {
      console.log('Login error:', err)
    }
    // navigation.navigate('Home');
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

            <View style={LOGIN_SCREEN_STYLES.loginFormContainer}>
              <Text style={LOGIN_SCREEN_STYLES.text}>Увійти</Text>

              <View style={LOGIN_SCREEN_STYLES.inputContainer}>
                <Input
                  value={email}
                  onTextChange={onEmailChange}
                  selectionColor='#212121'
                  placeholder="Адреса електронної пошти"
                />
                <Input
                  value={password}
                  onTextChange={onPasswordChange}
                  selectionColor='#212121'
                  placeholder="Пароль"
                  secureTextEntry={isPasswordVisible}
                  additionalComponent={showPassButton}
                />
              </View>

              <View style={LOGIN_SCREEN_STYLES.buttonsContainer}>
                <Button onPress={onLogin} style={LOGIN_SCREEN_STYLES.registerBtn}>
                  <Text style={LOGIN_SCREEN_STYLES.registerBtnText}>
                    Увійти
                  </Text>
                </Button>

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

export default LoginScreen;