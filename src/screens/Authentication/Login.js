/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import TextInputItem from '../../components/TextInputItem';
import PasswordItem from '../../components/PasswordItem';
import { useDispatch, useSelector } from 'react-redux';
import LoginTypes from '../../redux/LoginRedux/actions';
import { NavigationUtils } from '../../navigation';
const Login = () => {
  const [] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let dataLogin = {
    grant_type: 'password',
    username: email,
    password: password,
  };
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.login.loadingLogin);
  const isError = useSelector((state) => state.login.errorLogin);
  const onLogin = () => {
    dispatch(LoginTypes.userLogin(dataLogin));
  };
  const onSignUpHandel = () => {
    NavigationUtils.push({ screen: 'SignUp', isTopBarEnable: false });
  };
  const onClose = () => {
    NavigationUtils.pop();
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <Icon name="ic-delete" size={24} style={{ marginTop: 4 }} onPress={onClose} />
        <Text style={styles.title}> Đăng nhập </Text>
      </View>
      <TextInputItem title="Email" ChangeText={(val) => setEmail(val)} />
      <PasswordItem
        title="Mật khẩu"
        imageClose="ic-hide-password"
        imageOpen="ic-show-password"
        onChangePass={(val) => setPassword(val)}
      />
      {isLoading && <ActivityIndicator size="large" color="#00ff00" />}
      {isError && <Text style={{ color: 'red' }}> {isError} </Text>}
      <View style={styles.layoutButton}>
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.textSignUp}> Đăng nhập </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={onSignUpHandel}>
          <Text> Đăng ký </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.policy}> Quên mật khẩu </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  layoutTitle: {
    flex: 0.7,
    flexDirection: 'row',
  },
  closeImage: {
    height: 20,
    width: 20,
    marginTop: 7,
  },
  title: {
    color: '#505050',
    fontSize: 28,
    marginLeft: '32%',
  },
  layoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  signupButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: '#41B8C1',
    borderWidth: 2,
  },
  textSignUp: {
    color: 'white',
  },
  policy: {
    marginTop: 20,
    paddingHorizontal: 10,
    color: 'gray',
    textAlign: 'center',
    fontSize: 18,
  },
});
export default Login;
