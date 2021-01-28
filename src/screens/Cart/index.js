/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import BookDetailItem from '../../components/Cart/BookDetailItem';
import Colors from '../../themes/Colors';
import Icon from 'react-native-vector-icons/thebook-appicon';
import AwesomeAlert from 'react-native-awesome-alerts';

const Cart = () => {
  const listBooks = [
    {
      id: '1',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Tên bạn là gì ?',
      author: 'Shinkai Makolo',
      rating: 3,
      numberBuyer: 324,
      quantity: 0,
      price: 36000,
    },
    {
      id: '2',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Một lít nước mắt',
      author: 'Kito aya',
      rating: 4,
      numberBuyer: 53,
      quantity: 4,
      price: 36000,
    },
  ];

  const [showAlert, setShowAlert] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Icon name="ic-back" size={13} color={Colors.blackIcon} />
          <Text style={styles.title}>Giỏ hàng</Text>
          <Icon name="ic-trash" size={13} color={Colors.blackIcon} />
        </View>
        {listBooks.map((item, key) => {
          return <BookDetailItem item={item} key={key} />;
        })}
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.btnPurchase} onPress={() => setShowAlert(true)}>
          <Text style={styles.textBtn}>Đặt sách</Text>
        </TouchableOpacity>
      </View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        message="Sách đã được đặt thành công
Bạn có thể theo dõi tại mục cá nhân"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Cám ơn"
        confirmButtonColor={Colors.primary}
        onConfirmPressed={() => setShowAlert(false)}
        messageStyle={{ textAlign: 'center' }}
        contentContainerStyle={styles.alertContainer}
        confirmButtonStyle={styles.confirmBtn}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    paddingHorizontal: 15,
    marginTop: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#4a4a4a',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 20,
    textAlign: 'center',
  },
  textBtn: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  btnPurchase: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  alertContainer: {
    width: '100%',
  },
  confirmBtn: {
    width: 105,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
