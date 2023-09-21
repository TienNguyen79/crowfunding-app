import authReducer from "./auth/auth-slice";
import campReducer from "./campaign/camp-slice";
const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  auth: authReducer, //authReducer : là tên tự đặt
  camp: campReducer,
});
