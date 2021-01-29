import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import getBookDetailActions, { getBookDetailTypes } from './actions';
import { getBookDetails } from '../../api/books';
import { NavigationUtils } from '../../navigation';

//Get book details
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

export function* getBookDetailsSaga({ id }) {
  try {
    const response = yield call(getBookDetails, id);
    const newResponse = {
      data: response.data,
    };
    console.log('Hello' + response);
    yield put(getBookDetailActions.getBookDetailsSuccess(newResponse));
    yield call(waitFor, (state) => state.bookDetails.getBookDetailsResponse != null);
    NavigationUtils.push({
      screen: 'Detail',
      passProps: { fromLogin: true },
      isTopBarEnable: false,
    });
  } catch (error) {
    console.log('Error: ' + error);
    yield put(getBookDetailActions.getBookDetailsFailure(error));
  }
}

const getBookDetailSaga = () => {
  return [takeLatest(getBookDetailTypes.GET_BOOK_DETAILS, getBookDetailsSaga)];
};
export default getBookDetailSaga();
