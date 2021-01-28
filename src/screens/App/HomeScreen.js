/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationUtils } from '../../navigation';
import LoginTypes from '../../redux/LoginRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(LoginTypes.userLogout());
  };
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'pink',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => NavigationUtils.push({ screen: 'Introduction', isTopBarEnable: false })}
      >
        <Text>Introduction</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'yellow',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => NavigationUtils.push({ screen: 'HomePage', isTopBarEnable: false })}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'blue',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => NavigationUtils.push({ screen: 'Detail', isTopBarEnable: false })}
      >
        <Text>Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'green',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => NavigationUtils.push({ screen: 'SearchPage', isTopBarEnable: false })}
      >
        <Text>SearchPage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'pink',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => NavigationUtils.push({ screen: 'ViewAll', isTopBarEnable: false })}
      >
        <Text>ViewAll</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'red',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => NavigationUtils.push({ screen: 'Cart', isTopBarEnable: false })}
      >
        <Text>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
          backgroundColor: 'red',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onLogout}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
