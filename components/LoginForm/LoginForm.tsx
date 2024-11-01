// import React from "react";
// import {Linking, Text, TextInput, TouchableOpacity, View} from "react-native";
//
// import {LOGIN_FORM_STYLES} from './styles';
//
// export default function LoginForm() {
//   const openLink = () => {
//     Linking.openURL('#');
//   }
//
//   return (
//     <View style={LOGIN_FORM_STYLES.container}>
//       <Text style={LOGIN_FORM_STYLES.text}>Увійти</Text>
//
//       <View style={LOGIN_FORM_STYLES.inputContainer}>
//         <TextInput
//           style={LOGIN_FORM_STYLES.input}
//           placeholderTextColor='#BDBDBD'
//           selectionColor='#212121'
//           placeholder="Адреса електронної пошти"
//         />
//         <TextInput
//           style={LOGIN_FORM_STYLES.input}
//           placeholderTextColor='#BDBDBD'
//           selectionColor='#212121'
//           placeholder="Пароль"
//         />
//       </View>
//
//       <View style={LOGIN_FORM_STYLES.buttonsContainer}>
//         <TouchableOpacity style={LOGIN_FORM_STYLES.registerBtn}>
//           <Text style={LOGIN_FORM_STYLES.registerBtnText}>
//             Увійти
//           </Text>
//         </TouchableOpacity>
//
//         <View style={LOGIN_FORM_STYLES.textContainer}>
//           <Text style={LOGIN_FORM_STYLES.textLink}>Немає акаунту?</Text>
//
//           <TouchableOpacity onPress={openLink}>
//             <Text style={LOGIN_FORM_STYLES.textLink}>Зареєструватися</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   )
// }