import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { HomeTypes } from './actions';

export const INITIAL_STATE = Immutable({
  dataBook: [],
  errorHome: '',
});

export const getBookHomeSuccess = (state, { response }) =>
  state.merge({
    dataBook: response,
    errorHome: false,
  });

export const getBookHomeFailure = (state, { error }) => state.merge({ errorHome: error });

export const userLogout = (state) => state.merge({ token: null, loadingLogin: false });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [HomeTypes.GET_BOOK_HOME_FAILURE]: getBookHomeSuccess,
  [HomeTypes.GET_BOOK_HOME_SUCCESS]: getBookHomeFailure,
});

export default reducer;
