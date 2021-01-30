import { all } from 'redux-saga/effects';
import appSagas from './AppRedux/sagas';
import loginSagas from './LoginRedux/sagas';
import signUpSagas from './SignUpRedux/sagas';
import homeSagas from './HomeRedux/sagas';
import getBookDetailSaga from './DetailRedux/sagas';
import profileSaga from './UserRedux/sagas';
import getReviewSaga from './ReviewRedux/sagas';
import cartSaga from './CartRedux/sagas';
export default function* root() {
  yield all([
    ...appSagas,
    ...loginSagas,
    ...signUpSagas,
    ...homeSagas,
    ...getBookDetailSaga,
    ...profileSaga,
    ...getReviewSaga,
    ...cartSaga,
  ]);
}
