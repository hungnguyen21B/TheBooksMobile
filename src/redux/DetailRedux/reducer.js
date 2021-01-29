import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { getBookDetailTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingGetBookDetails: false,
  errorGetBookDetails: null,
  getBookDetailsResponse: null,
});

export const getBookDetails = (state, { response }) =>
  state.merge({ loadingGetBookDetails: true, errorGetBookDetails: null });

export const getBookDetailsSuccess = (state, { response }) =>
  state.merge({
    loadingGetBookDetails: false,
    getBookDetailsResponse: response.data,
  });

export const getBookDetailsFailure = (state, { error }) =>
  state.merge({
    loadingGetBookDetails: false,
    errorGetBookDetails: error,
  });

//Reducer
const reducer = makeReducerCreator(INITIAL_STATE, {
  [getBookDetailTypes.GET_BOOK_DETAILS]: getBookDetails,
  [getBookDetailTypes.GET_BOOK_DETAILS_SUCCESS]: getBookDetailsSuccess,
  [getBookDetailTypes.GET_BOOK_DETAILS_FAILURE]: getBookDetailsFailure,
});

export default reducer;
