import { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { ListContainer, ModalContainer } from '../../components/index';

const Recetario = () => {
  const recipes = useSelector((state) => state.recipes.data);

  const [isVisible, setVisible] = useState('false');
  const [recipeSelected, setRecipeSelected] = useState('');

  const SelectedItem = (id) => {
    setRecipeSelected(recipes.find((recipe) => recipe.id === id));
    setVisible(!isVisible);
  };

  const onPressReturn = () => {
    setVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <ListContainer
        items={recipes}
        onPressTouchable={SelectedItem}
        options={{ headerShown: 'center' }}
      />
      <ModalContainer recipe={recipeSelected} isVisible={isVisible} onPressReturn={onPressReturn} />
    </View>
  );
};

export default Recetario;
