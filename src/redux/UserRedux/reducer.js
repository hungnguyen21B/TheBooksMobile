import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { ProfileTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingProfile: null,
  profileResponse: null,
  errorProfile: null,
});
//LOGIN
export const userProfile = (state, { response }) =>
  state.merge({
    loadingProfile: true,
    errorProfile: null,
    profileResponse: null,
  });

export const userProfileSuccess = (state, { response }) =>
  state.merge({
    loadingProfile: false,
    profileResponse: response.data,
    errorProfile: null,
  });
export const userProfileFailure = (state, { error }) =>
  state.merge({ loadingProfile: false, errorProfile: error });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [ProfileTypes.USER_PROFILE]: userProfile,
  [ProfileTypes.USER_PROFILE_SUCCESS]: userProfileSuccess,
  [ProfileTypes.USER_PROFILE_FAILURE]: userProfileFailure,
});

export default reducer;
