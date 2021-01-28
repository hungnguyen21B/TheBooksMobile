import React from 'react';
import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Login from '../screens/Authentication/Login';
import Home from '../screens/App/HomeScreen';
import Introduction from '../screens/Intro';
import HomePage from '../screens/Home';
import Detail from '../screens/Intro/Detail';
import SearchPage from '../screens/Home/SearchPage';
import ViewAll from '../screens/Home/ViewAll';
import Cart from '../screens/Cart';

const SCREENS_WITH_REDUX = {
  Login,
  Home,
  Introduction,
  HomePage,
  Detail,
  SearchPage,
  ViewAll,
  Cart,
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
