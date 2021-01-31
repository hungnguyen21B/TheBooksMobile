/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Colors from '../../themes/Colors';
import IconStar from '../../components/HomePage/IconStar';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import cartActions from '../../redux/CartRedux/actions';

const BookDetailItem = (props) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;

  var iconRatings = [];
  for (let i = 0; i < 4; i++) {
    iconRatings.push(<IconStar color={Colors.primary} size={13} />);
  }
  for (let i = 0; i < 5 - 4; i++) {
    iconRatings.push(<IconStar color={Colors.greyAuthor} size={13} />);
  }

  const user = useSelector((state) => state.login.loginResponse.user);
  const dispatch = useDispatch();
  const onDeleteItem = () => {
    const data = {
      bookId: props.item.book.id,
      deleteAll: false,
      userId: user.id,
    };
    console.log('Book id: ' + data.bookId);
    console.log('deleteAll: ' + data.deleteAll);
    console.log('DATA: ' + data.userId);
    dispatch(cartActions.deleteItemInCart(data));
  };
  return (
    <View>
      <View style={styles.content}>
        <View>
          <Image
            source={{
              uri: props.item.book.medias[0],
            }}
            style={styles.imgBook}
          />
        </View>
        <View style={styles.detail}>
          <View style={{ marginLeft: SCREEN_WIDTH - 145 }}>
            <TouchableOpacity onPress={() => onDeleteItem()}>
              <Icon name="ic-delete" size={10} color={Colors.blackIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.nameBook} numberOfLines={2}>
            {props.item.book.title}
          </Text>
          <Text style={styles.nameAuthor}>{props.item.book.authors[0].name}</Text>
          <View style={styles.starRating}>
            <View style={styles.star}>{iconRatings}</View>
            <Text style={styles.textNumber}>{props.item.book.totalReview}</Text>
          </View>

          <View style={styles.footerContent}>
            <View style={styles.quantityContainer}>
              <Icon name="ic-book-1" size={13} color={Colors.primary} />
              {props.item.book.quantity === 0 ? (
                <Text style={[{}, styles.quantity, { color: Colors.primary }]}>hết sách</Text>
              ) : (
                <Text style={styles.quantity}>{props.item.book.quantity} quyển</Text>
              )}
            </View>
            <View style={styles.priceContainer}>
              <Icon name="ic-price" size={13} color={Colors.primary} />
              <Text style={styles.price}>{props.item.book.price}</Text>
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
    marginLeft: 5,
  },
  nameBook: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
    color: '#4a4a4a',
    marginTop: 4,
    marginRight: 100,
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
