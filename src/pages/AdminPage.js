import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CampFind,
  campDelete,
  getdataCamp,
} from "../store/campaign/camp-slice";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getdataCamp());
  }, [dispatch]);

  useEffect(() => {
    dispatch(CampFind({ field: "hot", result: true }));
  }, []);

  const { dataCamp } = useSelector((state) => state.camp);
  return (
    <div className="component-test">
      <div className="text-center mt-5">
        <div className="bg-[#B2B3BD] bg-opacity-5 inline-block py-4 px-14 rounded-xl mb-10">
          <h1 className="text-text2 text-[25px] font-bold ">
            ADMIN CAMPAIGN 🚀
          </h1>
        </div>
      </div>
      <table className="w-full border border-slate-100">
        <thead className="border border-slate-100">
          <tr className="">
            <th className="border border-r-2">id</th>
            <th className="border border-r-2">title</th>
            <th className="border border-r-2">Category</th>
            <th className="border border-r-2">User</th>
            <th className="border border-r-2">Action</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {dataCamp.length > 0 &&
            dataCamp.map((item, index) => (
              <tr key={item.id} className="w-full">
                <td className="pl-3 border border-r-2">{item.id}</td>
                <td className="pl-3 border border-r-2">{item?.title}</td>
                <td className="pl-3 border border-r-2">
                  {item?.category?.name}
                </td>
                <td className="pl-3 border border-r-2">{item?.user?.name}</td>
                <td className="pl-3 border border-r-2">
                  <div className="flex justify-center items-center gap-x-3">
                    <button
                      type="submit"
                      className="py-2 px-4 rounded-md bg-purple-500 text-white "
                    >
                      View
                    </button>
                    <button
                      type="submit"
                      className="py-2 px-4 rounded-md bg-purple-500 text-white "
                      onClick={() => {
                        navigate(`/manage/update-camp?id=${item.id}`);
                      }}
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="py-2 px-4 rounded-md bg-purple-500 text-white "
                      onClick={(e) => {
                        dispatch(campDelete(item.id));
                      }}
                    >
                      XÓa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
