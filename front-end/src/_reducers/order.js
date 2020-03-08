import {
  GET_ORDER,
  GET_ORDERS,
  DELETE_ORDER,
  UPDATE_ORDER
} from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ORDER}_PENDING`:
    case `${GET_ORDERS}_PENDING`:
    case `${DELETE_ORDER}_PENDING`:
    case `${UPDATE_ORDER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_ORDER}_FULFILLED`:
    case `${GET_ORDERS}_FULFILLED`:
    case `${DELETE_ORDER}_FULFILLED`:
    case `${UPDATE_ORDER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_ORDER}_REJECTED`:
    case `${GET_ORDERS}_REJECTED`:
    case `${DELETE_ORDER}_REJECTED`:
    case `${UPDATE_ORDER}_REJECTED`:
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
