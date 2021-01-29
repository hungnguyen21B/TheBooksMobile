import React from 'react';
import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Login from '../screens/Authentication/Login';
import Drawer from '../screens/App/Drawer';
import Introduction from '../screens/Intro';
import HomePage from '../screens/Home';
import Detail from '../screens/Intro/Detail';
import SearchPage from '../screens/Home/SearchPage';
import ViewAll from '../screens/Home/ViewAll';
import Cart from '../screens/Cart';
import SignUp from '../screens/Authentication/SignUp';
import Notice from '../screens/Notice';
import Bill from '../screens/Bill';
import Library from '../screens/Library';
import Profile from '../screens/Profile';

import SettingProfile from '../screens/Profile/SettingProfile';
const SCREENS_WITH_REDUX = {
  Login,
  Drawer,
  Introduction,
  HomePage,
  Detail,
  SearchPage,
  ViewAll,
  Cart,
  SignUp,
  Notice,
  Bill,
  Library,
  Profile,
  SettingProfile,
};
const SCREENS = {};

function registerScreens(store, persistor) {
  const PersistProvider = (props) => {
    const { children } = props;

    return (
      <Provider {...props}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  };

  Object.keys(SCREENS_WITH_REDUX).map((screenName) => {
    Navigation.registerComponentWithRedux(
      screenName,
      () => gestureHandlerRootHOC(SCREENS_WITH_REDUX[screenName]),
      PersistProvider,
      store,
    );
  });

  Object.keys(SCREENS).map((screenName) => {
    Navigation.registerComponent(screenName, () => SCREENS[screenName]);
  });
}

export default registerScreens;
