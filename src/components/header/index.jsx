import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const HeaderApp = ({ userName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenid@ {userName}</Text>
    </View>
  );
};

export default HeaderApp;
