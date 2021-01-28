import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { markSkipIntro } from '../redux/AppRedux/actions';
import { NavigationUtils } from '../navigation';
const IntroItem = (props) => {
  const dispatch = useDispatch();
  const skipIntroAndShowLogin = () => {
    console.log('ab');
    dispatch(markSkipIntro(true));
    NavigationUtils.startLoginContent();
  };
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={props.item.imgSource} style={styles.imgIntro} />
          <Text style={styles.titleText}>{props.item.title}</Text>
          <Text style={styles.detailText}>{props.item.detail}</Text>
        </View>
      </View>
      {props.item.startBtn ? (
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnStart} onPress={skipIntroAndShowLogin}>
            <Text style={styles.textBtnStart}>Bắt đầu</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 35,
    marginTop: 125,
  },
  imgIntro: {
    height: 200,
    width: 250,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
    marginTop: 30,
    color: '#262626',
    textAlign: 'center',
  },
  detailText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#7f7f7f',
    marginTop: 12,
    width: 288,
  },
  textBtnStart: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'SVN-ProximaNova',
    color: 'white',
  },
  btnStart: {
    width: 106,
    height: 30,
    backgroundColor: '#1d9dd8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    borderRadius: 2,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroItem;
