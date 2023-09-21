import { takeLatest } from "redux-saga/effects";
import {
  CampFind,
  CampUpdate,
  campAddNew,
  campDelete,
  getdataCamp,
  getdataCampWithParam,
} from "./camp-slice";
import handleCampAddNew, {
  handleDeleteCamp,
  handleFindCamp,
  handleGetCamp,
  handleGetCampWithParam,
  handleUpdateCamp,
} from "./camp-handlers";

export default function* campSaga() {
  yield takeLatest(campAddNew.type, handleCampAddNew);
  yield takeLatest(getdataCamp.type, handleGetCamp);
  yield takeLatest(getdataCampWithParam.type, handleGetCampWithParam);
  yield takeLatest(campDelete.type, handleDeleteCamp);
  yield takeLatest(CampUpdate.type, handleUpdateCamp);
  yield takeLatest(CampFind.type, handleFindCamp);
}
