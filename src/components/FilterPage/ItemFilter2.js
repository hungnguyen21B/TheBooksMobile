/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconStar from '../HomePage/IconStar';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';

const ItemFilter2 = (props) => {
  var iconRatings = [];

  for (let i = 0; i < props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.primary} />);
  }
  for (let i = 0; i < 5 - props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.greyAuthor} />);
  }
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: props.item.image }} style={styles.imgItem} />
      </View>
      <View>
        <Text style={styles.txtNameBook}>{props.item.name}</Text>
        <Text style={styles.txtAuthor}>{props.item.author}</Text>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.containerRating}>{iconRatings}</View>
        <Text style={styles.txtNumberBuyer}>{props.item.numberBuyer}</Text>
      </View>
    </View>
  );
};

export default ItemFilter2;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 280,
    marginHorizontal: 10,
    marginEnd: 20,
    marginBottom: 35,
  },
  imgItem: {
    width: '100%',
    height: 220,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.22)',
  },
  txtNameBook: {
    fontSize: 14,
    color: Colors.secondary,
    fontFamily: Fonts.type.primary,
    marginTop: 8,
  },
  txtAuthor: {
    fontSize: 12,
    fontFamily: Fonts.type.primary,
    color: Colors.greyAuthor,
    marginTop: 2.2,
  },
  txtNumberBuyer: {
    fontSize: 9,
    fontFamily: Fonts.type.primary,
    color: Colors.greyAuthor,
    marginLeft: 8,
    marginTop: 2.2,
  },
  containerBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerRating: {
    flexDirection: 'row',
  },
});
