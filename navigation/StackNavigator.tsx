import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "@/screens/LoginScreen/LoginScreen";
import RegistrationScreen from "@/screens/RegistrationScreen/RegistrationScreen";
import BottomTabNavigator from "@/navigation/BottomTabNavigator";
import CommentsScreen from "@/screens/CommentsScreen/CommentsScreen";
import MapScreen from "@/screens/MapScreen/MapScreen";
import PostsScreen from "@/screens/PostsScreen/PostsScreen";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store/store";

const Stack = createStackNavigator();

export type StackParamsList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Comments: undefined;
  Maps: undefined;
  Posts: undefined;
};

const StackNavigator = () => {
  const user = useSelector((state: RootState) => state.user.userInfo);

  console.log("User state in StackNavigator:", user);
  return (
    <Stack.Navigator initialRouteName="Login">
      {user ? (
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown:false}}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />

          <Stack.Screen
            name="Register"
            component={RegistrationScreen}
          />
        </>
      )}
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
      />

      <Stack.Screen
        name="Maps"
        component={MapScreen}
      />

      <Stack.Screen
        name="Posts"
        component={PostsScreen}
      />
    </Stack.Navigator>
  )
};

export default StackNavigator;