import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';

const InfoItem = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleInfo}>{props.title}</Text>
      <View style={styles.rowContain}>
        <Text style={styles.textInfo}>{props.info}</Text>
        <Icon name={props.iconName} size={20} color="#4ec4d1" style={styles.textInfo} />
      </View>
    </View>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
  titleInfo: {
    color: '#4ec4d1',
    fontFamily: 'OpenSans',
    fontSize: 12,
  },
  textInfo: {
    marginBottom: 10,
  },
  mainContainer: {
    marginTop: 20,
  },
  rowContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 0.75,
  },
});
