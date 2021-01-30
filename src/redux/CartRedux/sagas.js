import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import getCartActions, { getCartTypes } from './actions';
import { getCart } from '../../api/cart';

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

export function* getCartSaga() {
  try {
    const response = yield call(getCart);
    const newResponse = {
      data: response.data,
    };
    yield put(getCartActions.getCartSuccess(newResponse));
    yield call(waitFor, (state) => state.cart.getCartResponse != null);
  } catch (error) {
    console.log('Error: ' + error);
    yield put(getCartActions.getCartFailure(error));
  }
}

const cartSaga = () => {
  return [takeLatest(getCartTypes.GET_CART, getCartSaga)];
};
export default cartSaga();
