/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';

import Colors from '../../themes/Colors';
import Fonts, { size } from '../../themes/Fonts';

const Category = (props) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Kinh Te ',
      child: {
        'Ki quan': 'Ky Quan',
        'Chu viet': 'Chu Viet',
      },
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Chinh Tri',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Van Hoa',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
      title: 'Kinh Te ',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa',
      title: 'Chinh Tri',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1455',
      title: 'Van Hoa',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab',
      title: 'Kinh Te ',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd',
      title: 'Chinh Tri',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1',
      title: 'Van Hoa',
    },
  ];
  const Item = ({ title }) => {
    const [more, setMoreFilter] = useState(false);
    return (
      <View style={styles.item} onPress={() => setMoreFilter(true)}>
        <Text style={styles.title}>{title}</Text>
        {more === false ? (
          <TouchableOpacity onPress={() => setMoreFilter(true)}>
            <Icon size={20} name="ic-more-filter" color="grey" />
          </TouchableOpacity>
        ) : (
          <View style={{ flexDirection: 'column' }}>
            <TouchableOpacity onPress={() => setMoreFilter(false)}>
              <Icon size={20} name="ic-hide-filter" color="grey" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  const ChildItem = ({ child }) => {
    return (
      <View style={styles.childItem}>
        <FlatList data={child} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Item title={item.title} />
        <ChildItem title={item.title} key={item.id} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    borderColor: 'grey',
    borderWidth: 0.2,
    opacity: 0.5,
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: 100,
    fontWeight: '300',
    fontSize: 22,
    marginHorizontal: 20,
    marginEnd: 220,
    fontFamily: Fonts.type.primary,
  },
  childItem: {
    flex: 1,
    marginHorizontal: 20,
  },
});
