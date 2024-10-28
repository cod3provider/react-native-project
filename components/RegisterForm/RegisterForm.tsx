// import React, {useState} from "react";
// import {
//   Keyboard,
//   KeyboardAvoidingView,
//   Linking, Platform,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View
// } from "react-native";
//
// import {REGISTER_FORM_STYLES} from './styles';
// import {REGISTER_SCREEN_STYLES} from "@/screens/RegistrationScreen/styles";
// import AddButton from "@/assets/icons/AddButton";
//
// export default function RegisterForm() {
//   const [name, setName] = useState('');
//   const [mail, setMail] = useState('');
//   const [password, setPassword] = useState('');
//
//   const openLink = () => {
//     Linking.openURL('#');
//   }
//
//   return (
//     // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={REGISTER_FORM_STYLES.container}>
//         <View style={REGISTER_FORM_STYLES.userImagePlaceholder}/>
//
//         <TouchableOpacity style={REGISTER_SCREEN_STYLES.plusButton}>
//           <AddButton/>
//         </TouchableOpacity>
//
//         <Text style={REGISTER_FORM_STYLES.text}>Реєстрація</Text>
//
//         <View style={REGISTER_FORM_STYLES.inputContainer}>
//           <KeyboardAvoidingView
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//           >
//             <TextInput
//               style={REGISTER_FORM_STYLES.input}
//               placeholderTextColor='#BDBDBD'
//               selectionColor='#212121'
//               placeholder="Логін"
//               value={name}
//               onChangeText={setName}
//             />
//             <TextInput
//               style={REGISTER_FORM_STYLES.input}
//               placeholderTextColor='#BDBDBD'
//               selectionColor='#212121'
//               placeholder="Адреса електронної пошти"
//               onChangeText={setMail}
//             />
//             <TextInput
//               style={REGISTER_FORM_STYLES.input}
//               placeholderTextColor='#BDBDBD'
//               selectionColor='#212121'
//               placeholder="Пароль"
//               onChangeText={setPassword}
//               secureTextEntry
//             />
//           </KeyboardAvoidingView>
//         </View>
//
//         <View style={REGISTER_FORM_STYLES.buttonsContainer}>
//           <TouchableOpacity style={REGISTER_FORM_STYLES.registerBtn}>
//             <Text style={REGISTER_FORM_STYLES.registerBtnText}>
//               Зареєстуватися
//             </Text>
//           </TouchableOpacity>
//
//           <View style={REGISTER_FORM_STYLES.textContainer}>
//             <Text style={REGISTER_FORM_STYLES.textLink}>Вже є акаунт?</Text>
//
//             <TouchableOpacity onPress={openLink}>
//               <Text style={REGISTER_FORM_STYLES.textLink}>Увійти</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     // </TouchableWithoutFeedback>
//   )
// }