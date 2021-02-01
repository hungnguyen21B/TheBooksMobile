import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { ProfileTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingProfile: null,
  profileResponse: null,
  errorProfile: null,
});
//LOGIN

export const userProfileSuccess = (state, { response }) =>
  state.merge({
    loadingProfile: false,
    profileResponse: response,
    errorProfile: null,
  });
export const userProfileFailure = (state, { error }) =>
  state.merge({ loadingProfile: false, errorProfile: error });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [ProfileTypes.USER_PROFILE_SUCCESS]: userProfileSuccess,
  [ProfileTypes.USER_PROFILE_FAILURE]: userProfileFailure,
});

export default reducer;
