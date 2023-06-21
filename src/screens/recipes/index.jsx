import { useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ListContainer, ModalDetail } from '../../components/index';
import { selectRecipe, getRecipes } from '../../store/actions';

const Recipe = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.data);
  const [isVisible, setVisible] = useState('false');

  useFocusEffect(
    useCallback(() => {
      dispatch(getRecipes());
    }, [dispatch])
  );

  const SelectedItem = (id) => {
    dispatch(selectRecipe(id));
    setVisible(!isVisible);
  };

  const onPressReturn = () => {
    setVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      {recipes ? (
        <>
          <ListContainer
            items={recipes}
            onPressTouchable={SelectedItem}
            options={{ headerShown: 'center' }}
          />
          <ModalDetail isVisible={isVisible} onPressReturn={onPressReturn} />
        </>
      ) : (
        <Text>No hay recetas para mostrar</Text>
      )}
    </View>
  );
};

export default Recipe;
