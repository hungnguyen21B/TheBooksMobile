import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Colors from '../../themes/Colors';
const ItemTextInDrawer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtItem}>{props.item.text}</Text>
      {props.item.check && (
        <TouchableOpacity style={styles.iconMore}>
          <Icon size={12} color={Colors.blackIcon} name="ic-more-filter" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ItemTextInDrawer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 0.8,
    height: 36,
    margin: 5,
  },
  txtItem: {
    marginLeft: 22,
  },
  iconMore: {
    marginRight: 18,
  },
});
