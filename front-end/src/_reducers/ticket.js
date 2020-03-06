import { GET_TICKET, SEARCH_TICKET } from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_TICKET}_PENDING`:
    case `${SEARCH_TICKET}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TICKET}_FULFILLED`:
    case `${SEARCH_TICKET}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_TICKET}_REJECTED`:
    case `${SEARCH_TICKET}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
