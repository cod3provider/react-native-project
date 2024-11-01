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
    // <RegistrationScreen/>
    <LoginScreen />
  );
}
