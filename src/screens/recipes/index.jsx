import { useState } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ListContainer, ModalDetail } from '../../components/index';
import { selectRecipe } from '../../store/actions';

const Recipe = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.data);
  const [isVisible, setVisible] = useState('false');

  const SelectedItem = (id) => {
    dispatch(selectRecipe(id));
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
      <ModalDetail isVisible={isVisible} onPressReturn={onPressReturn} />
    </View>
  );
};

export default Recipe;
