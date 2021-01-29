import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { CategoriesTypes } from './actions';

export const INITIAL_STATE = Immutable({
  dataCategory: null,
  errorCategories: false,
});
export const getCategoriesSuccess = (state, { response }) =>
  state.merge({
    dataCategory: response.data,
    errorCategories: false,
  });
export const getCategoriesFailure = (state, { error }) => state.merge({ errorCategories: error });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [CategoriesTypes.GET_CATEGORIES_SUCCESS]: getCategoriesSuccess,
  [CategoriesTypes.GET_CATEGORIES_FAILURE]: getCategoriesFailure,
});

export default reducer;
