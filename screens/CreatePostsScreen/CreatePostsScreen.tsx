import {Text, TouchableOpacity, View} from "react-native";
import styles from "@/screens/CreatePostsScreen/styles";
import Input from "@/components/Input/Input";
import React, {useState} from "react";
import PhotoIcon from "@/assets/icons/PhotoIcon";
import DeletePhotoIcon from "@/assets/icons/DeletePhotoIcon";


const CreatePostsScreen = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleNameChange = (value: string) => {
    setName(value);
  }

  const handleLocationChange = (value: string) => {
    setLocation(value);
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageWrapper}>
          <View style={styles.imagePlaceholder}>
            <PhotoIcon />
          </View>
        </View>
        <Text style={styles.text}>Завантажте фото</Text>
      </View>

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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Опубліковати</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteIcon}>
        <DeletePhotoIcon />
      </TouchableOpacity>
    </View>
  )
}

export default CreatePostsScreen;