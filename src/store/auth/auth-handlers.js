import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister,
} from "./auth-requests";
import { toast } from "react-toastify";
import { logOut, saveToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { authUpdateUser } from "./auth-slice";

export default function* handleAuthRegister(action) {
  const { payload, type } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    // console.log(
    //   "🚀 ~ file: auth-handlers.js:8 ~ function*handleAuthRegister ~ response:",
    //   response
    // );
    if (response.status === 201) {
      toast.success("Create new Account successfully!");
    }
  } catch (error) {
    console.log(error);
  }
  // console.log(
  //   "🚀 ~ file: auth-handlers.js:2 ~ function*handleAuthRegister ~ action:",
  //   payload
  // );
  yield 1;
}

function* handleAuthLogin(action) {
  const { payload, type } = action;

  try {
    const response = yield call(requestAuthLogin, payload);
    console.log(
      "🚀 ~ file: auth-handlers.js:31 ~ function*handleAuthLogin ~ response:",
      response
    );
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, { payload: response.data.accessToken }); //gọi hàm handleAuthFetchMe bên dưới để lấy token
    }
    if (response.status === 200) {
      toast.success("Login successfully!");
    }
  } catch (error) {
    // console.log(error);
    toast.error("Email or Password incorrect");
  }
}

function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    // console.log(
    //   "🚀 ~ file: auth-handlers.js:58 ~ function*handleAuthFetchMe ~ response:",
    //   response
    // );
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
    // response.data -> userInfo
  } catch (error) {}
}

function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(requestAuthRefreshToken, payload);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, {
        payload: response.data.accessToken,
      });
    } else {
      yield handleAuthLogout();
    }
  } catch (error) {}
}

function* handleAuthLogout() {
  yield put(authUpdateUser({}));
  logOut();
}

export {
  handleAuthLogin,
  handleAuthFetchMe,
  handleAuthRefreshToken,
  handleAuthLogout,
};
