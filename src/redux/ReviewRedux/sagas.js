import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import getReviewActions, { getReviewTypes } from './actions';
import { getReviews } from '../../api/books';
import { NavigationUtils } from '../../navigation';

//Get reviews
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

export function* getReviewsSaga() {
  try {
    const response = yield call(getReviews);
    const newResponse = {
      data: response.data,
    };
    yield put(getReviewActions.getReviewsSuccess(newResponse));
    yield call(waitFor, (state) => state.reviews.getReviewsResponse != null);
    NavigationUtils.push({
      screen: 'Detail',
      passProps: { fromLogin: true },
      isTopBarEnable: false,
    });
  } catch (error) {
    console.log('Error: ' + error);
    yield put(getReviewActions.getReviewsFailure(error));
  }
}

const getReviewSaga = () => {
  return [takeLatest(getReviewTypes.GET_REVIEWS, getReviewsSaga)];
};
export default getReviewSaga();
