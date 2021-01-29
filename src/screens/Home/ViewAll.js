import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import HomeBookItem from '../../components/HomePage/HomeBookItem';
import { NavigationUtils } from '../../navigation';
import { useDispatch, useSelector } from 'react-redux';
const ViewAll = (props) => {
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
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <TouchableOpacity
        style={styles.containerBtnBack}
        onPress={() => {
          NavigationUtils.pop();
        }}
      >
        <Icon name="ic-back" size={13} color={Colors.blackIcon} />
      </TouchableOpacity>
      <Text style={styles.txtTitle}>Đọc nhiều</Text>
      <View style={styles.gridContainerItems}>
        {data.map((item) => {
          return <HomeBookItem item={item} style={styles.cardItem} />;
        })}
      </View>
    </ScrollView>
  );
};

export default ViewAll;

const styles = StyleSheet.create({
  cardItem: {
    width: '45%',
    marginRight: 10,
    marginBottom: 15,
  },
  gridContainerItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  container: {
    marginHorizontal: 15,
    marginTop: 8,
  },
  containerBtnBack: {
    marginBottom: 12,
  },
  txtTitle: {
    fontSize: 16,
    fontFamily: Fonts.type.primary,
    color: Colors.blackIcon,
    marginBottom: 8,
  },
});
