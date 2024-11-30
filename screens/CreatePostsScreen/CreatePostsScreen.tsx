// import React, {useState, useRef, useEffect} from "react";
// import {Text, View, TouchableOpacity, Image} from "react-native";
// import {CameraType, CameraView, useCameraPermissions} from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
// import * as Location from 'expo-location';
// import {useNavigation} from "@react-navigation/native";
//
// import Input from "@/components/Input/Input";
// import PhotoIcon from "@/assets/icons/PhotoIcon";
// import DeletePhotoIcon from "@/assets/icons/DeletePhotoIcon";
// import CrossIcon from "@/assets/icons/CrossIcon";
// import CameraRotateIcon from "@/assets/icons/CameraRotate";
// import Button from "@/components/Button/Button";
//
// import styles from "@/screens/CreatePostsScreen/styles";
//
// export default function CameraScreen({onAddpost}) {
//   const [name, setName] = useState('');
//   const [photoPicture, setPhotoPicture] = useState(null);
//   const [location, setLocation] = useState('');
//   const [openCamera, setOpenCamera] = useState(false);
//   const [facing, setFacing] = useState<CameraType>('back');
//   const [permission, requestPermission] = useCameraPermissions();
//   // const [permissionResponse, requestLibraryPermission] = MediaLibrary.usePermissions();
//   const camera = useRef();
//   const [cameraPermission, requestCameraPermission] = useCameraPermissions();
//   const [libraryPermission, requestLibraryPermission] = MediaLibrary.usePermissions();
//   const navigation = useNavigation();
//
//   useEffect(() => {
//     (async () => {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Permission to access location was denied');
//         return;
//       }
//
//       const userLocation = await Location.getCurrentPositionAsync({});
//       const userAddress = await getAddressFromCoords(
//         userLocation.coords.latitude,
//         userLocation.coords.longitude
//       );
//
//       setLocation(userAddress); // Установить адрес в поле "Місцевість"
//     })();
//   }, []);
//
//   const getAddressFromCoords = async (latitude: number, longitude: number) => {
//     try {
//       const [address] = await Location.reverseGeocodeAsync({ latitude, longitude });
//       if (address) {
//         return `${address.city || ''}, ${address.country || ''}`.trim();
//       }
//       return '';
//     } catch (error) {
//       console.log('Error fetching address:', error);
//       return '';
//     }
//   };
//
//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View/>;
//   }
//
//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission"/>
//       </View>
//     );
//   }
//
//   function toggleCameraFacing() {
//     setFacing(current => (current === 'back' ? 'front' : 'back'));
//   }
//
//   const takePhoto = async () => {
//     if (!camera) return;
//
//     const image = await camera?.current?.takePictureAsync();
//     // console.log('image', image.uri)
//
//     if (image.uri) {
//       await MediaLibrary.saveToLibraryAsync(image.uri);
//       setPhotoPicture(image.uri);
//       toggleOpeningCamera();
//       // console.log('SavedPhoto: ', image.uri);
//     }
//   }
//
//   const toggleOpeningCamera = () => {
//     setOpenCamera(!openCamera);
//     // console.log(openCamera);
//   }
//
//   const handleNameChange = (value: string) => {
//     setName(value);
//   }
//
//   const handleLocationChange = (value: string) => {
//     setLocation(value);
//   }
//
//   const onSubmitForm = () => {
//     if (name && location && photoPicture) {
//       onAddpost({name, location, photoPicture});
//
//       setName('');
//       setPhotoPicture(null);
//       setLocation('');
//       navigation.navigate('Posts');
//     } else {
//       console.log('Add data to all fields');
//     }
//   }
//
//   if (!cameraPermission || !libraryPermission) {
//     return <View />;
//   }
//
//   if (!cameraPermission.granted || !libraryPermission.granted) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>We need your permission to use the camera and library</Text>
//         <Button onPress={requestCameraPermission} title="Grant Camera Permission" />
//         <Button onPress={requestLibraryPermission} title="Grant Library Permission" />
//       </View>
//     );
//   }
//
//   return (
//
//     <View style={styles.container}>
//       {openCamera ?
//         (
//           <CameraView ref={camera} style={styles.camera} facing={facing}>
//             <View style={styles.takePhotoButtonContainer}>
//               <TouchableOpacity style={styles.takePhotoIcon} onPress={takePhoto}>
//                 <PhotoIcon/>
//               </TouchableOpacity>
//             </View>
//
//             <View style={styles.rotateCameraButtonContainer}>
//               <TouchableOpacity style={styles.RotateCameraIcon} onPress={toggleCameraFacing}>
//                 <CameraRotateIcon/>
//               </TouchableOpacity>
//             </View>
//
//             <TouchableOpacity style={styles.closeCameraButton} onPress={toggleOpeningCamera}>
//               <CrossIcon/>
//             </TouchableOpacity>
//           </CameraView>
//         ) : (
//           <View>
//             {photoPicture ? (
//               <View style={styles.photoWrap}>
//                 <Image source={{uri: photoPicture}} style={styles.imagePicture}/>
//                 <TouchableOpacity style={styles.takePhotoIcon} onPress={takePhoto}>
//                   <PhotoIcon/>
//                 </TouchableOpacity>
//               </View>
//             ) : (
//               <View style={styles.camera}>
//                 <TouchableOpacity style={styles.openCameraButton} onPress={toggleOpeningCamera}>
//                   <PhotoIcon/>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </View>
//         )
//       }
//
//       <View style={styles.inputWrapper}>
//         <Input
//           style={styles.input}
//           selectionColor='#212121'
//           placeholder="Назва"
//           value={name}
//           onTextChange={handleNameChange}
//         />
//         <Input
//           style={styles.input}
//           placeholder="Місцевість"
//           selectionColor='#212121'
//           value={location}
//           onTextChange={handleLocationChange}
//         />
//       </View>
//
//       <Button style={styles.buttonSubmit} onPress={onSubmitForm}>
//         <Text style={styles.buttonText}>Опублікувати</Text>
//       </Button>
//
//       <TouchableOpacity style={styles.deleteIcon}>
//         <DeletePhotoIcon/>
//       </TouchableOpacity>
//     </View>
//   );
// }



