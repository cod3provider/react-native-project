import {Image, Text, View} from "react-native";
import styles from "@/screens/PostsScreen/styles";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('@/assets/images/Rectangle 22.png')} />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Natali Romanova</Text>
          <Text style={styles.subtitle}>email@example.com</Text>
        </View>
      </View>
    </View>
  )
}

export default PostsScreen;