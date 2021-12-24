import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import orderReducer from "./reducers/orderReducer";
const initialState = {};

const middleware = [thunk];
const reducers = combineReducers({
  user: userReducer,
  product: productReducer,
  order: orderReducer,
});
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
