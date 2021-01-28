import { put, call, takeLatest } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './actions';
import { startup } from '../AppRedux/actions';
import { userLoginApi } from '../../api/auth';

export function* userLoginSaga({ data }) {
  try {
    const response = yield call(userLoginApi, data);
    console.log(response);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    yield put(LoginActions.userLoginSuccess(newResponse));
    yield put(startup());
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userLoginFailure(error.data.message));
  }
}
export function* userLogoutSaga() {
  yield put(startup());
}
const loginSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLoginSaga),
  takeLatest(LoginTypes.USER_LOGOUT, userLogoutSaga),
];

export default loginSagas();
