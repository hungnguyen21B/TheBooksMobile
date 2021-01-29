import { takeLatest, put, call, select, take } from 'redux-saga/effects';
import { CategoriesTypes, getCategoriesFailure, getCategoriesSuccess } from './actions';
import { getCategoriesApi } from '../../api/categories';
import { NavigationUtils } from '../../navigation';

// function* waitFor(selector) {
//   if (yield select(selector)) {
//     return;
//   } // (1)

//   while (true) {
//     yield take('*'); // (1a)
//     if (yield select(selector)) {
//       return;
//     } // (1b)
//   }
// }

export function* getCategoriesSaga() {
  try {
    const response = yield call(getCategoriesApi);
    const newResponse = {
      data: response.data,
    };
    console.log(newResponse.data);
    yield put(getCategoriesSuccess(newResponse));
    // yield call(waitFor, (state) => state.category.dataCategories != null);
  } catch (error) {
    console.log(error);
    yield put(getCategoriesFailure(error));
  }
}

const categoriesSagas = () => {
  return [takeLatest(CategoriesTypes.GET_BOOK_HOME, getCategoriesSaga)];
};

export default categoriesSagas();
