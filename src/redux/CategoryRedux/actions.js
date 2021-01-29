import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const CategoriesTypes = makeConstantCreator(
  'GET_CATEGORIES',
  'GET_CATEGORIES_SUCCESS',
  'GET_CATEGORIES_FAILURE',
);

export const getCategories = () => makeActionCreator(CategoriesTypes.GET_CATEGORIES);
export const getCategoriesSuccess = (response) =>
  makeActionCreator(CategoriesTypes.GET_CATEGORIES_SUCCESS, { response });
export const getCategoriesFailure = (error) =>
  makeActionCreator(CategoriesTypes.GET_CATEGORIES_FAILURE, { error });
