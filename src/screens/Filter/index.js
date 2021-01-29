/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import ItemFilter from '../../components/FilterPage/ItemFilter';
import ItemFilter2 from '../../components/FilterPage/ItemFilter2';
import Type from '../../components/HomePage/Type';
import { Navigation } from 'react-native-navigation';
import Category from '../../components/FilterPage/Category';
import ic_launcher from '../../../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png';
import { useSelector } from 'react-redux';

const Filter = (props) => {
  const [iconActive, setIconActive] = useState(false);
  const books = useSelector((state) => state.home.dataBook.data);
  const data = [];
  console.log(data, 'hoang');
  for (let i = 0; i < Object.keys(books).length; i++) {
    data.push({
      id: books[i].id,
      image: books[i].medias[0],
      name: books[i].title,
      author: books[i].authors[0].name,
      rating: books[i].overallStarRating,
      numberBuyer: books[i].totalReview,
    });
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.filter}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Category',
                options: {
                  topBar: {
                    title: {
                      text: 'The loai',
                      alignment: 'center',
                    },
                  },
                },
              },
            })
          }
        >
          <Text style={styles.text}>Thể loại</Text>
          <Icon size={20} name="filter" color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.text}>Sắp xếp</Text>
          <Icon size={20} name="select" color="grey" />
        </TouchableOpacity>
        {iconActive === false ? (
          <TouchableOpacity style={styles.btn3} onPress={() => setIconActive(true)}>
            <Icon size={30} name="ic-filter-change" color="grey" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btn3} onPress={() => setIconActive(false)}>
            <Icon size={30} name="ic-filter-change-2" color="grey" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.content}>
        {data.map((item) => {
          return iconActive === false ? (
            <ItemFilter item={item} key={item.id} />
          ) : (
            <ItemFilter2 item={item} key={item.id} />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Filter;
Navigation.registerComponent('Category', () => Category);
const styles = StyleSheet.create({
  container: { flex: 1 },
  filter: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    borderColor: 'grey',
  },
  text: {
    fontSize: 15,
    paddingRight: 70,
    alignItems: 'center',

    marginLeft: 15,
  },
  btn: {
    width: '40%',
    height: 50,
    borderColor: 'grey',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn2: {
    width: '45%',
    height: 50,
    borderColor: 'grey',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn3: {
    width: '15%',
    height: 50,
    borderColor: 'grey',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    marginRight:16,
    paddingHorizontal: 25,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
