/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import Images from '../../themes/Images';
import Icon from 'react-native-vector-icons/thebook-appicon';
import InfoItem from '../../components/Library/InfoItem';

const Library = () => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  return (
    <ScrollView>
      <Image source={Images.background} style={styles.imgBackground} />
      <View style={styles.container}>
        <View style={styles.justifyText}>
          <Text style={styles.title}>The Library</Text>
          <Text style={styles.link}>www.thebook.com</Text>
          <Text style={styles.slogan}>
            Think back over your life. Think about the people that had a positive influence on you.
            If your past… Think back over your life.{' '}
          </Text>
          <View style={styles.justifyIcon}>
            <Icon name="ic-instagram" size={20} color="white" style={styles.icon} />
            <Icon name="ic-facebook" size={20} color="white" style={styles.icon} />
            <Icon name="ic-youtube" size={25} color="white" style={styles.icon} />
          </View>

          <View style={styles.imgContain}>
            <View>
              <Text style={styles.timeText}>OPEN</Text>
              <Text style={[{}, styles.timeText, { fontWeight: 'bold', fontSize: 15 }]}>8am</Text>
            </View>
            <View>
              <Image source={Images.library} style={styles.imgLibrary} />
            </View>
            <View>
              <Text style={styles.timeText}>CLOSE</Text>
              <Text style={[{}, styles.timeText, { fontWeight: 'bold', fontSize: 16 }]}>6pm</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.infoContain}>
        <InfoItem title="Phone" info="(+84) 900 000 000" iconName="ic-solid-phone" />
        <InfoItem
          title="Location"
          info="1000 Nguyen Van Linh, Da Nang"
          iconName="ic-solid-direction"
        />
      </View>
      <View style={styles.libraryContain}>
        <Image source={Images.library1} style={{ width: SCREEN_WIDTH / 3, height: 150 }} />
        <Image source={Images.library2} style={{ width: SCREEN_WIDTH / 3, height: 150 }} />
        <Image source={Images.library3} style={{ width: SCREEN_WIDTH / 3, height: 150 }} />
      </View>
      <View style={styles.libraryContain}>
        <Image source={Images.library4} style={{ width: SCREEN_WIDTH / 3, height: 150 }} />
        <Image source={Images.library5} style={{ width: SCREEN_WIDTH / 3, height: 150 }} />
        <Image source={Images.library6} style={{ width: SCREEN_WIDTH / 3, height: 150 }} />
      </View>
    </ScrollView>
  );
};

export default Library;

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: 250,
  },
  libraryContain: {
    flexDirection: 'row',
    marginTop: 20,
  },
  container: {
    marginTop: -230,
  },
  title: {
    fontFamily: 'OpenSans',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    fontFamily: 'OpenSans',
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  justifyText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slogan: {
    marginTop: 10,
    justifyContent: 'center',
    fontFamily: 'OpenSans',
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    width: 270,
    lineHeight: 17,
  },
  justifyIcon: {
    flexDirection: 'row',
    marginTop: 20,
  },
  icon: {
    marginLeft: 20,
  },
  imgContain: {
    flexDirection: 'row',
    marginTop: 20,
  },
  timeText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'OpenSans',
    fontWeight: '300',
    fontSize: 10,
  },
  imgLibrary: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: 'white',
    marginLeft: 20,
    marginRight: 20,
  },
  infoContain: {
    paddingHorizontal: 25,
  },
});
