/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import EvaluateItem from '../../components/EvaluateItem';
import Colors from '../../themes/Colors';
import IconStar from '../../components/HomePage/IconStar';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useSelector } from 'react-redux';
import Type from '../../components/HomePage/Type';
import { NavigationUtils } from '../../navigation';

const Detail = () => {
  const bookDetails = useSelector((state) => state.bookDetails.getBookDetailsResponse);
  var reviews = useSelector((state) => state.reviews.getReviewsResponse.reviews);
  console.log(' reviews = ' + bookDetails.id);
  reviews = reviews.filter((item) => item.bookId === bookDetails.id);
  var iconRatings = [];
  for (let i = 0; i < 4; i++) {
    iconRatings.push(<IconStar color={Colors.primary} />);
  }
  for (let i = 0; i < 5 - 4; i++) {
    iconRatings.push(<IconStar color={Colors.greyAuthor} />);
  }

  const types = [
    {
      id: '1',
      name: 'Sách tương tự',
    },
  ];

  const [showAlert, setShowAlert] = useState(false);
  return (
    <ScrollView>
      <View style={styles.iconHeader}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="ic-back" size={13} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ic-like-pre" size={13} />
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image source={{ uri: bookDetails.medias[0] }} style={styles.imgDetail} />
        <Text style={styles.textDetail}>{bookDetails.title}</Text>
        <Text style={styles.textAuthor}>{bookDetails.authors[0].name}</Text>
        <View style={styles.startContainer}>
          <View style={styles.star}>{iconRatings}</View>
          <View style={styles.price}>
            <Icon name="ic-price" size={10} color={Colors.primary} />
            <Text style={styles.textPrice}>{bookDetails.price}</Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnCategory}>
            <Text style={styles.textCategory}>tình cảm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCategory}>
            <Text style={styles.textCategory}>đời sống</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCategory}>
            <Text style={styles.textCategory}>học đường</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paraDetail}>
          <Text style={styles.textPara} numberOfLines={5}>
            {bookDetails.content}
          </Text>
        </View>
      </View>

      <View style={styles.listScroll}>
        {types.map((type) => {
          return <Type title={type.name} key={type.id} />;
        })}
      </View>

      <View style={styles.evaluateContent}>
        <Text style={styles.title}>Nhận xét</Text>
        <TouchableOpacity style={styles.writeEvaluateBtn}>
          <Text style={styles.titleEvaluate}>Viết nhận xét cho cuốn sách này</Text>
        </TouchableOpacity>
      </View>

      {reviews.map((item, key) => {
        return key === 0 ? (
          <EvaluateItem author={item.userName} star={4} isFirst={true} content={item.content} />
        ) : (
          <EvaluateItem
            author={item.userName}
            star={item.starRating}
            isFirst={false}
            content={item.content}
          />
        );
      })}

      <View>
        <TouchableOpacity style={styles.viewAllEvaluate}>
          <Text style={styles.textViewAll}>Xem tất cả nhận xét</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.addToCartContainer}>
        <TouchableOpacity style={styles.addToCart} onPress={() => setShowAlert(true)}>
          <Text style={styles.textAddToCart}>Thêm vào giỏ</Text>
        </TouchableOpacity>
      </View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        message="Sách này hiện đã được mượn hết
Bạn có muốn nhận thông báo ngay khi có lại"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        showCancelButton={true}
        cancelText="Không, cám ơn"
        confirmText="Nhận thông báo"
        confirmButtonColor={Colors.primary}
        onConfirmPressed={() => setShowAlert(false)}
        onCancelPressed={() => setShowAlert(false)}
        messageStyle={{ textAlign: 'center' }}
        contentContainerStyle={styles.alertContainer}
        confirmButtonStyle={styles.confirmBtn}
        cancelButtonStyle={styles.cancelBtn}
        cancelButtonTextStyle={styles.textCancel}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgDetail: {
    width: 135,
    height: 197,
    borderRadius: 2,
  },
  textDetail: {
    marginTop: 8,
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
    color: '#262626',
    fontWeight: 'bold',
  },
  textAuthor: {
    color: Colors.greyAuthor,
    fontSize: 12,
    fontFamily: 'SVN-ProximaNova',
    fontWeight: '300',
  },
  startContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  star: {
    flexDirection: 'row',
    marginRight: 10,
  },
  price: {
    flexDirection: 'row',
  },
  textPrice: {
    marginLeft: 5,
    marginTop: -5,
  },
  btnCategory: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 17,
    borderWidth: 1,
    borderColor: '#cecece',
    marginRight: 8,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 9,
  },
  textCategory: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 10,
    fontWeight: '300',
  },
  paraDetail: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    flexDirection: 'row',
  },
  textPara: {
    textAlign: 'justify',
  },
  iconHeader: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    marginTop: 25,
  },
  listScroll: {
    paddingHorizontal: 18,
    marginTop: 15,
  },
  title: {
    fontSize: 16,
    color: '#262626',
    fontFamily: 'SVN-ProximaNova',
    fontWeight: 'bold',
  },
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAll: {
    fontSize: 12,
    fontWeight: '300',
    color: Colors.secondary,
    fontFamily: 'SVN-ProximaNova',
  },
  evaluateContent: {
    paddingHorizontal: 18,
  },
  writeEvaluateBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 2,
    height: 30,
    marginTop: 12,
  },
  titleEvaluate: {
    color: Colors.secondary,
    fontFamily: 'SVN-ProximaNova',
    fontSize: 12,
    fontWeight: '300',
  },
  viewAllEvaluate: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textViewAll: {
    color: Colors.secondary,
    fontSize: 12,
    fontFamily: 'SVN-ProximaNova',
    marginTop: 12,
  },
  addToCart: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: Colors.primary,
    marginTop: 10,
    marginBottom: 20,
    height: 38,
  },
  textAddToCart: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'SVN-ProximaNova',
  },
  addToCartContainer: {
    paddingHorizontal: 18,
  },
  alertContainer: {
    width: '100%',
  },
  confirmBtn: {
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cancelBtn: {
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.secondary,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  textCancel: {
    color: 'black',
  },
});
export default Detail;
