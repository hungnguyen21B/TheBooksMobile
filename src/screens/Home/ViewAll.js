import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import { DATA } from '../../assets/DATA';
import HomeBookItem from '../../components/HomePage/HomeBookItem';
// import { NavigationUtils } from '../../navigation';
const ViewAll = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <TouchableOpacity
        style={styles.containerBtnBack}
        onPress={() => {
          // NavigationUtils.pop();

        }}
      >
        <Icon name="ic-back" size={13} color={Colors.blackIcon} />
      </TouchableOpacity>
      <Text style={styles.txtTitle}>Đọc nhiều</Text>
      <View style={styles.gridContainerItems}>

        {DATA.map((item) => {
          return <HomeBookItem item={item} style={styles.cardItem} />;
        })}
      </View>
    </ScrollView>
  );
};

export default ViewAll;

const styles = StyleSheet.create({
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
    marginHorizontal: 15,
    marginTop: 8,
  },
  containerBtnBack: {
    marginBottom: 12,
  },
  txtTitle: {
    fontSize: 16,
    fontFamily: Fonts.type.primary,
    color: Colors.blackIcon,
    marginBottom: 8,
  },
});
