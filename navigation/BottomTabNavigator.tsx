import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

import LogoutButton from "@/components/LogoutButton";
import PostsScreen from "@/screens/PostsScreen/PostsScreen";
import CreatePostsScreen from "@/screens/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "@/screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerLeftContainerStyle: {
          paddingLeft: 16
        },
        headerRightContainerStyle: {
          paddingRight: 16
        },
        // headerShown: false,

        tabBarLabel: "",
        tabBarStyle: {
          paddingBottom: 0,
          paddingTop: 0,
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: '#fff'
        },
        tabBarItemStyle: {
          padding: 0,
        },
        tabBarLabelStyle: {
          margin: 0,
        },
        // tabBarLabelStyle: {
        //   paddingTop: 0,
        //   margin: 0,
        // }
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => <LogoutButton onPress={() => console.log('Pressed')} />,
          // title: '',
          tabBarIcon: ({focused}) => <Ionicons name="grid-outline" size={24} color={focused ? '#FF6C00' : 'black'} />,
        }}
      />
      <Tab.Screen
        name="Create Posts"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({focused}) => <Ionicons name="add-outline" size={24} color={focused ? '#FF6C00' : 'black'} />,
          headerRight: () => <LogoutButton onPress={() => console.log('Pressed')} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => <Ionicons name="person-outline" size={24} color={focused ? '#FF6C00' : 'black'} />,
          headerRight: () => <LogoutButton onPress={() => console.log('Pressed')} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;