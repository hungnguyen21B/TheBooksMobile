import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const getBookDetailTypes = makeConstantCreator(
  'GET_BOOK_DETAILS',
  'GET_BOOK_DETAILS_SUCCESS',
  'GET_BOOK_DETAILS_FAILURE',
);

//Get books details
const getBookDetails = (id) => makeActionCreator(getBookDetailTypes.GET_BOOK_DETAILS, { id });
const getBookDetailsSuccess = (response) =>
  makeActionCreator(getBookDetailTypes.GET_BOOK_DETAILS_SUCCESS, { response });
const getBookDetailsFailure = (error) =>
  makeActionCreator(getBookDetailTypes.GET_BOOK_DETAILS_FAILURE, { error });

export default {
  getBookDetails,
  getBookDetailsSuccess,
  getBookDetailsFailure,
};
