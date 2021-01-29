import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import { RNNDrawer } from 'react-native-navigation-drawer-extension';
import { NavigationUtils } from '../../navigation';
const HomeHeader = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tboIcon}
        onPress={() => {
          console.log('on');
          RNNDrawer.showDrawer({
            component: {
              name: 'Drawer',
              passProps: {
                animationOpenTime: 100,
                animationCloseTime: 100,
                direction: 'left',
                dismissWhenTouchOutside: true,
                fadeOpacity: 0.6,
                drawerScreenWidth: '75%' || 445, // Use relative to screen '%' or absolute
                drawerScreenHeight: '100%' || 700,
                style: {
                  // Styles the drawer container, supports any react-native style
                  backgroundColor: 'white',
                },
                parentComponentId: 'HomePage', // Custom prop, will be available in your custom drawer component props
              },
            },
          });

          RNNDrawer.dismissDrawer();
        }}
      >
        <Icon size={Fonts.size.s16} name="ic-menu" color={Colors.blackIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tboIcon}
        onPress={() => NavigationUtils.push({ screen: 'Filter', isTopBarEnable: true })}
      >
        <Icon size={Fonts.size.s16} name="ic-search" color={Colors.blackIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
    marginTop: 30,
  },
  searchContainer: {
    marginRight: 3,
  },
  tboIcon: {
    width: 16,
    height: 16,
  },
});
