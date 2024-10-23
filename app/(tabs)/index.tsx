import {useFonts} from "expo-font";

import RegistrationScreen from "@/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "@/screens/LoginScreen/LoginScreen";

export default function HomeScreen() {
  const [useLoaded] = useFonts({
    'Roboto': require('@/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('@/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('@/assets/fonts/Roboto-Bold.ttf'),
  })
  return (
    <RegistrationScreen/>
    // <LoginScreen />
  );
}

// const styles = StyleSheet.create({
// titleContainer: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   gap: 8,
// },
// stepContainer: {
//   gap: 8,
//   marginBottom: 8,
// },
// reactLogo: {
//   height: 178,
//   width: 290,
//   bottom: 0,
//   left: 0,
//   position: 'absolute',
// },
// });
