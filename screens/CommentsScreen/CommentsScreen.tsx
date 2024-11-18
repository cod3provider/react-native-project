import {Image, Text, View} from "react-native";
import styles from "@/screens/PostsScreen/styles";
import React from "react";
import {useRoute} from "@react-navigation/core";

const CommentsScreen = () => {
  const route = useRoute();
  const {post} = route.params;

  return (
    <View>
      <Image source={require('@/assets/images/Rectangle 23.png')}
             resizeMode="cover" style={styles.postImage}/>
      <Text>
        Really love your most recent photo.
        I’ve been trying to capture the same thing for a few months and would love
        some tips!
      </Text>
      <Text>
        09 червня, 2020 | 08:40
      </Text>
      {/*<View>*/}
      {/*  {post?.photoPicture && (*/}
      {/*    <Image*/}
      {/*      source={{uri: post.photoPicture}}*/}
      {/*      resizeMode="cover"*/}
      {/*      style={styles.postImage}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*  <Text>*/}
      {/*    Really love your most recent photo.*/}
      {/*    I’ve been trying to capture the same thing for a few months and would love*/}
      {/*    some tips!*/}
      {/*  </Text>*/}
      {/*  <Text>*/}
      {/*    09 червня, 2020 | 08:40*/}
      {/*  </Text>*/}
      {/*</View>*/}
    </View>
  )
}

export default CommentsScreen;