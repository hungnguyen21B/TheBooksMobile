import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { cartTypes } from './actions';

export const INITIAL_STATE = Immutable({
  // Get cart
  loadingGetCart: false,
  errorGetCart: null,
  getCartResponse: null,
  // Add to cart
  loadingAddToCart: false,
  errorAddToCart: null,
  addToCartResponse: null,
});

// Get cart
export const getCart = (state, { response }) =>
  state.merge({ loadingGetCart: true, errorGetCart: null });

export const getCartSuccess = (state, { response }) =>
  state.merge({
    loadingGetCart: false,
    getCartResponse: response.data,
  });

export const getCartFailure = (state, { error }) =>
  state.merge({
    loadingGetCart: false,
    errorGetCart: error,
  });

// Add to cart
export const addToCart = (state, { response }) =>
  state.merge({ loadingAddToCart: true, errorAddToCart: null });

export const addToCartSuccess = (state, { response }) =>
  state.merge({
    loadingAddToCart: false,
    addToCartResponse: response.data,
  });

export const addToCartFailure = (state, { error }) =>
  state.merge({
    loadingAddToCart: false,
    errorAddToCart: error,
  });
//Reducer
const reducer = makeReducerCreator(INITIAL_STATE, {
  // Get cart
  [cartTypes.GET_CART]: getCart,
  [cartTypes.GET_CART_SUCCESS]: getCartSuccess,
  [cartTypes.GET_CART_FAILURE]: getCartFailure,

  // Add to cart
  [cartTypes.ADD_TO_CART]: addToCart,
  [cartTypes.ADD_TO_CART_SUCCESS]: addToCartSuccess,
  [cartTypes.ADD_TO_CART_FAILURE]: addToCartFailure,
});

export default reducer;
