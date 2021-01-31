import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { cartTypes } from './actions';

export const INITIAL_STATE = Immutable({
  // Get all items in shopping cart
  loadingGetCart: false,
  errorGetCart: null,
  getCartResponse: null,
  // Add to shopping cart
  loadingAddToCart: false,
  errorAddToCart: null,
  addToCartResponse: null,
  // Delete item in shopping cart
  loadingDeleteItemInCart: false,
  errorDeleteItemInCart: null,
  deleteItemInCartResponse: null,
});

// Get all items in shopping cart
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

// Add to shopping cart
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

// Delete item in shopping cart
export const deleteItemInCart = (state, { response }) =>
  state.merge({ loadingDeleteItemInCart: true, errorDeleteItemInCart: null });

export const deleteItemInCartSuccess = (state, { response }) =>
  state.merge({
    loadingDeleteItemInCart: false,
    deleteItemInCartResponse: response.data,
  });

export const deleteItemInCartFailure = (state, { error }) =>
  state.merge({
    loadingDeleteItemInCart: false,
    errorDeleteItemInCart: error,
  });

//Reducer
const reducer = makeReducerCreator(INITIAL_STATE, {
  // Get all items in shopping cart
  [cartTypes.GET_CART]: getCart,
  [cartTypes.GET_CART_SUCCESS]: getCartSuccess,
  [cartTypes.GET_CART_FAILURE]: getCartFailure,

  // Add to shopping cart
  [cartTypes.ADD_TO_CART]: addToCart,
  [cartTypes.ADD_TO_CART_SUCCESS]: addToCartSuccess,
  [cartTypes.ADD_TO_CART_FAILURE]: addToCartFailure,

  // Delete item in shopping cart
  [cartTypes.DELETE_ITEM_IN_CART]: deleteItemInCart,
  [cartTypes.DELETE_ITEM_IN_CART_SUCCESS]: deleteItemInCartSuccess,
  [cartTypes.DELETE_ITEM_IN_CART_FAILURE]: deleteItemInCartFailure,
});

export default reducer;
