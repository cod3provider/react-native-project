// import React, {FC, useEffect, useRef, useState} from "react";
// import {Button, Text, TouchableOpacity, View} from "react-native";
// import {Camera, CameraType, CameraView, useCameraPermissions} from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';

import React, {useState, useRef} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import {CameraType, CameraView, useCameraPermissions} from "expo-camera";
import * as MediaLibrary from "expo-media-library";

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
  const [permissionResponse, requestLibraryPermission] = MediaLibrary.usePermissions();
  const camera = useRef();

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
    } else {
      console.log('Add data to all fields');
    }
  }

  return (

    <View style={styles.container}>
      {openCamera ?
        (
          <CameraView ref={camera} style={styles.camera} facing={facing}>
            <View style={styles.takePhotoButtonContainer}>
              <TouchableOpacity style={styles.takePhotoIcon} onPress={takePhoto}>
                {/*<Text style={styles.text}>Take Photo</Text>*/}
                <PhotoIcon/>
              </TouchableOpacity>
            </View>

            <View style={styles.rotateCameraButtonContainer}>
              <TouchableOpacity style={styles.RotateCameraIcon} onPress={toggleCameraFacing}>
                {/*<Text style={styles.text}>Flip Camera</Text>*/}
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
        <Text style={styles.buttonText}>Опубліковати</Text>
      </Button>

      <TouchableOpacity style={styles.deleteIcon}>
        <DeletePhotoIcon/>
      </TouchableOpacity>
    </View>
  );
}