import { FC, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import "react-native-get-random-values";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as ImagePicker from 'expo-image-picker';

import { CreatePostStackParamList } from "@/navigation/CreatePostNavigator";

import { addPost } from "@/utils/firestore";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "@/redux/store/store";

import {colors} from "@/styles/styles";
import InputText from "@/components/TextInput";
import ButtonTouchable from "@/components/ButtonstTouchable/ButtonTouchable";

const PLACES_KEY = "AIzaSyAhxqfyeRiiSj3Os9KyN3TcVFCxk6hQqh0";

type ScreenProps = NativeStackScreenProps<CreatePostStackParamList, 'CreatePost'>;

const CreatePostScreen: FC<ScreenProps> = ({ navigation, route }) => {
  const params = route?.params;
  const [selectedImage, setSelectedImage] = useState<string>();
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const user = useSelector((state: RootState) => state.user.userInfo);
  const dispatch = useDispatch();

  const navigateToCameraScreen = () => {
    navigation.navigate('Camera');
  };

  // Функція для вибору зображення з медіатеки та завантаження
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

    if (!result.canceled) {
      const uri = result.assets[0].uri;

      setSelectedImage(uri);

      const response = await fetch(uri);
      const file = await response.blob();

      // // Перетворюємо Blob на File, якщо це необхідно
      const fileName = uri.split('/').pop() || "123"; // Отримуємо ім'я файлу з URI
      const fileType = file.type; // Отримуємо тип файлу

      console.log('FILE NAME', fileName)

      const imageFile = new File([file], fileName, { type: fileType });
    }
  };

  const onClearData = () => {
    setSelectedImage('');
    setTitle('')
    setAddress('');
  }

  useEffect(() => {
    if (!params?.photo) return;

    setSelectedImage(params.photo);
  }, [params]);

  const onPublish = async () => {
    if (!user) return;

    try {
      await addPost(user?.uid, {
        id: 'post',
        address,
        image: selectedImage,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.section}>
      <View style={styles.imageContainer}>
        <View style={styles.emptyImgContainer}>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={styles.image}
            />
          )}

          <TouchableOpacity
            style={styles.cameraIconWrapper}
            onPress={navigateToCameraScreen}
            hitSlop={20}
          >
            <Ionicons
              name="camera"
              size={34}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={pickImage}>
          <Text style={[styles.btnText, styles.grayText]}>
            Завантажте фото
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <InputText
          value={title}
          placeholder="Назва..."
          outerStyles={styles.input}
          onTextChange={setTitle}
        />

        <GooglePlacesAutocomplete

          placeholder="Місцевість..."
          minLength={4}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setAddress(data.description);
          }}
          query={{
            key: PLACES_KEY,
            // language: 'en',
          }}
          styles={{
            container: {
              flex: 1,
            },
            textInputContainer: {
              flexDirection: 'row',
              paddingHorizontal: 8,
            },
            textInput: {
              paddingVertical: 5,
              paddingHorizontal: 10,
              fontSize: 15,
              flex: 1,
              borderBottomWidth: 1,
              borderColor: colors.border_gray
            },
            row: {
              backgroundColor: '#FFFFFF',
              padding: 13,
              height: 44,
              flexDirection: 'row',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
            listView: {
              maxHeight: 160,
            }
          }}
        />
      </View>

      <ButtonTouchable onPress={onPublish}>
        <Text style={styles.btnText}>Опублікувати</Text>
      </ButtonTouchable>

      <ButtonTouchable
        buttonStyle={styles.deleteBtn}
        onPress={onClearData}
      >
        <Ionicons
          name="trash"
          color={colors.text_gray}
          size={24}
        />
      </ButtonTouchable>
    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    gap: 32,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "400",
    color: colors.white,
    textAlign: "center",
  },
  grayText: {
    textAlign: "left",
    color: colors.text_gray,
  },
  imageContainer: {
    gap: 8,
  },
  emptyImgContainer: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border_gray,
    backgroundColor: colors.light_gray,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraIconWrapper: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  input: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: 'white',
  },
  deleteBtn: {
    position: "absolute",
    left: "46%",
    bottom: "14%",
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'light_gray',
  }
});
