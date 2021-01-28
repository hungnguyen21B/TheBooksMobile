/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import IntroItem from '../../components/IntroItem';
import Swiper from 'react-native-swiper';
import Images from '../../themes/Images';

const Introduction = () => {
  const INTRO = [
    {
      id: 1,
      imgSource: Images.imgIntro1,
      title: 'Tìm sách yêu thích',
      detail: 'Rất nhiều cuốn sách hay và chương trình thú vị được tích hợp trên hệ thống.',
      startBtn: false,
    },
    {
      id: 2,
      imgSource: Images.imgIntro2,
      title: 'Lưu vào giỏ và đặt sách',
      detail: 'Sách sẽ được giữ trong 2 giờ đồng hồ\n Hãy chắc chắn là bạn đến nhận kịp giờ.',
      startBtn: false,
    },
    {
      id: 3,
      imgSource: Images.imgIntro3,
      title: 'Tận hưởng cuốn sách',
      detail: 'Chọn một nơi yêu thích và ttận hưởng cuốn sách mà yêu thích thôi nào.',
      startBtn: true,
    },
  ];
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      dot={<View style={styles.dotStyle} />}
      activeDot={<View style={styles.dotActitveStyle} />}
    >
      {INTRO.map((item) => {
        return <IntroItem item={item} key={item.id} />;
      })}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotStyle: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 4,
    marginBottom: 225,
  },
  dotActitveStyle: {
    width: 8,
    height: 8,
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 4,
    marginBottom: 225,
    backgroundColor: '#1d9dd8',
  },
});

export default Introduction;
