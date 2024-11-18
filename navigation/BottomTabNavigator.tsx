import {BottomTabScreenProps, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

import LogoutButton from "@/components/LogoutButton";
import PostsScreen from "@/screens/PostsScreen/PostsScreen";
import CreatePostsScreen from "@/screens/CreatePostsScreen/CreatePostsScreen";

import MapScreen from "@/screens/MapScreen/MapScreen";
import {useState} from "react";
import {ParamListBase} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

type Post = {
  name: string;
  location: string;
  photoPicture: string;
}

type CreatePostsScreenProps = BottomTabScreenProps<ParamListBase, 'Create Posts'>;


const BottomTabNavigator = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

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
        // component={PostsScreen}
        initialParams={{posts}}
        options={{
          headerRight: () => <LogoutButton onPress={() => console.log('Pressed')} />,
          // title: '',
          tabBarIcon: ({focused}) => <Ionicons name="grid-outline" size={24} color={focused ? '#FF6C00' : 'black'} />,
        }}
      >
      {(props) => <PostsScreen {...props} posts={posts} />}
      </Tab.Screen>

      <Tab.Screen
        name="Create Posts"
        // component={CreatePostsScreen}
        // component={(props) => <CreatePostsScreen {...props} onAddpost={handleAddPost()} />}
        // component={(props: CreatePostsScreenProps) => (
        //   <CreatePostsScreen {...props} onAddpost={handleAddPost} />
        // )}
        options={{
          tabBarIcon: ({focused}) => <Ionicons name="add-outline" size={24} color={focused ? '#FF6C00' : 'black'} />,
          headerRight: () => <LogoutButton onPress={() => console.log('Pressed')} />,
        }}
      >
        {/*{(props: CreatePostsScreenProps) => (*/}
        {/*  <CreatePostsScreen {...props} onAddpost={handleAddPost} />*/}
        {/*)}*/}
        {(props) => <CreatePostsScreen {...props} onAddpost={handleAddPost} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) => <Ionicons name="person-outline" size={24} color={focused ? '#FF6C00' : 'black'} />,
          headerRight: () => <LogoutButton onPress={() => console.log('Pressed')} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;