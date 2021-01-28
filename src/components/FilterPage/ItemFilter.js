/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import IconStar from '../HomePage/IconStar';
import IconBook from './IconBook';
import IconPrice from './IconPrice';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';

const ItemFilter = (props) => {
  var iconRatings = [];

  for (let i = 0; i < props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.primary} />);
  }
  for (let i = 0; i < 5 - props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.greyAuthor} />);
  }
  return (
    <View>
      <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri: props.item.image,
            }}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>{props.item.name}</Text>
          <Text style={styles.textAuthor}>{props.item.author}</Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ flexDirection: 'row' }}>{iconRatings}</View>
            <Text>{props.item.numberBuyer}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <IconBook color="#FACC2E" />
              <Text style={{ paddingLeft: 5 }}>{props.item.numberBuyer}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 70 }}>
              <IconPrice color="#FACC2E" />
              <Text style={{ paddingLeft: 5 }}>{props.item.numberBuyer}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemFilter;

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 170,
    borderRadius: 4,
  },
  content: {
    paddingLeft: 10,
    paddingTop: 20,
  },
  text: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },

  textAuthor: {
    fontSize: 16,
    fontFamily: 'SVN-ProximaNova',
    marginTop: 5,
    fontFamily: Fonts.type.primary,
    color: Colors.greyAuthor,
  },
});
