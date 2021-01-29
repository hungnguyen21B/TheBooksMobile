import { put, call, takeLatest } from 'redux-saga/effects';
import getBookDetailActions, { getBookDetailTypes } from './actions';
import { getBookDetails } from '../../api/books';

import { identity } from 'lodash';

//Get book details
export function* getBookDetailsSaga({ data }) {
  console.log(identity);
  try {
    const response = yield call(getBookDetails, data);
    const newResponse = {
      data: response.data,
    };
    yield put(getBookDetailActions.getBookDetailsSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(getBookDetailActions.getBookDetailsFailure);
  }
}

const getBookDetailSaga = () => {
  return [takeLatest(getBookDetailTypes.GET_BOOK_DETAILS, getBookDetailsSaga)];
};
export default getBookDetailSaga;
