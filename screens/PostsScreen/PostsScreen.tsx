import React, {useState} from "react";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "@/screens/PostsScreen/styles";
import CommentIcon from "@/assets/icons/CommentIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import {useNavigation} from '@react-navigation/native';
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store/store";

type Post = {
  name: string;
  location: string;
  photoPicture: string;
};

type PostsScreenProps = {
  posts: Post[];
};

const PostsScreen: React.FC<PostsScreenProps> = ({posts}) => {
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  console.log('posts', posts)
  console.log(userInfo);
  const [userName, setUserName] = useState<string>(userInfo?.displayName || '');
  const navigation = useNavigation();

  const openLink = (post) => {
    navigation.navigate('Comments', {post});
  }

  const openMap = () => {
    navigation.navigate('Maps');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('@/assets/images/Rectangle 22.png')}/>
        <View>
          <Text style={styles.title}>{userInfo?.displayName}</Text>
          <Text style={styles.subtitle}>{userInfo?.displayName}</Text>
        </View>
      </View>
      {posts?.length > 0 && (
        posts.map((post, index) => (
          <View style={styles.post} key={index}>
            <Image source={{uri: post.photoPicture}} style={styles.postImage}/>

            <Text style={styles.nameText}>{post.name}</Text>

            <View style={styles.text}>
              <TouchableOpacity
                onPress={openLink}
                style={styles.commentWrap}
              >
                <CommentIcon/>
              </TouchableOpacity>
              <Text style={styles.commentsText}>0</Text>

              <View style={styles.locationWrap}>
                <TouchableOpacity
                  onPress={openMap}
                >
                  <LocationIcon/>
                  <Text style={styles.locationText}>{post.location}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))
      )}

      <View style={styles.post}>
        <Image source={require('@/assets/images/Rectangle 23.png')}
               resizeMode="cover" style={styles.postImage}/>
        <Text style={styles.nameText}>Захід на Чорному морі</Text>

        <View style={styles.text}>
          <TouchableOpacity
            onPress={openLink}
            style={styles.commentWrap}
          >
            <CommentIcon/>
            <Text style={styles.commentsText}>0</Text>
          </TouchableOpacity>

          <View style={styles.locationWrap}>
            <TouchableOpacity
              onPress={openMap}
            >
              <LocationIcon/>
            </TouchableOpacity>
            <Text style={styles.locationText}>Ukraine</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default PostsScreen;