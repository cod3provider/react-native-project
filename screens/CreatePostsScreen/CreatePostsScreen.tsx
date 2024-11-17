// import React, {FC, useEffect, useRef, useState} from "react";
// import {Button, Text, TouchableOpacity, View} from "react-native";
// import {Camera, CameraType, CameraView, useCameraPermissions} from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';

import React, {useState, useRef} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import {Camera, CameraType, CameraView, useCameraPermissions} from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import Input from "@/components/Input/Input";
import PhotoIcon from "@/assets/icons/PhotoIcon";
import DeletePhotoIcon from "@/assets/icons/DeletePhotoIcon";
import CrossIcon from "@/assets/icons/CrossIcon";
import CameraRotateIcon from "@/assets/icons/CameraRotate";
import Button from "@/components/Button/Button";

import styles from "@/screens/CreatePostsScreen/styles";

// type Props = {};
//
// const CreatePostsScreen: FC<Props> = () => {
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//
//   const [facing, setFacing] = useState<CameraType>('back');
//   const [permission, requestPermission] = useCameraPermissions();
//   const [permissionResponse, requestLibraryPermission] = MediaLibrary.usePermissions();
//   const camera = useRef();
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
//   const handleNameChange = (value: string) => {
//     setName(value);
//   }
//
//   const handleLocationChange = (value: string) => {
//     setLocation(value);
//   }
//
//   function toggleCameraFacing() {
//     setFacing(current => (current === 'back' ? 'front' : 'back'));
//   };
//
//   const takePhoto = async () => {
//     // if (!camera) return;
//     //
//     // const image = await camera?.current?.takePictureAsync();
//     // await MediaLibrary.saveToLibraryAsync(image.uri);
//     // console.log('image', image)
//     if (camera.current) {
//       const image = await camera.current.takePictureAsync();
//       await MediaLibrary.saveToLibraryAsync(image.uri);
//       console.log('image', image);
//     }
//   }
//
//   return (
//     <View style={styles.container}>
//       {/*<View>*/}
//       {/*  <View style={styles.imageWrapper}>*/}
//       {/*    <TouchableOpacity style={styles.imagePlaceholder}>*/}
//       {/*      <PhotoIcon />*/}
//       {/*    </TouchableOpacity>*/}
//       {/*  </View>*/}
//       {/*  <Text style={styles.text}>Завантажте фото</Text>*/}
//       {/*</View>*/}
//       <CameraView style={styles.camera} facing={facing}>
//         <View style={styles.imagePlaceholder}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//             {/*<Text style={styles.text}>Flip Camera</Text>*/}
//           <CameraRotate/>
//           </TouchableOpacity>
//         </View>
//
//         <TouchableOpacity style={styles.buttonRotate} onPress={takePhoto}>
//           {/*<Text style={styles.text}>Take Photo</Text>*/}
//             <PhotoIcon/>
//         </TouchableOpacity>
//       </CameraView>
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
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Опубліковати</Text>
//       </TouchableOpacity>
//
//       <TouchableOpacity style={styles.deleteIcon}>
//         <DeletePhotoIcon/>
//       </TouchableOpacity>
//     </View>
//   )
// }
//
// export default CreatePostsScreen;


import CameraRotate from "@/assets/icons/CameraRotate";

// export default function CameraScreen() {
//   const [facing, setFacing] = useState<CameraType>('back');
//   const [permission, requestPermission] = useCameraPermissions();
//   const [permissionResponse, requestLibraryPermission] = MediaLibrary.usePermissions();
//   const camera = useRef();
//
//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />;
//   }
//
//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }
//
//   function toggleCameraFacing() {
//     setFacing(current => (current === 'back' ? 'front' : 'back'));
//   };
//
//   const takePhoto = async () => {
//     if (!camera) return;
//
//     const image = await camera?.current?.takePictureAsync();
//     await MediaLibrary.saveToLibraryAsync(image.uri);
//     console.log('image', image)
//   }
//
//   return (
//     <View style={styles.container}>
//       <CameraView style={styles.camera} facing={facing}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//
//           <TouchableOpacity style={styles.button} onPress={takePhoto}>
//             <Text style={styles.text}>Take Photo</Text>
//           </TouchableOpacity>
//         </View>
//       </CameraView>
//     </View>
//   );
// }


export default function CameraScreen({ onAddpost }) {
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
    // <View style={styles.container}>
    //   <CameraView ref={camera} style={styles.camera} facing={facing}>
    //     <View style={styles.buttonContainer}>
    //       <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
    //         <Text style={styles.text}>Flip Camera</Text>
    //       </TouchableOpacity>
    //
    //       <TouchableOpacity style={styles.button} onPress={takePhoto}>
    //         <Text style={styles.text}>Take Photo</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </CameraView>
    // </View>

    <View style={styles.container}>
      {/*<View>*/}
      {/*  <View style={styles.imageWrapper}>*/}
      {/*    <TouchableOpacity style={styles.imagePlaceholder}>*/}
      {/*      <PhotoIcon />*/}
      {/*    </TouchableOpacity>*/}
      {/*  </View>*/}
      {/*  <Text style={styles.text}>Завантажте фото</Text>*/}
      {/*</View>*/}

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
          //!! сделать проверку - если мы достукиваемся до картинки то торисовывать картинку, нет, то контейнер
          <View >
            {photoPicture ? (
              <View style={styles.photoWrap}>
                <Image source={{uri: photoPicture}} style={styles.imagePicture}/>
                <TouchableOpacity style={styles.takePhotoIcon} onPress={takePhoto}>
                  {/*<Text style={styles.text}>Take Photo</Text>*/}
                  <PhotoIcon/>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.camera}>
                {/*<TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>*/}
                {/*  /!*<Text style={styles.text}>Flip Camera</Text>*!/*/}
                {/*/!*<CameraRotateIcon/>*!/*/}
                {/*</TouchableOpacity>*/}
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   message: {
//     textAlign: 'center',
//     paddingBottom: 10,
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });