import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/auth-saga";
import campSaga from "./campaign/camp-saga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(campSaga)]);
}
