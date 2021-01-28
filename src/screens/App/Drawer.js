import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import ItemTextInDrawer from '../../components/Drawer/ItemTextInDrawer';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
const Drawer = () => {
  const list = [
    {
      id: '1',
      text: 'Kinh tế',
      check: true,
    },
    {
      id: '1s',
      text: 'Chính trị',
      check: false,
    },
    {
      id: '1sd',
      text: 'Văn hoá',
      check: false,
    },
    {
      id: '1da',
      text: 'Xã hội',
      check: false,
    },
    {
      id: '1bdsd',
      text: 'Khoa học',
      check: false,
    },
    {
      id: '1ffb',
      text: 'Thể thao',
      check: true,
    },
    {
      id: '1dsdadf',
      text: 'Tự nhiên',
      check: false,
    },
    {
      id: '1ddf',
      text: 'Truyện tranh',
      check: false,
    },

    {
      id: 'sdad1f',
      text: 'Tôn giáo',
      check: false,
    },

    {
      id: '1sdsdsdf',
      text: 'Lịch sử',
      check: true,
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerSearch}>
        <View style={styles.containerSearchRight}>
          <View style={styles.borderLeft} />
          <TextInput
            placeholder="Tìm thể loại"
            placeholderTextColor="#cecece"
            style={styles.inputSearch}
          />
        </View>
        <TouchableOpacity style={styles.containerBtnSearch}>
          <Icon size={12} color={Colors.blackIcon} name="ic-search" />
        </TouchableOpacity>
      </View>
      {list.map((item) => {
        return <ItemTextInDrawer item={item} key={item.id} />;
      })}
    </ScrollView>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 0.8,
    marginBottom: 12,
  },
  containerSearchRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderLeft: {
    borderLeftColor: 'black',
    borderLeftWidth: 1.5,
    height: 16,
    marginLeft: 22,
  },
  containerBtnSearch: {
    width: 20,
    height: 20,
    marginRight: 18,
  },
  inputSearch: {
    fontSize: 12,
    fontFamily: Fonts.type.primary,
    fontWeight: '300',
  },
});
