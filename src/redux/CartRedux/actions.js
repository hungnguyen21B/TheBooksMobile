import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const cartTypes = makeConstantCreator(
  'GET_CART',
  'GET_CART_SUCCESS',
  'GET_CART_FAILURE',
  'ADD_TO_CART',
  'ADD_TO_CART_SUCCESS',
  'ADD_TO_CART_FAILURE',
);

//Get cart
const getCart = () => makeActionCreator(cartTypes.GET_CART);
const getCartSuccess = (response) => makeActionCreator(cartTypes.GET_CART_SUCCESS, { response });
const getCartFailure = (error) => makeActionCreator(cartTypes.GET_CART_FAILURE, { error });

//Add to cart
const addToCart = (data) => makeActionCreator(cartTypes.ADD_TO_CART, { data });
const addToCartSuccess = (response) =>
  makeActionCreator(cartTypes.ADD_TO_CART_SUCCESS, { response });
const addToCartFailure = (error) => makeActionCreator(cartTypes.ADD_TO_CART_FAILURE, { error });

export default {
  getCart,
  getCartSuccess,
  getCartFailure,
  addToCart,
  addToCartSuccess,
  addToCartFailure,
};
