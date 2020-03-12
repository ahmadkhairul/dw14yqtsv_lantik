import { SEARCH_TICKET, SAVE_TICKET } from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${SEARCH_TICKET}_PENDING`:
    case `${SAVE_TICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${SEARCH_TICKET}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${SEARCH_TICKET}_REJECTED`:
    case `${SAVE_TICKET}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${SAVE_TICKET}_FULFILLED`:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
