import React, { useState } from "react";
import { defaultImage } from "../../constants/global";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50">
      <div className="flex items-center  py-[5px] pr-2 pl-4 bg-white shadow-[10px_10px_20px_0px_rgba(218,_213,_213,_0.15)] rounded-[100px]">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="p-2 w-full pr-4"
          />
        </div>
        <button className="w-[72px] rounded-full bg-primary text-white h-10 flex justify-center items-center flex-shrink-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      {showSearch && (
        <div className="absolute w-full lg:w-[843px] rounded-[20px] pb-3 overflow-hidden  bg-white left-0 top-full translate-y-5 z-50 ">
          <div className="flex justify-between items-center p-[10px] mb-[5px]   bg-graySoft ">
            <h4 className="text-sm text-text1 font-medium underline pl-4">
              See all 10,124 fundraisier
            </h4>

            <button className=" flex justify-center items-center w-[72px] h-[50px] rounded-[12px] bg-[#F9E3E3]  ">
              <span className="text-error ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="flex flex-col justify-center py-[15px] px-[25px]">
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>
            <SearchItem></SearchItem>

            <div>
              <h2 className="mb-4 font-semibold text-text1 text-sm">
                Realated Search
              </h2>
              <div className=" flex flex-col  text-sm  text-text2 gap-y-[10px]">
                <p>
                  <strong>education</strong> fund
                </p>
                <p>schoralship fund</p>
                <p>
                  <strong>education</strong> and schools fund
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SearchItem = () => (
  <div className="flex items-center gap-x-5 mb-6">
    <img
      src={defaultImage}
      className="w-[50px] h-[50px] rounded-lg object-cover"
      alt="img"
    />

    <div>
      <h3 className="text-text1 text-sm">
        <strong>Education</strong> fund for Durgham Family
      </h3>
      <p className="text-text3 font-normal text-sm">By Durgham Family</p>
    </div>
  </div>
);
export default DashboardSearch;
