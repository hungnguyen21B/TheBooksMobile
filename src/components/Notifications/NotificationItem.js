/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';

const NotificationItem = (props) => {
  const checkSwitch = (type, iconCost) => {
    console.log(type);
    switch (type) {
      case 'Mượn sách':
        return (
          <TouchableOpacity style={[{}, iconCost, { backgroundColor: '#eb6f6f' }]}>
            <Icon name="ic-book" size={18} color="white" />
          </TouchableOpacity>
        );

      case 'Khuyến mãi':
        return (
          <TouchableOpacity style={[{}, iconCost, { backgroundColor: '#7ed321' }]}>
            <Icon name="ic-sale" size={18} color="white" />
          </TouchableOpacity>
        );

      case 'Thông báo':
        return (
          <TouchableOpacity style={[{}, iconCost, { backgroundColor: '#f5a623' }]}>
            <Icon name="ic-notification-1" size={18} color="white" />
          </TouchableOpacity>
        );
    }
  };
  return (
    <View>
      <View style={styles.contentContainer}>
        {checkSwitch(props.item.type, styles.iconCost)}
        <View style={styles.content}>
          <View style={styles.dateTime}>
            <Text style={styles.title}>{props.item.title}</Text>
            <Text style={styles.time}>{props.item.time}</Text>
          </View>
          <Text style={styles.textInfo}>{props.item.content}</Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    marginRight: 15,
    marginTop: 20,
  },
  iconCost: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginLeft: 10,
  },
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: '#ababab',
    fontFamily: 'SVN-ProximaNova',
    textAlign: 'right',
    fontWeight: '300',
    fontSize: 14,
    marginRight: 10,
  },
  title: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 20,
    color: '#4a4a4a',
  },
  textInfo: {
    textAlign: 'justify',
    marginRight: 15,
    color: '#7f7f7f',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 14,
    fontWeight: '300',
  },
});
