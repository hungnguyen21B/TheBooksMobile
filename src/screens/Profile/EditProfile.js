/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../themes/Colors';
import Icon from 'react-native-vector-icons/thebook-appicon';
import TextInputItem from '../../components/TextInputItem';
import PasswordItem from '../../components/PasswordItem';
import { NavigationUtils } from '../../navigation';

const EditProfile = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="ic-back" size={13} color={Colors.blackIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Thông tin cá nhân</Text>
        <Text />
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: '95%' }}>
        <View style={{ paddingHorizontal: 15 }}>
          <View style={{ paddingVertical: 15 }}>
            <TextInputItem title="Tên" />
          </View>

          <View style={{ marginTop: 70 }}>
            <TextInputItem title="Ngày sinh" />
          </View>
          <View style={{ marginTop: 70 }}>
            <PasswordItem title="Hộp thư" />
          </View>
        </View>
        <View style={{ justifyContent: 'flex-start' }}>
          <TouchableOpacity style={styles.btnPurchase}>
            <Text style={styles.textBtn}>Gởi yêu cầu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    paddingHorizontal: 15,
  },
  title: {
    color: '#4a4a4a',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
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
    backgroundColor: Colors.secondary,
  },
});
