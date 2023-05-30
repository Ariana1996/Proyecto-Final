import { useState } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ListContainer, ModalContainer } from '../../components/index';
import { selectRecipe } from '../../store/actions';

const Recetario = () => {
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
      <ModalContainer isVisible={isVisible} onPressReturn={onPressReturn} />
    </View>
  );
};

export default Recetario;
