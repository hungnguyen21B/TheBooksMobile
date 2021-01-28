/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';

const SettingProfileItem = (props) => {
  return (
    <TouchableOpacity style={styles.settingButton}>
      <Icon name={props.name} size={30} color="#5f5f5f" />
      <View style={styles.viewText}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingProfileItem;

const styles = StyleSheet.create({
  viewText: { alignItems: 'center', alignSelf: 'center', paddingHorizontal: 20 },
  title: { fontFamily: 'SVN-ProximaNova', fontSize: 20 },
  settingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderColor: '#e9e9e9',
    borderWidth: 0.5,
    paddingVertical: 10,
  },
});
