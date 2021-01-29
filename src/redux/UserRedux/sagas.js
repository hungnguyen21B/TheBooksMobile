import { put, call, takeLatest, select } from 'redux-saga/effects';
import ProfileActions, { ProfileTypes } from './actions';
import { getProfile } from '../../api/users';
import http from '../../api/http';

export function* userProfileSaga({ id }) {
  try {
    const response = yield call(getProfile, id);
    const newResponse = {
      data: response.data,
    };
    console.log(newResponse.data);
    yield put(ProfileActions.userProfileSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(ProfileActions.userProfileFailure(error));
  }
}
const profileSaga = () => [takeLatest(ProfileTypes.USER_PROFILE, userProfileSaga)];

export default profileSaga();
