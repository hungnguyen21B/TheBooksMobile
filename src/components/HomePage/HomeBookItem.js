import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Fonts from '../../themes/Fonts';
import Colors from '../../themes/Colors';
import IconStar from './IconStar';
const HomeBookItem = (props) => {
  var iconRatings = [];

  for (let i = 0; i < props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.primary} />);
  }
  for (let i = 0; i < 5 - props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.greyAuthor} />);
  }
  return (
    <View style={[styles.container, props.style && props.style]}>
      <View>
        <Image source={{ uri: props.item.image }} style={styles.imgItem} />
      </View>
      <Text style={styles.txtNameBook}>{props.item.name}</Text>
      <Text style={styles.txtAuthor}>{props.item.author}</Text>
      <View style={styles.containerBottom}>
        <View style={styles.containerRating}>{iconRatings}</View>
        <Text style={styles.txtNumberBuyer}>{props.item.numberBuyer}</Text>
      </View>
    </View>
  );
};

export default HomeBookItem;

const styles = StyleSheet.create({
  container: {
    width: 110,
    marginRight: 16,
  },
  imgItem: {
    width: 110,
    height: 160,
    borderRadius: 1.5,
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
