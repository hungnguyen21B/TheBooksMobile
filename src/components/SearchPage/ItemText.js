import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';

const ItemText = ({ name }) => (
  <View style={styles.container}>
    <Text style={styles.txtName}>{name}</Text>
  </View>
);
export default ItemText;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  txtName: {
    fontSize: 12,
    fontWeight: '300',
    color: Colors.blackIcon,
    fontFamily: Fonts.type.primary,
  },
});
