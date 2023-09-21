import axios from "../../api/axios";

export const requestAuthRegister = (data) => {
  console.log(
    "🚀 ~ file: auth-requests.js:4 ~ requestAuthRegister ~ data:",
    data
  );
  return axios.post("/auth/register", {
    ...data,
  });
};

export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", {
    ...data,
  });
};

export const requestAuthFetchMe = (token) => {
  console.log(
    "🚀 ~ file: auth-requests.js:20 ~ requestAuthFetchMe ~ token:",
    token
  );
  if (!token) return;
  return axios.get("/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const requestAuthRefreshToken = (token) => {
  if (!token) return;
  return axios.post("/token", {
    "Content-Type": "Application/json",
    refreshToken: token,
  });
};
