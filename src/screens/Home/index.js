import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import HomeHeader from '../../components/HomePage/HomeHeader';
import Type from '../../components/HomePage/Type';

const HomePage = () => {
  const types = [
    {
      id: '1',
      name: 'Đọc nhiều',
    },
    {
      id: '2',
      name: 'Sách mới',
    },
    {
      id: '3',
      name: 'Sách mượn nhiều',
    },
    {
      id: '4',
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
