import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HomeHeader from '../../components/HomePage/HomeHeader';
import Type from '../../components/HomePage/Type';

const HomePage = () => {
  const types = [
    {
      id: '1ad',
      name: 'Đọc nhiều',
    },
    {
      id: '2dasd',
      name: 'Sách mới',
    },
    {
      id: 'das3',
      name: 'Sách mượn nhiều',
    },
    {
      id: 'sad4',
      name: 'Sách được yêu thích',
    },
  ];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HomeHeader />
      {types.map((type) => {
        return <Type title={type.name} key={type.id} />;
      })}
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 30,
  },
});
