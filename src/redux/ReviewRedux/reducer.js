import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { getReviewTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingGetReviews: false,
  errorGetReviews: null,
  getReviewsResponse: null,
});

export const getReviews = (state, { response }) =>
  state.merge({ loadingGetReviews: true, errorGetReviews: null });

export const getReviewsSuccess = (state, { response }) =>
  state.merge({
    loadingGetReviews: false,
    getReviewsResponse: response.data,
  });

export const getReviewsFailure = (state, { error }) =>
  state.merge({
    loadingGetReviews: false,
    errorGetReviews: error,
  });

//Reducer
const reducer = makeReducerCreator(INITIAL_STATE, {
  [getReviewTypes.GET_REVIEWS]: getReviews,
  [getReviewTypes.GET_REVIEWS_SUCCESS]: getReviewsSuccess,
  [getReviewTypes.GET_REVIEWS_FAILURE]: getReviewsFailure,
});

export default reducer;
