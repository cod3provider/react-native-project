import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "@/screens/LoginScreen/LoginScreen";
import RegistrationScreen from "@/screens/RegistrationScreen/RegistrationScreen";
import BottomTabNavigator from "@/navigation/BottomTabNavigator";
import CommentsScreen from "@/screens/CommentsScreen/CommentsScreen";

const Stack = createStackNavigator();

export type StackParamsList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Register"
        component={RegistrationScreen}
      />

      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
      />

      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  )
};

export default StackNavigator;