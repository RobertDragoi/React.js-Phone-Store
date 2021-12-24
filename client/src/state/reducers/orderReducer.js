import { ORDER_SENT, USER_ORDERS_LOADED } from "../../types";
const initialState = {
  order: null,
  userOrders: [],
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_SENT:
      return {
        ...state,
        order: action.payload,
      };
    case USER_ORDERS_LOADED:
      return {
        ...state,
        userOrders: action.payload,
      };
    default:
      return state;
  }
};
export default orderReducer;
