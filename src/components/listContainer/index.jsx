import React from 'react';
import { View, FlatList } from 'react-native';

import ItemList from './item';

const ListContainer = ({ items, onPressTouchable }) => {
  const renderItem = ({ item }) => <ItemList item={item} onPressItem={onPressTouchable} />;

  return (
    <View>
      <FlatList renderItem={renderItem} data={items} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default ListContainer;
