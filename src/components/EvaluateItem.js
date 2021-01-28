/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Images from '../themes/Images';
import IconStar from '../components/HomePage/IconStar';
import Colors from '../themes/Colors';

const EvaluateItem = (props) => {
  var iconRatings = [];

  for (let i = 0; i < props.star; i++) {
    iconRatings.push(<IconStar color={Colors.primary} />);
  }
  for (let i = 0; i < 5 - props.star; i++) {
    iconRatings.push(<IconStar color={Colors.greyAuthor} />);
  }
  return (
    <View style={styles.evaluateContainer}>
      <View style={styles.commentContent}>
        <View style={styles.rowContent}>
          <Image source={Images.avatar} style={styles.imgUser} />
          <View style={styles.nameContent}>
            <Text>{props.author}</Text>
            <View style={styles.star}>{iconRatings}</View>
          </View>
        </View>
        <View style={styles.rowContent}>
          <View>
            {props.isFirst ? (
              <View style={styles.rowContent}>
                <Icon name="ic-edit-comment" size={13} color="black" style={styles.iconEdit} />
                <Icon name="ic-trash" size={13} color="black" />
              </View>
            ) : (
              <View>
                <Text style={styles.textDate}>hôm qua, 19:20</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.textPara}>{props.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgUser: {
    width: 30,
    height: 30,
    borderRadius: 13,
  },
  commentContent: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  nameContent: {
    marginLeft: 10,
  },
  evaluateContainer: {
    paddingHorizontal: 18,
  },
  star: {
    flexDirection: 'row',
    marginRight: 10,
  },
  textPara: {
    marginTop: 6,
    fontFamily: 'SVN-ProximaNova',
    fontSize: 12,
    fontWeight: '300',
    color: '#7f7f7f',
  },
  rowContent: {
    flexDirection: 'row',
  },
  iconEdit: {
    marginRight: 10,
  },
  textDate: {
    fontSize: 10,
    fontFamily: 'SVN-ProximaNova',
    fontWeight: '300',
    color: Colors.greyAuthor,
  },
});
export default EvaluateItem;
