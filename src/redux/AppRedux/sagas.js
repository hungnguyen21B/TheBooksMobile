import { takeLatest, select, put } from 'redux-saga/effects';
import { AppTypes } from './actions';
import http from '../../api/http';
import { NavigationUtils } from '../../navigation';
import { getBookHome } from '../HomeRedux/actions';
export function* startupSaga() {
  try {
    // call api
    // set data to reducer
    const { token } = yield select((state) => state.login);
    const { isSkip } = yield select((state) => state.app);
    http.setAuthorizationHeader(token);
    //
    if (token) {
      yield put(getBookHome());
      NavigationUtils.startMainContent();
    } else {
      if (isSkip) {
        NavigationUtils.startIntroContent();
      } else {
        NavigationUtils.startLoginContent();
      }
    }
  } catch (error) {
    console.log('error startup: ' + error);
    NavigationUtils.startLoginContent();
  }
}

const appSagas = () => {
  return [takeLatest(AppTypes.STARTUP, startupSaga)];
};

export default appSagas();
