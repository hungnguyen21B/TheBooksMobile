/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
const PasswordItem = (props) => {
  const [isShowPassword, setShowPass] = useState(true);
  return (
    <View style={styles.layoutInput}>
      <Text style={styles.titleInput}>
        {props.title}
        <Text style={{ color: 'red' }}> *</Text>
      </Text>
      <TextInput
        secureTextEntry={isShowPassword}
        style={styles.textInput}
        onChangeText={(value) => props.onChangePass(value)}
      />
      <TouchableOpacity
        style={styles.showPassword}
        onPress={() => {
          setShowPass(!isShowPassword);
        }}
      >
        <Icon name={isShowPassword ? props.imageClose : props.imageOpen} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  layoutInput: {
    flex: 1,
    marginBottom: 5,
    marginTop: 10,
  },
  titleInput: {
    color: 'gray',
    fontSize: 15,
    marginTop: 15,
  },
  textInput: {
    height: 45,
    borderColor: '#dddddd',
    borderWidth: 1,
    paddingBottom: 20,
  },
  showPassword: {
    position: 'absolute',
    right: 10,
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default PasswordItem;
