import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const HeaderApp = ({ userName, onLogOut }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenid@ {userName}</Text>
      <Button title="Desloguear" onPress={onLogOut} />
    </View>
  );
};

export default HeaderApp;
