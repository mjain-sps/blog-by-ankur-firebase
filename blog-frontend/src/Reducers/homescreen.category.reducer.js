//importing action types
import {
  categoryAddForHomeScreenTypes,
  categoryViewForHomeScreenTypes,
} from "../Action-Types/category.homescreen.types";

//Reducer to add category checked to be displayed on home screen
const initialStateAddCategory = {
  loadingAddCategory: false,
  addedCategories: null,
  errorAddCategory: null,
};
export const categoryAddHomeScreenReducer = (
  state = initialStateAddCategory,
  action
) => {
  switch (action.type) {
    case categoryAddForHomeScreenTypes.HOMESCREEN_CATEGORY_ADD_LOADING:
      return {
        ...state,
        loadingAddCategory: true,
      };
    case categoryAddForHomeScreenTypes.HOMESCREEN_CATEGORY_ADD_SUCCESS:
      return {
        ...state,
        loadingAddCategory: false,
        addedCategories: action.payload,
        errorAddCategory: null,
      };
    case categoryAddForHomeScreenTypes.HOMESCREEN_CATEGORY_ADD_ERROR:
      return {
        ...state,
        loadingAddCategory: false,
        errorAddCategory: action.payload,
      };
    default:
      return state;
  }
};

//Reducer to fetch the cheched categories which have been marked to be displayed on Home Page
const initialStateViewHomeScreen = {
  loadingView: false,
  checkedCategoriesForHomeScreen: [],
  errorViewCategories: null,
};
export const categoryViewHomeScreenReducer = (
  state = initialStateViewHomeScreen,
  action
) => {
  switch (action.type) {
    case categoryViewForHomeScreenTypes.HOMESCREEN_CATEGORY_VIEW_LOADING:
      return {
        ...state,
        loadingView: true,
      };
    case categoryViewForHomeScreenTypes.HOMESCREEN_CATEGORY_VIEW_SUCCESS:
      return {
        ...state,
        loadingView: false,
        checkedCategoriesForHomeScreen: action.payload,
        errorViewCategories: null,
      };
    case categoryViewForHomeScreenTypes.HOMESCREEN_CATEGORY_VIEW_ERROR:
      return {
        ...state,
        loadingView: false,
        errorViewCategories: action.payload,
      };
    default:
      return state;
  }
};
