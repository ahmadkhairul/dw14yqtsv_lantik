import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_USER,
  AUTH_LOGOUT
} from "../config/constants";

const initialState = {
  data: [],
  isLogin: false,
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${AUTH_LOGIN}_PENDING`:
    case `${AUTH_REGISTER}_PENDING`:
    case `${AUTH_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${AUTH_LOGIN}_FULFILLED`:
    case `${AUTH_REGISTER}_FULFILLED`:
    case `${AUTH_USER}_FULFILLED`:
      return {
        ...state,
        isLogin: true,
        data: action.payload,
        loading: false
      };
    case `${AUTH_LOGIN}_REJECTED`:
    case `${AUTH_REGISTER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${AUTH_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: false
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isLogin: false,
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
