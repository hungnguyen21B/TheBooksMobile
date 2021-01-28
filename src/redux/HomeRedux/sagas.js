import { takeLatest, put, call } from 'redux-saga/effects';
import { HomeTypes, getBookHomeFailure, getBookHomeSuccess } from './actions';
import { getBooksApi } from '../../api/books';
export function* getBookHomeSaga() {
  try {
    const response = yield call(getBooksApi);
    const newResponse = {
      data: response.data,
    };
    console.log(newResponse.data);
    // item.authors[0].name
    // item.medias[0]
    // item.title
    // item.totalReview
    // item.overallStarRating
    //item.price
    //item.quantity
    yield put(getBookHomeSuccess(newResponse.data));
  } catch (error) {
    console.log(error);
    yield put(getBookHomeFailure(error));
  }
}

const homeSagas = () => {
  return [takeLatest(HomeTypes.GET_BOOK_HOME, getBookHomeSaga)];
};

export default homeSagas();
