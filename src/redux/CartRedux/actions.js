import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const getCartTypes = makeConstantCreator('GET_CART', 'GET_CART_SUCCESS', 'GET_CART_FAILURE');

//Get cart
const getCart = () => makeActionCreator(getCartTypes.GET_CART);
const getCartSuccess = (response) => makeActionCreator(getCartTypes.GET_CART_SUCCESS, { response });
const getCartFailure = (error) => makeActionCreator(getCartTypes.GET_CART_FAILURE, { error });

export default {
  getCart,
  getCartSuccess,
  getCartFailure,
};
