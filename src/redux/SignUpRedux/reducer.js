import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { SignUpTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingSignup: false,
  signUpResponse: null,
  token: null,
  loginType: '',
  errorSignUp: null,
  status: null,
});
//LOGIN
export const userSignUp = (state, { response }) =>
  state.merge({
    loadingSignUp: true,
    errorSignUp: null,
    token: null,
  });

export const userSignUpSuccess = (state, { response }) =>
  state.merge({
    loadingSignUp: false,
    signUpResponse: response.data,
    token: response.token,
    signUpType: 'email',
    errorSignUp: null,
  });
export const userSignUpFailure = (state, { error }) =>
  state.merge({ loadingSignUp: false, errorSignUp: error });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [SignUpTypes.USER_SIGNUP]: userSignUp,
  [SignUpTypes.USER_SIGNUP_SUCCESS]: userSignUpSuccess,
  [SignUpTypes.USER_SIGNUP_FAILURE]: userSignUpFailure,
});

export default reducer;
