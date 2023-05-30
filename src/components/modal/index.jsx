import React from 'react';
import { Modal, View, Text, Button, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const ModalContainer = ({ isVisible, onPressReturn }) => {
  const recipe = useSelector((state) => state.recipes.selected);

  return (
    <Modal visible={isVisible}>
      <View style={styles.container}>
        <Image source={{ uri: recipe.imgUrl }} style={styles.imgUrl} />
        <View>
          <Text style={styles.title}>Ingredientes</Text>
          <FlatList
            data={recipe.ingredients}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          />
        </View>
        <View>
          <Text style={styles.title}>Paso a paso</Text>
          <FlatList
            data={recipe.steps}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          />
        </View>
      </View>
      <Button style={styles.button} title="volver al recetario" onPress={onPressReturn} />
    </Modal>
  );
};

export default ModalContainer;
