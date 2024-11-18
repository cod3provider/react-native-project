import React, {useState, useRef, useEffect} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import {CameraType, CameraView, useCameraPermissions} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from 'expo-location';
import {useNavigation} from "@react-navigation/native";

import Input from "@/components/Input/Input";
import PhotoIcon from "@/assets/icons/PhotoIcon";
import DeletePhotoIcon from "@/assets/icons/DeletePhotoIcon";
import CrossIcon from "@/assets/icons/CrossIcon";
import CameraRotateIcon from "@/assets/icons/CameraRotate";
import Button from "@/components/Button/Button";

import styles from "@/screens/CreatePostsScreen/styles";

export default function CameraScreen({onAddpost}) {
  const [name, setName] = useState('');
  const [photoPicture, setPhotoPicture] = useState(null);
  const [location, setLocation] = useState('');
  const [openCamera, setOpenCamera] = useState(false);
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  // const [permissionResponse, requestLibraryPermission] = MediaLibrary.usePermissions();
  const camera = useRef();
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [libraryPermission, requestLibraryPermission] = MediaLibrary.usePermissions();
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync({});
      const userAddress = await getAddressFromCoords(
        userLocation.coords.latitude,
        userLocation.coords.longitude
      );

      setLocation(userAddress); // Установить адрес в поле "Місцевість"
    })();
  }, []);

  const getAddressFromCoords = async (latitude: number, longitude: number) => {
    try {
      const [address] = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (address) {
        return `${address.city || ''}, ${address.country || ''}`.trim();
      }
      return '';
    } catch (error) {
      console.log('Error fetching address:', error);
      return '';
    }
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View/>;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission"/>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const takePhoto = async () => {
    if (!camera) return;

    const image = await camera?.current?.takePictureAsync();
    console.log('image', image.uri)

    if (image.uri) {
      await MediaLibrary.saveToLibraryAsync(image.uri);
      setPhotoPicture(image.uri);
      toggleOpeningCamera();
      console.log('SavedPhoto: ', image.uri);
    }
  }

  const toggleOpeningCamera = () => {
    setOpenCamera(!openCamera);
    console.log(openCamera);
  }

  const handleNameChange = (value: string) => {
    setName(value);
  }

  const handleLocationChange = (value: string) => {
    setLocation(value);
  }

  const onSubmitForm = () => {
    if (name && location && photoPicture) {
      onAddpost({name, location, photoPicture});

      setName('');
      setPhotoPicture(null);
      setLocation('');
      navigation.navigate('Posts');
    } else {
      console.log('Add data to all fields');
    }
  }

  if (!cameraPermission || !libraryPermission) {
    return <View />;
  }

  if (!cameraPermission.granted || !libraryPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to use the camera and library</Text>
        <Button onPress={requestCameraPermission} title="Grant Camera Permission" />
        <Button onPress={requestLibraryPermission} title="Grant Library Permission" />
      </View>
    );
  }

  return (

    <View style={styles.container}>
      {openCamera ?
        (
          <CameraView ref={camera} style={styles.camera} facing={facing}>
            <View style={styles.takePhotoButtonContainer}>
              <TouchableOpacity style={styles.takePhotoIcon} onPress={takePhoto}>
                <PhotoIcon/>
              </TouchableOpacity>
            </View>

            <View style={styles.rotateCameraButtonContainer}>
              <TouchableOpacity style={styles.RotateCameraIcon} onPress={toggleCameraFacing}>
                <CameraRotateIcon/>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.closeCameraButton} onPress={toggleOpeningCamera}>
              <CrossIcon/>
            </TouchableOpacity>
          </CameraView>
        ) : (
          <View>
            {photoPicture ? (
              <View style={styles.photoWrap}>
                <Image source={{uri: photoPicture}} style={styles.imagePicture}/>
                <TouchableOpacity style={styles.takePhotoIcon} onPress={takePhoto}>
                  <PhotoIcon/>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.camera}>
                <TouchableOpacity style={styles.openCameraButton} onPress={toggleOpeningCamera}>
                  <PhotoIcon/>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )
      }

      <View style={styles.inputWrapper}>
        <Input
          style={styles.input}
          selectionColor='#212121'
          placeholder="Назва"
          value={name}
          onTextChange={handleNameChange}
        />
        <Input
          style={styles.input}
          placeholder="Місцевість"
          selectionColor='#212121'
          value={location}
          onTextChange={handleLocationChange}
        />
      </View>

      <Button style={styles.buttonSubmit} onPress={onSubmitForm}>
        <Text style={styles.buttonText}>Опублікувати</Text>
      </Button>

      <TouchableOpacity style={styles.deleteIcon}>
        <DeletePhotoIcon/>
      </TouchableOpacity>
    </View>
  );
}