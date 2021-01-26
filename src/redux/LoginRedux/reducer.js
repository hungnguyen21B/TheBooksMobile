import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { LoginTypes } from '../LoginRedux/actions';

export const INITIAL_STATE = Immutable({
  loadingLogin: false,
  loginResponse: null,
  token: null,
  loginType: '',
  errorLogin: null,
  status: null,
});
//LOGIN
export const userLogin = (state, { response }) =>
  state.merge({
    loadingLogin: true,
    errorLogin: null,
    token: null,
  });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    loginResponse: response.data,
    token: response.token,
    loginType: 'email',
    errorLogin: null,
  });
export const userLoginFailure = (state, { error }) =>
  state.merge({ loadingLogin: false, errorLogin: error });
export const userLogout = (state) => state.merge({ token: null });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,
  [LoginTypes.USER_LOGOUT]: userLogout,
});

export default reducer;
