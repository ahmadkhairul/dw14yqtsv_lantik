import {
  GET_ORDER_BY_ID,
  GET_ORDERS_BY_USER,
  GET_ORDERS,
  GET_ORDERS_SORT,
  DELETE_ORDER,
  UPDATE_ORDER,
  UPDATE_ORDER_PROOF,
  SAVE_ORDER
} from "../config/constants";

const initialState = {
  data: [],
  dataByUser: [],
  dataById: [],
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ORDER_BY_ID}_PENDING`:
    case `${GET_ORDERS_BY_USER}_PENDING`:
    case `${GET_ORDERS}_PENDING`:
    case `${DELETE_ORDER}_PENDING`:
    case `${UPDATE_ORDER}_PENDING`:
    case `${UPDATE_ORDER_PROOF}_PENDING`:
    case `${SAVE_ORDER}_PENDING`:
    case `${GET_ORDERS_SORT}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_ORDERS}_FULFILLED`:
    case `${GET_ORDERS_SORT}_FULFILLED`:
    case `${DELETE_ORDER}_FULFILLED`:
    case `${UPDATE_ORDER}_FULFILLED`:
    case `${SAVE_ORDER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_ORDER_BY_ID}_REJECTED`:
    case `${GET_ORDERS_BY_USER}_REJECTED`:
    case `${GET_ORDERS}_REJECTED`:
    case `${GET_ORDERS_SORT}_REJECTED`:
    case `${DELETE_ORDER}_REJECTED`:
    case `${UPDATE_ORDER}_REJECTED`:
    case `${UPDATE_ORDER_PROOF}_REJECTED`:
    case `${SAVE_ORDER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${GET_ORDER_BY_ID}_FULFILLED`:
      return {
        ...state,
        dataById: action.payload,
        loading: false
      };
    case `${GET_ORDERS_BY_USER}_FULFILLED`:
      return {
        ...state,
        dataByUser: action.payload,
        loading: false
      };
    case `${UPDATE_ORDER_PROOF}_FULFILLED`:
      return {
        ...state,
        dataById: [],
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
