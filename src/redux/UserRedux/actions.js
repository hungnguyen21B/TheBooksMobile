import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const ProfileTypes = makeConstantCreator(
  'USER_PROFILE',
  'USER_PROFILE_SUCCESS',
  'USER_PROFILE_FAILURE',
);
//LOGIN
const userProfile = (id) => makeActionCreator(ProfileTypes.USER_PROFILE, { id });
const userProfileSuccess = (response) =>
  makeActionCreator(ProfileTypes.USER_PROFILE_SUCCESS, { response });
const userProfileFailure = (error) =>
  makeActionCreator(ProfileTypes.USER_PROFILE_FAILURE, { error });

export default {
  userProfile,
  userProfileSuccess,
  userProfileFailure,
};
