import React from "react";

const DashboardFund = () => {
  return (
    <div className="flex items-center gap-x-1 cursor-pointer ">
      <span className=" text-text2 font-semibold">Fundrising for</span>
      <span className="w-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-full h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default DashboardFund;
