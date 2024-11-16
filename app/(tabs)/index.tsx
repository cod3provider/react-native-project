import 'react-native-gesture-handler';
import {useFonts} from "expo-font";

import StackNavigator from "@/navigation/StackNavigator";
import {NavigationContainer} from "@react-navigation/native";

export default function HomeScreen() {
  const [useLoaded] = useFonts({
    'Roboto': require('@/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('@/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('@/assets/fonts/Roboto-Bold.ttf'),
  })

  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
