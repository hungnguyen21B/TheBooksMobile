import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import ProfileActions, { ProfileTypes } from './actions';
import { getProfile } from '../../api/users';
import http from '../../api/http';

function* waitFor(selector) {
  if (yield select(selector)) {
    return;
  } // (1)

  while (true) {
    yield take('*'); // (1a)
    if (yield select(selector)) {
      return;
    } // (1b)
  }
}
export function* userProfileSaga({ id }) {
  try {
    console.log(id);
    const response = yield call(getProfile, id);
    const newResponse = {
      data: response.data,
    };
    console.log('data user' + JSON.stringify(newResponse.data));
  
    yield put(ProfileActions.userProfileSuccess(newResponse.data));
    yield call(waitFor, (state) => state.profile.profileResponse != null);

  } catch (error) {
    console.log(error);
    yield put(ProfileActions.userProfileFailure(error));
  }
}
const profileSaga = () => [takeLatest(ProfileTypes.USER_PROFILE, userProfileSaga)];

export default profileSaga();
