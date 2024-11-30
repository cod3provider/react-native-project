import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from '@/config';
import {Post, UserData} from '@/types';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const addUser = async (userId: string, userData: UserData) => {
  try {
    await setDoc(doc(db, 'users', userId), userData, { merge: true });
    console.log('User added:', userId);
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

// export const addPost = async (userId: string, post: any) => {
//   try {
//     await setDoc(doc(db, 'posts', userId), { userId, posts: [post]}, { merge: true });
//     console.log('Post added:', userId);
//   } catch (error) {
//     console.error('Error adding post:', error);
//   }
// };

export const addCommentToPostInFirestore = async (
  postId: string,
  comment: { text: string; date: string }
) => {
  try {
    const postRef = doc(db, 'posts', postId); // Ссылка на пост в Firestore
    const docSnap = await getDoc(postRef); // Получаем текущие данные поста

    if (docSnap.exists()) {
      const postData = docSnap.data() as Post;
      const updatedComments = postData.comments ? [...postData.comments, comment] : [comment];

      // Обновляем пост с новым комментарием
      await updateDoc(postRef, { comments: updatedComments });

      console.log('Comment added successfully');
    } else {
      console.log('No such post found!');
    }
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};

export const addPost = async (userId: string, post: Post) => {
  try {
    const userPostsRef = doc(db, 'posts', userId);
    const docSnap = await getDoc(userPostsRef);

    if (docSnap.exists()) {
      const existingPosts = docSnap.data().posts || [];
      await setDoc(userPostsRef, { posts: [...existingPosts, post] }, { merge: true });
    } else {
      await setDoc(userPostsRef, { posts: [post] });
    }

    console.log('Post added:', post);
  } catch (error) {
    console.error('Error adding post:', error);
  }
};

export const getUser = async (userId: string) => {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('User data:', docSnap.data());
    return docSnap.data();
  } else {
    console.log('No such document!');
    return null;
  }
};

export const updateUserInFirestore = async (uid: string, data: any) => {
  try {
    await setDoc(doc(db, 'users', uid), data, { merge: true }); // merge: true - для оновлення існуючого документа або створення нового
    console.log('User data updated to Firestore:', uid);
  } catch (error) {
    console.error('Error saving user data to Firestore:', error);
  }
};

export const uploadImage = async (
  userId: string,
  file: Blob,
  fileName: string,
) => {
  try {
    const imageRef = ref(storage, `profilePhotos/${userId}/${fileName}`);

    console.log('Uploading to:', imageRef.fullPath);
    const result = await uploadBytes(imageRef, file);
    console.log('Upload result:', result);
    return imageRef;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const getImageUrl = async (imageRef: any) => {
  const url = await getDownloadURL(imageRef);
  console.log(url);
  return url;
};
