import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';

import { styles } from './styles';

const ItemList = ({ item, onPressItem }) => {
  return (
    <TouchableOpacity style={styles.listContainer} onPress={() => onPressItem(item.id)}>
      <Image source={{ uri: item.imgUrl }} style={styles.imgList} />
      <Text style={styles.item}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default ItemList;
