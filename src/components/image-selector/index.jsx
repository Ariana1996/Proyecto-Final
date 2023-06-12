import { requestCameraPermissionAsync, launchCameraAsync } from 'expo-image-picker';
import { useState } from 'react';
import { View, Button, Text, Image, Alert } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants/theme';

export const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await requestCameraPermissionAsync();
    console.log('ACAAA', status);
    if (status !== 'granted') {
      Alert.alert('Permisos denegados', 'Requerimos permisos para usar la cámara', [
        { text: 'OK' },
      ]);
      return false;
    }

    return true;
  };
  const TakeImage = async () => {
    const isCameraPermission = await verifyPermissions;
    if (!isCameraPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Tomar Foto" color={theme.colors.primary} onPress={TakeImage} />
    </View>
  );
};

export default ImageSelector;
