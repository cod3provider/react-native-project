import React from "react";
import {Image, Text, View} from "react-native";
import styles from "@/screens/PostsScreen/styles";

type Post = {
  name: string;
  location: string;
  photoPicture: string;
};

// type PostsScreenRouteProp = RouteProp<{ Posts: {posts: Post[] }}, 'Posts'>;
//
// type PostsScreenProps = {
//   route: PostsScreenRouteProp
// }

type PostsScreenProps = {
  posts: Post[];
};

const PostsScreen: React.FC<PostsScreenProps> = ({ posts }) => {
  // const {posts} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('@/assets/images/Rectangle 22.png')} />
        <View>
          <Text style={styles.title}>Natali Romanova</Text>
          <Text style={styles.subtitle}>email@example.com</Text>
        </View>
      </View>
        {posts?.length > 0 ? (
          posts.map((post, index) => (
            <View style={styles.post} key={index}>
              <Image source={{uri: post.photoPicture}} style={styles.postImage} />
              <Text>{post.name}</Text>
              <View style={styles.text}>
                <View>

                  0
                </View>
                <Text>{post.location}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text> No posts</Text>
        )}
    </View>
  )
}

export default PostsScreen;