/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Images from '../../themes/Images';
import Type from '../../components/HomePage/Type';
import { NavigationUtils } from '../../navigation';

const WIDTH = window.width;
var { width } = Dimensions.get('window');
var box_width = width / 3;
var box = width / 2;
const Profile = () => {
  const [isRow, setRow] = useState(true);
  const [isColumn, setColumn] = useState(false);

  const types = [
    {
      id: '1',
      name: 'Đọc nhiềuu',
    },
  ];

  const onSettingProfile = () => {
    NavigationUtils.push({ screen: 'SettingProfile', title: 'Cài đặt thông tin' });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerIcon}>
        <TouchableOpacity style={styles.buttonIcon}>
          <Icon name="ic-photo" size={20} color="white" style={styles.iconPhoto} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon} onPress={() => onSettingProfile()}>
          <Icon name="ic-setting" size={20} color="white" style={styles.iconSetting} />
        </TouchableOpacity>
      </View>
      <Image source={Images.avatar} style={styles.avatarImage} />
      <View style={styles.nameView}>
        <Text style={styles.name}>Hoàng Thị Thủy</Text>
      </View>
      <View
        style={{
          marginTop: -70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 25,
        }}
      >
        <View style={styles.iconTitan}>
          <Icon name="ic-titan" size={35} color="#e584fc" />
          <Text
            style={{ fontSize: 15, marginLeft: 10, justifyContent: 'center', alignSelf: 'center' }}
          >
            Platinum
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: -5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            elevation: 2,
            padding: 5,
          }}
        >
          <TouchableOpacity>
            <Icon name="code" size={37} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewAction}>
        <View style={styles.actionType}>
          <Text style={styles.sizeText}>Đang mượn</Text>
          <Text style={styles.sizeText}>12</Text>
        </View>
        <View style={styles.actionType}>
          <Text style={styles.sizeText}>Yêu thích</Text>
          <Text style={styles.sizeText}>23</Text>
        </View>
        <View style={styles.actionType}>
          <Text style={styles.sizeText}>Tích điểm</Text>
          <Text style={styles.sizeText}>537</Text>
        </View>
      </View>
      <View style={styles.rowButton}>
        <View style={styles.viewBt}>
          <TouchableOpacity onPress={() => [setRow(!isRow), setColumn(!isColumn)]}>
            <Icon name="ic-filter-change-2" size={40} color={isRow ? '#ababab' : '#000'} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewBt}>
          <TouchableOpacity onPress={() => [setRow(!isRow), setColumn(!isColumn)]}>
            <Icon name="ic-filter-change" size={40} color={isRow ? '#000' : '#ababab'} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
        {types.map((type) => {
          return <Type key={type.id} />;
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  viewBt: {
    width: box,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  rowButton: {
    flexDirection: 'row',
    marginTop: 30,
    borderBottomColor: '#ababab',
    borderTopWidth: 0.5,
    borderTopColor: '#ababab',
    borderBottomWidth: 0.5,
    paddingBottom: 8,
    paddingTop: 8,
  },
  name: {
    color: 'white',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 30,
    fontWeight: '600',
    marginLeft: 15,
  },
  buttonIcon: { width: 30, height: 30, justifyContent: 'center', alignSelf: 'center' },
  viewAction: { flexDirection: 'row', marginTop: 24, marginLeft: 10 },
  sizeText: { fontSize: 16, fontFamily: 'SVN-ProximaNova' },
  actionType: { justifyContent: 'center', alignItems: 'center', width: box_width },
  cardItem: {
    width: '50%',
    marginRight: 0,
    marginBottom: 15,
  },
  gridContainerItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  headerIcon: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    zIndex: 10,
    justifyContent: 'space-between',
  },
  iconSetting: {
    textAlign: 'right',
    zIndex: 10,
  },
  iconPhoto: {
    marginTop: 0,
    marginLeft: 0,
  },
  avatarImage: {
    height: 370,
    width: WIDTH,
    marginTop: -45,
  },
  nameView: {
    marginTop: -100,
    marginBottom: 100,
    zIndex: 10,
  },
  iconTitan: {
    marginLeft: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderRadius: 20,
    width: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
  },
});
