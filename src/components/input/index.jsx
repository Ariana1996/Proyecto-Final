import React from 'react';
import { Button, TextInput, View } from 'react-native';

import { styles } from './style';

const Input = ({ placeholder, text, onChangeText, buttonTitle, buttonColor, onPressButton }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
      />
      <Button title={buttonTitle} color={buttonColor} onPress={onPressButton} />
    </View>
  );
};

export default Input;
