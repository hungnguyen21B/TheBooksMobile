/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OrderInfo = (props) => {
  const checkSwitch = (status) => {
    switch (status) {
      case 'Đang giữ':
        return <Text style={styles.giu}>Đang giữ</Text>;

      case 'Đang mượn':
        return <Text style={{ color: '#73c700' }}>Đang mượn</Text>;

      case 'Đã trả':
        return <Text style={{ color: '#1d9dd8' }}>Đã trả</Text>;

      case 'Chưa trả':
        return <Text style={{ color: '#fd4176' }}>Chưa trả</Text>;
    }
  };

  return (
    <View>
      <View style={styles.infoContent}>
        <Text style={styles.price}>{props.item.price}</Text>
        <Text style={styles.detail}>{props.item.code}</Text>
      </View>
      <View style={styles.statusContent}>
        <Text style={styles.detail}>Ngày trả: {props.item.returnDate}</Text>
        {checkSwitch(props.item.status)}
      </View>
    </View>
  );
};

export default OrderInfo;

const styles = StyleSheet.create({
  infoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  statusContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 13,
    fontWeight: '300',
    color: '#4a4a4a',
  },
  detail: {
    color: '#7f7f7f',
    fontSize: 13,
    fontFamily: 'SVN-ProximaNova',
    fontWeight: '300',
  },
  giu: { color: '#fc9619' },
});
