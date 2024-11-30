import {useEffect} from "react";
import {useFonts} from "expo-font";
import {Text} from "react-native";
import {Provider, useDispatch} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import 'react-native-gesture-handler';
import {PersistGate} from "redux-persist/integration/react";

import store from "@/redux/store/store";
import {authStateChanged} from "@/utils/auth";
import StackNavigator from "@/navigation/StackNavigator";

export default function HomeScreen() {
  const [useLoaded] = useFonts({
    'Roboto': require('@/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('@/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('@/assets/fonts/Roboto-Bold.ttf'),
  })

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        {/*<NavigationContainer>*/}
        {/*  <StackNavigator/>*/}
        {/*</NavigationContainer>*/}
        <AuthListener />
      </PersistGate>
    </Provider>
  );
}

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authStateChanged(dispatch);
  }, [dispatch]);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};