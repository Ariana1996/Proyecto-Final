import Ionicons from '@expo/vector-icons/Ionicons';
import { Modal, View, Text, Button, FlatList, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const ModalDetail = ({ isVisible, onPressReturn, onPressFavourite }) => {
  const recipe = useSelector((state) => state.recipes.selected);

  return (
    <Modal visible={isVisible}>
      <ScrollView>
        <View style={styles.container}>
          {recipe.isfavourite == 0 ? (
            <Ionicons
              style={styles.heart}
              name="heart-outline"
              onPress={() => onPressFavourite(recipe.id, recipe.isfavourite)}
            />
          ) : (
            <Ionicons
              style={styles.heart}
              name="heart"
              onPress={() => onPressFavourite(recipe.id, recipe.isfavourite)}
            />
          )}
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
      </ScrollView>
    </Modal>
  );
};

export default ModalDetail;
