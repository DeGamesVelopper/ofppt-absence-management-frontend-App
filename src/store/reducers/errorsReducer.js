import { FETCHING_ERROR } from "../actions/TYPES";

const initalState = {
  fetching_error: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCHING_ERROR:
      return {
        ...state,
        fetching_error: true,
      };

    default:
      return state;
  }
};

export default reducer;
