import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { getCartTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingGetCart: false,
  errorGetCart: null,
  getCartResponse: null,
});

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

//Reducer
const reducer = makeReducerCreator(INITIAL_STATE, {
  [getCartTypes.GET_CART]: getCart,
  [getCartTypes.GET_CART_SUCCESS]: getCartSuccess,
  [getCartTypes.GET_CART_FAILURE]: getCartFailure,
});

export default reducer;
