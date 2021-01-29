import { put, call, takeLatest } from 'redux-saga/effects';
import getBookDetailActions, { getBookDetailTypes } from './actions';
import { getBookDetails } from '../../api/books';

//Get book details
export function* getBookDetailsSaga({ id }) {
  try {
    const response = yield call(getBookDetails, id);
    const newResponse = {
      data: response.data,
    };
    console.log('Hello' + response);
    yield put(getBookDetailActions.getBookDetailsSuccess(newResponse));
  } catch (error) {
    console.log('Error: ' + error);
    yield put(getBookDetailActions.getBookDetailsFailure);
  }
}

const getBookDetailSaga = () => {
  return [takeLatest(getBookDetailTypes.GET_BOOK_DETAILS, getBookDetailsSaga)];
};
export default getBookDetailSaga();
