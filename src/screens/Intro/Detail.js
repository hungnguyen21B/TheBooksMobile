/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Images from '../../themes/Images';
import Icon from 'react-native-vector-icons/thebook-appicon';
import HomeBookItem from '../../components/HomePage/HomeBookItem';
import EvaluateItem from '../../components/EvaluateItem';
import Colors from '../../themes/Colors';
import IconStar from '../../components/HomePage/IconStar';
import AwesomeAlert from 'react-native-awesome-alerts';

const Detail = () => {
  const listBooks = [
    {
      id: '1',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 3,
      numberBuyer: 12323,
    },
    {
      id: '2',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 4,
      numberBuyer: 12323,
    },
    {
      id: '3',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 4,
      numberBuyer: 12323,
    },
    {
      id: '4',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 4,
      numberBuyer: 12323,
    },
    {
      id: '5',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 3,
      numberBuyer: 12323,
    },
    {
      id: '6',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 2,
      numberBuyer: 12323,
    },
    {
      id: '7',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 4,
      numberBuyer: 12323,
    },
    {
      id: '8',
      image:
        'https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg',
      name: 'Để con được ốm',
      author: 'Nguyễn Trí Đoàn',
      rating: 4,
      numberBuyer: 12323,
    },
  ];
  var iconRatings = [];

  for (let i = 0; i < 4; i++) {
    iconRatings.push(<IconStar color={Colors.primary} />);
  }
  for (let i = 0; i < 5 - 4; i++) {
    iconRatings.push(<IconStar color={Colors.greyAuthor} />);
  }

  const [showAlert, setShowAlert] = useState(false);
  return (
    <ScrollView>
      <View style={styles.iconHeader}>
        <Icon name="ic-back" size={13} />
        <Icon name="ic-like-pre" size={13} />
      </View>
      <View style={styles.imgContainer}>
        <Image source={Images.bookExample} style={styles.imgDetail} />
        <Text style={styles.textDetail}>Để con được ốm thêm vài lần</Text>
        <Text style={styles.textAuthor}>Nguyễn Trí Đoàn</Text>
        <View style={styles.startContainer}>
          <View style={styles.star}>{iconRatings}</View>
          <View style={styles.price}>
            <Icon name="ic-price" size={10} color={Colors.primary} />
            <Text style={styles.textPrice}>1.278</Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnCategory}>
            <Text style={styles.textCategory}>tình cảm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCategory}>
            <Text style={styles.textCategory}>đời sống</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCategory}>
            <Text style={styles.textCategory}>học đường</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paraDetail}>
          <Text style={styles.textPara}>
            Kimi no Na wa là tác phẩm điện ảnh mới của đạo diễn Makoto Shinkai (đạo diễn 5cm/s, The
            Garden of Words, Voices of a Distant Star). Mitsuha - cô nữ sinh sống tại một vùng quê
            Nhật Bản, chán ngán cuộc sống hiện tại và luôn mong… xem hết
          </Text>
        </View>
      </View>

      <View style={styles.listScroll}>
        <View style={styles.titleContent}>
          <Text style={styles.title}>Sách tương tự</Text>
          <Text style={styles.viewAll}>xem hết</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listContainer}>
          {listBooks.map((item, key) => {
            return <HomeBookItem item={item} key={key} />;
          })}
        </ScrollView>
      </View>

      <View style={styles.evaluateContent}>
        <Text style={styles.title}>Nhận xét</Text>
        <TouchableOpacity style={styles.writeEvaluateBtn}>
          <Text style={styles.titleEvaluate}>Viết nhận xét cho cuốn sách này</Text>
        </TouchableOpacity>
      </View>

      <EvaluateItem
        author="Kim Dung"
        star={4}
        isFirst={true}
        content="Sách hay, cần có thêm nhiều đầu sách như vậy hơn nữa để tuổi trẻ bớt bị tẩy não. Ghi hoài mà nó không đủ 3 dòng, mệt."
      />
      <EvaluateItem
        author="Kim Dung"
        star={3}
        isFirst={false}
        content="Sách hay, cần có thêm nhiều đầu sách như vậy hơn nữa để tuổi trẻ bớt bị tẩy não. Ghi hoài mà nó không đủ 3 dòng, mệt."
      />

      <View>
        <TouchableOpacity style={styles.viewAllEvaluate}>
          <Text style={styles.textViewAll}>Xem tất cả nhận xét</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.addToCartContainer}>
        <TouchableOpacity style={styles.addToCart} onPress={() => setShowAlert(true)}>
          <Text style={styles.textAddToCart}>Thêm vào giỏ</Text>
        </TouchableOpacity>
      </View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        message="Sách này hiện đã được mượn hết
Bạn có muốn nhận thông báo ngay khi có lại"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        showCancelButton={true}
        cancelText="Không, cám ơn"
        confirmText="Nhận thông báo"
        confirmButtonColor={Colors.primary}
        onConfirmPressed={() => setShowAlert(false)}
        onCancelPressed={() => setShowAlert(false)}
        messageStyle={{ textAlign: 'center' }}
        contentContainerStyle={styles.alertContainer}
        confirmButtonStyle={styles.confirmBtn}
        cancelButtonStyle={styles.cancelBtn}
        cancelButtonTextStyle={styles.textCancel}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgDetail: {
    width: 135,
    height: 197,
    borderRadius: 2,
  },
  textDetail: {
    marginTop: 8,
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
    color: '#262626',
    fontWeight: 'bold',
  },
  textAuthor: {
    color: Colors.greyAuthor,
    fontSize: 12,
    fontFamily: 'SVN-ProximaNova',
    fontWeight: '300',
  },
  startContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  star: {
    flexDirection: 'row',
    marginRight: 10,
  },
  price: {
    flexDirection: 'row',
  },
  textPrice: {
    marginLeft: 5,
    marginTop: -5,
  },
  btnCategory: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 17,
    borderWidth: 1,
    borderColor: '#cecece',
    marginRight: 8,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 9,
  },
  textCategory: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 10,
    fontWeight: '300',
  },
  paraDetail: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    flexDirection: 'row',
  },
  textPara: {
    textAlign: 'justify',
  },
  iconHeader: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    marginTop: 25,
  },
  listScroll: {
    paddingHorizontal: 18,
    marginTop: 15,
  },
  title: {
    fontSize: 16,
    color: '#262626',
    fontFamily: 'SVN-ProximaNova',
    fontWeight: 'bold',
  },
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listContainer: {
    marginTop: 8,
  },
  viewAll: {
    fontSize: 12,
    fontWeight: '300',
    color: Colors.secondary,
    fontFamily: 'SVN-ProximaNova',
  },
  evaluateContent: {
    paddingHorizontal: 18,
  },
  writeEvaluateBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 2,
    height: 30,
    marginTop: 12,
  },
  titleEvaluate: {
    color: Colors.secondary,
    fontFamily: 'SVN-ProximaNova',
    fontSize: 12,
    fontWeight: '300',
  },
  viewAllEvaluate: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textViewAll: {
    color: Colors.secondary,
    fontSize: 12,
    fontFamily: 'SVN-ProximaNova',
    marginTop: 12,
  },
  addToCart: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: Colors.primary,
    marginTop: 10,
    marginBottom: 20,
    height: 38,
  },
  textAddToCart: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'SVN-ProximaNova',
  },
  addToCartContainer: {
    paddingHorizontal: 18,
  },
  alertContainer: {
    width: '100%',
  },
  confirmBtn: {
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cancelBtn: {
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.secondary,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  textCancel: {
    color: 'black',
  },
});
export default Detail;
