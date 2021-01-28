/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OrderInfo from '../../components/Orders/OrderInfo';

const Orders = () => {
  const listOrders = [
    {
      id: 1,
      price: 164000,
      code: 'Mã: K234H32JS',
      returnDate: '',
      status: 'Đang giữ',
    },
    {
      id: 2,
      price: 89000,
      code: 'Mã: K234H32JS',
      returnDate: '',
      status: 'Đang mượn',
    },
    {
      id: 3,
      price: 372000,
      code: 'Mã: K234H32JS',
      returnDate: '24/08/2018',
      status: 'Đã trả',
    },
    {
      id: 4,
      price: 573000,
      code: 'Mã: K234H32JS',
      returnDate: '',
      status: 'Chưa trả',
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Danh sách đơn hàng</Text>
      </View>
      {listOrders.map((item) => {
        return <OrderInfo item={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 24,
  },
  title: {
    color: '#4a4a4a',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Orders;
