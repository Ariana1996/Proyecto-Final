import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

const ModalContainer = ({ text, isVisible, onConfirmButton }) => {
  return (
    <Modal visible={isVisible}>
      <View>
        <Text>{text}</Text>
        <View>
          <Button title="Confirmar" onPress={onConfirmButton} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalContainer;
