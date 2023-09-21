import { call, put } from "redux-saga/effects";
import {
  requestCampAddNew,
  requestCampFind,
  requestDeleteCamp,
  requestGetCamp,
  requestUpdateCamp,
  requestgetCampWithParam,
} from "./camp-request";
import { updateDataCamp } from "./camp-slice";

export default function* handleCampAddNew(action) {
  // console.log(
  //   "🚀 ~ file: camp-handlers.js:5 ~ function*handleCampAddNew ~ action:",
  //   action
  // );
  const { payload, type } = action;
  try {
    const response = yield call(requestCampAddNew, payload);
  } catch (error) {
    console.log(error);
  }
  yield 1;
}

function* handleGetCamp() {
  // console.log(
  //   "🚀 ~ file: camp-handlers.js:5 ~ function*handleCampAddNew ~ action:",
  //   action
  // );
  try {
    const response = yield call(requestGetCamp);

    yield put(
      updateDataCamp({
        dataCamp: response.data,
      })
    );
  } catch (error) {
    console.log(error);
  }
  yield 1;
}

function* handleDeleteCamp(action) {
  // console.log(
  //   "🚀 ~ file: camp-handlers.js:5 ~ function*handleCampAddNew ~ action:",
  //   action
  // );
  const { payload, type } = action;

  try {
    const response = yield call(requestDeleteCamp, payload);
  } catch (error) {
    console.log(error);
  }
  yield 1;
}

function* handleGetCampWithParam(action) {
  // console.log(
  //   "🚀 ~ file: camp-handlers.js:5 ~ function*handleCampAddNew ~ action:",
  //   action
  // );
  const { payload, type } = action;

  try {
    const response = yield call(requestgetCampWithParam, payload);
    yield put(
      updateDataCamp({
        dataCamp: response.data,
      })
    );
  } catch (error) {
    console.log(error);
  }
  yield 1;
}

function* handleUpdateCamp(action) {
  // console.log(
  //   "🚀 ~ file: camp-handlers.js:5 ~ function*handleCampAddNew ~ action:",
  //   action
  // );
  const { payload, type } = action;
  console.log(
    "🚀 ~ file: camp-handlers.js:85 ~ function*handleUpdateCamp ~ payload:",
    payload
  );

  try {
    const response = yield call(requestUpdateCamp, payload);
  } catch (error) {
    console.log(error);
  }
  yield 1;
}

function* handleFindCamp(action) {
  // console.log(
  //   "🚀 ~ file: camp-handlers.js:5 ~ function*handleCampAddNew ~ action:",
  //   action
  // );
  const { payload, type } = action;
  // console.log(
  //   "🚀 ~ file: camp-handlers.js:85 ~ function*handleUpdateCamp ~ payload:",
  //   payload
  // );

  try {
    const response = yield call(requestCampFind, payload);
    console.log(
      "🚀 ~ file: camp-handlers.js:112 ~ function*handleFindCamp ~ response:",
      response
    );
  } catch (error) {
    console.log(error);
  }
  yield 1;
}

export {
  handleGetCamp,
  handleDeleteCamp,
  handleGetCampWithParam,
  handleUpdateCamp,
  handleFindCamp,
};
