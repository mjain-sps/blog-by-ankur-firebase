import { subHeaderAddTypes } from "../Action-Types/subheader.types";
const initialState = {
  loading: false,
  subHeader: null,
  error: null,
};

export const SubHeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case subHeaderAddTypes.SUBHEADER_ADD_LOADING:
      return {
        ...state,
        loading: true,
      };

    case subHeaderAddTypes.SUBHEADER_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        subHeader: action.payload,
        error: null,
      };

    case subHeaderAddTypes.SUBHEADER_ADD_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
