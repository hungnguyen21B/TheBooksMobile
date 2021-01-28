/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NotificationItem from '../../components/Notifications/NotificationItem';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'Mượn sách',
      type: 'Mượn sách',
      time: '09:20',
      content:
        'Bạn đã quá hạn mượn sách 3 ngày, vui lòng gia hạn thêm hoặc mang sách đến trả tại cửa hàng gần nhất.',
    },
    {
      id: 2,
      title: 'Khuyến mãi',
      type: 'Khuyến mãi',
      time: 'hôm qua, 19:20',
      content:
        'Chương trình khuyến mãi 2+1, tặng 2 lượt gia hạn khi đăng ký hoặc nâng cấp gói thành viên bất kỳ. Chương trình kéo dài đến 12/1/2018, mọi chi tiếtvui lòng liên hệ tổng đài hoặc cửa hàng gần nhất.',
    },
    {
      id: 3,
      title: 'Thông báo',
      type: 'Thông báo',
      time: '4 ngày trước, 09:20',
      content:
        'The Book Library hiện đã có cửa hàng mới tại 183 Nguyễn Tri Phương, nhiều chương trình khuyến mãi hấp dẫn trong suốt 3 ngày đầu khai trương. Tham gia nhanh nào các bạn.',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông báo</Text>
      <View style={styles.contentContainer}>
        {notifications.map((item, key) => {
          return <NotificationItem item={item} key={key} />;
        })}
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  contentContainer: {
    marginTop: 30,
  },
  title: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 20,
    color: '#4a4a4a',
    textAlign: 'center',
  },
});
