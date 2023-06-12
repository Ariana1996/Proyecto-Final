import { useEffect, useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import Input from '../../components/input';
import ModalContainer from '../../components/modalContainer';
import { theme } from '../../constants/theme';
import { addRecipe } from '../../store/actions';

const NewRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [step, setStep] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [textModal, setTextModal] = useState('');
  const [recipe, setRecipe] = useState({
    id: '',
    title: '',
    steps: [],
    ingredients: [],
    imgUrl: '',
  });
  const dispatch = useDispatch();

  const AddIngredient = () => {
    if (ingredient.length === 0) return;

    const newRecipe = { ...recipe };
    newRecipe['ingredients'].push(ingredient);
    setRecipe(newRecipe);

    setIngredient('');
  };

  const AddStep = () => {
    if (step.length === 0) return;

    const newRecipe = { ...recipe };
    newRecipe['steps'].push(step);
    setRecipe(newRecipe);

    setStep('');
  };

  const AddRecipe = () => {
    const newRecipe = { ...recipe };

    if (
      title.length === 0 ||
      newRecipe['steps'].length == 0 ||
      newRecipe['ingredients'].length == 0
    ) {
      setTextModal('Debe completar todos los datos');
      setIsVisible(true);
      return;
    }

    newRecipe['title'] = title;
    dispatch(addRecipe(newRecipe));
    setTextModal('Receta agregada exitosamente');
  };

  const renderItem = ({ item }) => <Text>{item}</Text>;

  const SetVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> Nombre de la receta:</Text>
        <TextInput
          placeholder="Pizza"
          style={styles.inputTitle}
          value={title}
          onChangeText={(val) => setTitle(val)}
        />
      </View>
      <View>
        <Text style={styles.title}> Ingredientes</Text>
        <Input
          placeholder="Tomate"
          text={ingredient}
          onChangeText={(val) => setIngredient(val)}
          buttonTitle="Agregar"
          buttonColor={theme.colors.primary}
          onPressButton={AddIngredient}
        />
        <FlatList
          renderItem={renderItem}
          style={styles.listContainer}
          data={recipe.ingredients}
          keyExtractor={(item) => item}
        />
      </View>
      <View>
        <Text style={styles.title}> Pasos</Text>
        <Input
          placeholder="Agregar ingredientes y mezclar"
          text={step}
          onChangeText={(val) => setStep(val)}
          buttonTitle="Agregar"
          buttonColor={theme.colors.primary}
          onPressButton={AddStep}
        />
        <FlatList
          style={styles.listContainer}
          renderItem={renderItem}
          data={recipe.steps}
          keyExtractor={(item) => item}
        />
      </View>
      <View>
        <Text style={styles.title}>Tomar foto de tu receta</Text>
      </View>
      <View>
        <Button title="Agregar receta" style={styles.buttonAdd} onPress={AddRecipe} />
      </View>
      <ModalContainer text={textModal} isVisible={isVisible} onConfirmButton={SetVisible} />
    </View>
  );
};

export default NewRecipe;
