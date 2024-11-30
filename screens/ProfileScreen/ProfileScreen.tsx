import {useState} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import Ionicons from '@expo/vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker';

import {RootState} from "@/redux/store/store";

import {getImageUrl, updateUserInFirestore, uploadImage} from "@/utils/firestore";
import {setUserInfo} from "@/redux/reducers/userSlice";
import styles from "@/screens/ProfileScreen/styles";
import Input from "@/components/InputNameChange/InputNameChange";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const [userName, setUserName] = useState<string>(userInfo?.displayName || '')

  // Завантаження зображення та отримання URL
  const handleImageUpload = async (
    userId: string,
    file: File | Blob,
    fileName: string,
  ) => {
    try {
      console.log('FILE', file)
      const imageRef = await uploadImage(userId, file, fileName);

      const imageUrl = await getImageUrl(imageRef);

      console.log('Image URL:', imageUrl);
      return imageUrl;
    } catch (error) {
      console.error('Error uploading image and getting URL:', error);
    }
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled && userInfo) {
      const uri = result.assets[0].uri;

      const response = await fetch(uri);
      const file = await response.blob();

      const fileName = uri.split('/').pop() || "123"; // Отримуємо ім'я файлу з URI
      const fileType = file.type; // Отримуємо тип файлу

      console.log('FILE NAME', fileName)

      const imageFile = new File([file], fileName, {type: fileType});

      const imageUrl = await handleImageUpload(userInfo.uid, imageFile, fileName);

      await updateUserInFirestore(userInfo.uid, {profilePhoto: imageUrl})

      dispatch(setUserInfo({
        ...userInfo,
        profilePhoto: imageUrl,
      }));
    }
  };

  const onUserNameChange = async () => {
    if (!userInfo) return;

    try {
      await updateUserInFirestore(userInfo?.uid, {
        displayName: userName,
      });

      dispatch(setUserInfo({...userInfo, displayName: userName}))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.section}>
      {userInfo?.profilePhoto ? (
        <View style={styles.profilePhotoContainer}>
          <Image source={{uri: userInfo?.profilePhoto}} style={styles.image}/>
          <TouchableOpacity style={styles.cameraButton} onPress={pickImage}>
            <Ionicons size={32} name="add-circle" color='#c5c0b9'/>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.profilePhotoContainer}>
          <Ionicons name="person-circle-outline" size={100}/>
          <TouchableOpacity style={styles.cameraButton} onPress={pickImage}>
            <Ionicons size={32} name="add-circle" color='#c5c0b9' />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Name:</Text>
        <Text>{userInfo?.displayName || 'Anonimus'}</Text>
      </View>

      <Input
        value={userName}
        onBlur={onUserNameChange}
        outerStyles={{ width: "60%" }}
        onTextChange={setUserName}
      />
    </View>
  );
};

export default ProfileScreen;
