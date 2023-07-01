import { useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ListContainer, ModalDetail } from '../../components/index';
import { selectRecipe, getRecipes, setFavourite } from '../../store/actions';

const Recipe = ({ route }) => {
  const { favouritePage } = route.params;
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.data);
  const [isVisible, setVisible] = useState('false');

  useFocusEffect(
    useCallback(() => {
      favouritePage ? dispatch(getRecipes(favouritePage)) : dispatch(getRecipes(favouritePage));
    }, [dispatch])
  );

  const SelectedItem = (id) => {
    dispatch(selectRecipe(id));
    setVisible(!isVisible);
  };

  const onPressReturn = () => {
    setVisible(!isVisible);
  };

  const onPressFavourite = (id, value) => {
    dispatch(setFavourite(id, value));
  };

  return (
    <View style={styles.container}>
      {recipes && recipes.length > 0 ? (
        <>
          <ListContainer
            items={recipes}
            onPressTouchable={SelectedItem}
            options={{ headerShown: 'center' }}
          />
          <ModalDetail
            isVisible={isVisible}
            onPressReturn={onPressReturn}
            onPressFavourite={onPressFavourite}
          />
        </>
      ) : (
        <Text>No hay recetas para mostrar</Text>
      )}
    </View>
  );
};

export default Recipe;
