import React from 'react';
import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from '../screens/App/HomeScreen';
import Login from '../screens/Authentication/Login';
import SignUp from '../screens/Authentication/SignUp';
import HomePage from '../screens/Home/index';
import SearchPage from '../screens/Home/SearchPage';
import Detail from '../screens/Intro/Detail';
import Introduction from '../screens/Intro/index';
import ViewAll from '../screens/Home/ViewAll';
import Profile from '../screens/Authentication/Profile';
const SCREENS_WITH_REDUX = {
  Login,
  Home,
  SignUp,
  ViewAll,
  Introduction,
  Detail,
  HomePage,
  SearchPage,
  Profile,
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
