import {
  subHeaderAddTypes,
  subHeaderViewTypes,
} from "../Action-Types/subheader.types";
const initialStateAdded = {
  loadingAdded: false,
  subHeaderAdded: null,
  errorAdded: null,
};

const initialState = {
  loading: false,
  subHeader: [],
  error: null,
};
export const SubHeaderAddReducer = (state = initialStateAdded, action) => {
  switch (action.type) {
    case subHeaderAddTypes.SUBHEADER_ADD_LOADING:
      return {
        ...state,
        loadingAdded: true,
      };

    case subHeaderAddTypes.SUBHEADER_ADD_SUCCESS:
      return {
        ...state,
        loadingAdded: false,
        subHeaderAdded: action.payload,
        errorAdded: null,
      };

    case subHeaderAddTypes.SUBHEADER_ADD_ERROR:
      return {
        ...state,
        loadingAdded: false,
        errorAdded: action.payload,
      };
    default:
      return state;
  }
};

//Reducer to get the subheaders from DB

export const subHeaderCheckedReducer = (state = initialState, action) => {
  switch (action.type) {
    case subHeaderViewTypes.SUBHEADER_VIEW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case subHeaderViewTypes.SUBHEADER_VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        subHeader: action.payload,
        error: null,
      };
    case subHeaderViewTypes.SUBHEADER_VIEW_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
