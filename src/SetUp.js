// In index.js of a new project
import { Navigation } from 'react-native-navigation';
import HomeScreen from './screens/App/HomeScreen';
// Home screen declaration

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

// Settings screen declaration - this is the screen we'll be pushing into the stack

//register screen
Navigation.registerComponent('Home', () => HomeScreen);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: 'white',
  },
  topBar: {
    title: {
      color: 'black',
    },
    backButton: {
      color: 'black',
    },
    background: {
      color: 'white',
    },
  },
});

// eslint-disable-next-line no-undef
export default App = () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                id: 'HomeScreen',
                name: 'Home',
              },
            },
          ],
        },
      },
    });
  });
};
