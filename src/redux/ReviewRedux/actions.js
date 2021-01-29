import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const getReviewTypes = makeConstantCreator(
  'GET_REVIEWS',
  'GET_REVIEWS_SUCCESS',
  'GET_REVIEWS_FAILURE',
);

//Get books details
const getReviews = () => makeActionCreator(getReviewTypes.GET_REVIEWS);
const getReviewsSuccess = (response) =>
  makeActionCreator(getReviewTypes.GET_REVIEWS_SUCCESS, { response });
const getReviewsFailure = (error) =>
  makeActionCreator(getReviewTypes.GET_REVIEWS_FAILURE, { error });

export default {
  getReviews,
  getReviewsSuccess,
  getReviewsFailure,
};
