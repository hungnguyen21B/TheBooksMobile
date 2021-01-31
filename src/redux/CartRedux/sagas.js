/* eslint-disable react/react-in-jsx-scope */
import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import cartActions, { cartTypes } from './actions';
import { getCart, addToCart } from '../../api/cart';
import { NavigationUtils } from '../../navigation';

//Get cart
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
    yield put(cartActions.getCartSuccess(newResponse));
    yield call(waitFor, (state) => state.cart.getCartResponse != null);
    NavigationUtils.push({
      screen: 'Cart',
      passProps: { fromLogin: true },
      isTopBarEnable: false,
    });
  } catch (error) {
    console.log('Error: ' + error);
    yield put(cartActions.getCartFailure(error));
  }
}

// Add to cart
export function* addToCartSaga({ data }) {
  try {
    const response = yield call(addToCart, data);
    const newResponse = {
      data: response.data,
    };
    yield put(cartActions.addToCartSuccess(newResponse));
    yield call(waitFor, (state) => state.cart.addToCartResponse != null);
  } catch (error) {
    console.log('Error: ' + error);
    yield put(cartActions.addToCartFailure(error));
  }
}

const cartSaga = () => [
  takeLatest(cartTypes.GET_CART, getCartSaga),
  takeLatest(cartTypes.ADD_TO_CART, addToCartSaga),
];

export default cartSaga();
