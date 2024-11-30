import {Button, FlatList, Image, Text, TextInput, StyleSheet, View} from "react-native";
// import styles from "@/screens/PostsScreen/styles";
import React, {useState} from "react";
import {useRoute} from "@react-navigation/core";
import {useDispatch, useSelector} from "react-redux";
import {addCommentToPost} from "@/redux/reducers/postsSlice";
import {RootState} from "@/redux/store/store";


const CommentsScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  // const { postId } = route.params as { postId: string };
  // const post = useSelector((state: RootState) => state.posts.posts[postId]);
  const { postId } = route.params as { postId: string };
  const post = useSelector((state: RootState) => state.posts.posts.find((p) => p.id === postId));

  const [comments, setComments] = useState<{ text: string; date: string }[]>([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      const comment = { text: newComment, date: new Date().toLocaleString() };
      console.log('comment', comment);
      dispatch(addCommentToPost({ postId, comment })); // Отправляем действие в Redux
      setNewComment("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Изображение поста */}
      {post?.photoPicture && (
        <Image
          source={{ uri: post.photoPicture }}
          resizeMode="cover"
          style={styles.postImage}
        />
      )}

      {/* Список комментариев */}
      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Text style={styles.commentText}>{item.text}</Text>
            <Text style={styles.commentDate}>{item.date}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noComments}>No comments yet.</Text>}
      />

      {/* Поле для ввода нового комментария */}
      <View style={styles.inputContainer}>
        <TextInput
          value={newComment}
          onChangeText={setNewComment}
          placeholder="Add a comment..."
          style={styles.input}
        />
        <Button title="Send" onPress={addComment} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  postImage: { width: "100%", height: 200, marginBottom: 16 },
  comment: { marginBottom: 10 },
  commentText: { fontSize: 16, marginBottom: 4 },
  commentDate: { fontSize: 12, color: "gray" },
  noComments: { textAlign: "center", marginVertical: 20, color: "gray" },
  inputContainer: { flexDirection: "row", alignItems: "center", marginTop: 16 },
  input: { flex: 1, borderWidth: 1, borderColor: "gray", borderRadius: 4, padding: 8, marginRight: 8 },
});

export default CommentsScreen;