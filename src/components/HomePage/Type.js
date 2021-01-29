import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HomeBookItem from './HomeBookItem';
import TypeHeader from './TypeHeader';
import { DATA } from '../../assets/DATA';
import { useDispatch, useSelector } from 'react-redux';

const Type = ({ title }) => {
  // item.authors[0].name
  // item.medias[0]
  // item.title
  // item.totalReview
  // item.overallStarRating
  const listBooks = useSelector((state) => state.home.dataBook);

  console.log('listBooks: ');
  console.log(listBooks);

  const data = [];
  for (let i = 0; i < Object.keys(listBooks).length; i++) {
    data.push({
      id: listBooks[i].id,
      image: listBooks[i].medias[0],
      name: listBooks[i].title,
      author: listBooks[i].authors[0].name,
      rating: listBooks[i].overallStarRating,
      numberBuyer: listBooks[i].totalReview,
    });
  }
  return (
    <View style={styles.container}>
      <TypeHeader title={title} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.scvContainer}
      >
        {data.map((item) => {
          return <HomeBookItem item={item} key={item.id} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Type;

const styles = StyleSheet.create({
  container: {
    marginBottom: 22,
  },
  scvContainer: {
    marginTop: 8,
  },
});
