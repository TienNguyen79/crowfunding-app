import { takeLatest } from "redux-saga/effects";
import {
  authLogin,
  authLogout,
  authRefreshToken,
  authRegister,
} from "./auth-slice";
import handleAuthRegister, {
  handleAuthLogin,
  handleAuthLogout,
  handleAuthRefreshToken,
} from "./auth-handlers";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRefreshToken.type, handleAuthRefreshToken);
  yield takeLatest(authLogout.type, handleAuthLogout);
}
