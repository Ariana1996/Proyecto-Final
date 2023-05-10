import { useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { HeaderApp, ListContainer, ModalContainer } from '../../components/index';
import recipes from '../../services/mockRecipes';

const MainMenu = ({ userName }) => {
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
    <View>
      <HeaderApp userName={userName} />
      <View style={styles.container}>
        <Text style={styles.title}>Recetario</Text>
        <ListContainer items={recipes} onPressTouchable={SelectedItem} />
        <ModalContainer
          recipe={recipeSelected}
          isVisible={isVisible}
          onPressReturn={onPressReturn}
        />
      </View>
    </View>
  );
};

export default MainMenu;
