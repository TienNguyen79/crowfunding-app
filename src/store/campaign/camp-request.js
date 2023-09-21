import axios from "../../api/axios";
import { apiURL } from "../../config/config";

export const requestCampAddNew = (data) => {
  console.log(
    "🚀 ~ file: auth-requests.js:4 ~ requestAuthRegister ~ data:",
    data
  );
  return axios.post(`${apiURL}/campaigns`, {
    ...data,
  });
};

export const requestGetCamp = () => {
  return axios.get(`${apiURL}/campaigns`);
};

export const requestDeleteCamp = (id) => {
  return axios.delete(`${apiURL}/campaigns/${id}`);
};

export const requestgetCampWithParam = (id) => {
  return axios.get(`${apiURL}/campaigns/${id}`);
};

export const requestUpdateCamp = (data) => {
  return axios.put(`${apiURL}/campaigns/${data.id}`, {
    ...data,
  });
};

export const requestCampFind = (data) => {
  return axios.get(`${apiURL}/campaigns?${data.field}=${data.result}`, {
    ...data,
  });
};
