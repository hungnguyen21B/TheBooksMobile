/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Fonts from '../../themes/Fonts';
import Colors from '../../themes/Colors';
import IconStar from './IconStar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import getBookDetailActions from '../../redux/DetailRedux/actions';
import getReviewActions from '../../redux/ReviewRedux/actions';
import cartActions from '../../redux/CartRedux/actions';
const HomeBookItem = (props) => {
  var iconRatings = [];
  for (let i = 0; i < props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.primary} />);
  }
  for (let i = 0; i < 5 - props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.greyAuthor} />);
  }
  const dispatch = useDispatch();
  const onBookClicked = (id) => {
    console.log(id);
    dispatch(getBookDetailActions.getBookDetails(id));
    dispatch(getReviewActions.getReviews());
    dispatch(cartActions.getCart());
    //dispatch(ProfileTypes.userProfile(idUser));
  };
  return (
    <TouchableOpacity onPress={() => onBookClicked(props.item.id)}>
      <View style={[styles.container, props.style && props.style]}>
        <View>
          <Image
            source={{ uri: props.item.image }}
            style={[styles.imgItem, props.style && { width: 130, height: 160 }]}
          />
        </View>
        <Text style={styles.txtNameBook} numberOfLines={2}>
          {props.item.name}
        </Text>
        <Text style={styles.txtAuthor}>{props.item.author}</Text>
        <View style={styles.containerBottom}>
          <View style={styles.containerRating}>{iconRatings}</View>
          <Text style={styles.txtNumberBuyer}>{props.item.numberBuyer}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeBookItem;

const styles = StyleSheet.create({
  container: {
    width: 110,
    marginRight: 16,
  },
  imgItem: {
    width: 115,
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
