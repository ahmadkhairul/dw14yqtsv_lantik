import {
  GET_USER,
  SHOW_USER,
  UPDATE_USER,
  DELETE_USER,
  LOGOUT_USER
} from "../config/constants";

const initialState = {
  data: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
    case `${SHOW_USER}_PENDING`:
    case `${UPDATE_USER}_PENDING`:
    case `${DELETE_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_USER}_FULFILLED`:
    case `${SHOW_USER}_FULFILLED`:
    case `${UPDATE_USER}_FULFILLED`:
    case `${DELETE_USER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_USER}_REJECTED`:
    case `${SHOW_USER}_REJECTED`:
    case `${UPDATE_USER}_REJECTED`:
    case `${DELETE_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case LOGOUT_USER:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
