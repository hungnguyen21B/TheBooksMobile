/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Colors from '../../themes/Colors';
import Images from '../../themes/Images';
import IconStar from '../../components/HomePage/IconStar';
import Icon from 'react-native-vector-icons/thebook-appicon';

const BookDetailItem = (props) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  var iconRatings = [];

  for (let i = 0; i < props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.primary} size={13} />);
  }
  for (let i = 0; i < 5 - props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.greyAuthor} size={13} />);
  }
  return (
    <View>
      <View style={styles.content}>
        <View>
          <Image source={Images.bookExample} style={styles.imgBook} />
        </View>
        <View style={styles.detail}>
          <View style={{ marginLeft: SCREEN_WIDTH - 145 }}>
            <Icon name="ic-delete" size={10} color={Colors.blackIcon} />
          </View>
          <Text style={styles.nameBook}>{props.item.name}</Text>
          <Text style={styles.nameAuthor}>{props.item.author}</Text>
          <View style={styles.starRating}>
            <View style={styles.star}>{iconRatings}</View>
            <Text style={styles.textNumber}>{props.item.numberBuyer}</Text>
          </View>

          <View style={styles.footerContent}>
            <View style={styles.quantityContainer}>
              <Icon name="ic-book-1" size={13} color={Colors.primary} />
              {props.item.quantity === 0 ? (
                <Text style={[{}, styles.quantity, { color: Colors.primary }]}>hết sách</Text>
              ) : (
                <Text style={styles.quantity}>{props.item.quantity} quyển</Text>
              )}
            </View>
            <View style={styles.priceContainer}>
              <Icon name="ic-price" size={13} color={Colors.primary} />
              <Text style={styles.price}>{props.item.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookDetailItem;

const styles = StyleSheet.create({
  content: {
    marginTop: 25,
    flexDirection: 'row',
  },
  imgBook: {
    width: 80,
    height: 120,
    borderRadius: 2,
  },
  detail: {
    marginLeft: 24,
  },
  nameBook: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
    color: '#4a4a4a',
    marginTop: 11,
  },
  nameAuthor: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 14,
    color: Colors.greyAuthor,
  },
  starRating: {
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'row',
  },
  textNumber: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 10,
    color: Colors.greyAuthor,
    marginLeft: 10,
  },
  icCancel: {
    color: Colors.greyAuthor,
  },
  quantity: {
    color: Colors.greyAuthor,
    fontFamily: 'SVN-ProximaNova',
    fontSize: 14,
    fontWeight: '300',
    marginLeft: 5,
  },
  price: {
    color: Colors.greyAuthor,
    fontFamily: 'SVN-ProximaNova',
    fontSize: 14,
    fontWeight: '300',
    marginLeft: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
  },
  footerContent: {
    flexDirection: 'row',
    marginTop: 17,
  },
  priceContainer: {
    flexDirection: 'row',
    marginLeft: 36,
  },
});
