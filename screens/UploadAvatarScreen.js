import React from 'react';
import { View, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadAvatarScreen = () => {
  const uploadAvatar = async (imageUri) => {
    try {
      const formData = new FormData();
      formData.append('avatar', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'avatar.jpg'
    });
    const response = await fetch('http://', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
    }
});

const data = await response.json();
console.log(data);
Alert.alert('Upload Successful', 'Avatar uploaded successfully');
    } catch (error) {
        console.error(error);
        Alert.alert('Upload Failed', 'An error occurred while uploading avatar');
    }
  };
  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Permission to access image library was denied');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      
    if (!result.cancelled) {
        uploadAvatar(result.uri);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Select Avatar" onPress={handleImagePick} />
    </View>
  );
};

export default UploadAvatarScreen;
