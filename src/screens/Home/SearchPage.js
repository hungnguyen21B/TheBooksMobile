import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Colors from '../../themes/Colors';
import ItemText from '../../components/SearchPage/ItemText';
import Fonts from '../../themes/Fonts';
// import { NavigationUtils } from '../../navigation';
const SearchPage = (props) => {
  const DATA = [
    {
      id: '1',
      name: 'Kiếm hiệp',
    },
    {
      id: '1s',
      name: 'Kiếm hiệp',
    },
    {
      id: '1sa',
      name: 'Kiếm hiệp',
    },
    {
      id: '1sd',
      name: 'Kiếm hiệp',
    },
    {
      id: '1ssdad',
      name: 'Kiếm hiệp',
    },
    {
      id: '1sf',
      name: 'Kiếm hiệp',
    },
    {
      id: 'dd1',
      name: 'Kiếm hiệp',
    },
    {
      id: '1dsd',
      name: 'Kiếm hiệp',
    },
  ];
  const renderItem = ({ item }) => <ItemText name={item.name} />;
  const [result, setResult] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          // NavigationUtils.pop();
        }}
      >
        <Icon name="ic-delete" size={15} color={Colors.blackIcon} />
      </TouchableOpacity>
      <View style={styles.containerSearch}>
        <TextInput
          style={styles.txtSearch}
          placeholder="Hãy nhập tên sách mà bạn muốn tìm!"
          placeholderTextColor={Colors.blackIcon}
          onChangeText={(text) => setResult(text)}
          value={result}
        />
        <TouchableOpacity>
          <Icon name="ic-search" size={15} color={Colors.blackIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.txtWords}>Các từ khoá thông dụng</Text>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 22,
    marginTop: 25,
  },
  containerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    marginBottom: 3.5,
  },
  txtSearch: {
    marginRight: 21,
    fontSize: 15,
    fontWeight: '300',
  },
  txtWords: {
    color: Colors.greyAuthor,
    marginBottom: 11,
    fontFamily: Fonts.type.primary,
    fontSize: 12,
    fontWeight: '300',
  },
});
