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
    default:
      return state;
  }
};
