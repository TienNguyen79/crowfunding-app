const { createSlice } = require("@reduxjs/toolkit");

const campSlice = createSlice({
  name: "camp",
  initialState: {
    dataCamp: [],
  },
  reducers: {
    campAddNew: (state, action) => ({
      ...state,
      dataCamp: action.payload,
    }),
    getdataCamp: () => {},
    getdataCampWithParam: () => {},
    updateDataCamp: (state, action) => ({
      ...state,
      dataCamp: action.payload.dataCamp,
    }),
    campDelete: (state, action) => ({
      ...state,
      dataCamp: action.payload,
    }),
    CampUpdate: (state, action) => ({
      ...state,
      dataCamp: action.payload,
    }),
    CampFind: () => {},
  },
});

export const {
  campAddNew,
  getdataCamp,
  updateDataCamp,
  campDelete,
  getdataCampWithParam,
  CampUpdate,
  CampFind,
} = campSlice.actions;

export default campSlice.reducer;
