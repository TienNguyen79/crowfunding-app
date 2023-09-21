import React, { useEffect } from "react";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import Overlay from "../components/common/Overlay";
import ReactModal from "react-modal";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import CampPerk from "../modules/campaign/parts/CampPerk";

const LayoutOnlyDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="modal-content scroll-hidden w-full max-w-[521px] bg-white rounded-[20px] px-[40px] pb-[50px] relative outline-none max-h-[90vh] overflow-y-auto"
      >
        <button className="absolute right-3 top-2 py-[10px] pr-10 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g opacity="0.4" clipPath="url(#clip0_4924_6779)">
              <path
                d="M20 5.61143L18.3886 4L12 10.3886L5.61143 4L4 5.61143L10.3886 12L4 18.3886L5.61143 20L12 13.6114L18.3886 20L20 18.3886L13.6114 12L20 5.61143Z"
                fill="#171725"
              />
            </g>
            <defs>
              <clipPath id="clip0_4924_6779">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>

        <div>
          <h2 className="text-center text-[25px] text-text1 font-bold mt-10 mb-10">
            Back this project
          </h2>

          <h3 className="text-text2 font-medium text-sm mb-[10px]">
            Enter the contribute amount
          </h3>
          <input
            type="text"
            className="w-full px-5 py-3  text-sm font-medium border rounded-xl border-strock"
            name="pledge"
            placeholder="$10"
          />

          <p className="my-5 text-text3 text-sm">
            Contribution are not associatied with perks
          </p>

          <Button kind="primary" className="w-full max-w-[162px] mb-[60px]">
            Continue
          </Button>
        </div>

        <div className="flex flex-col gap-y-[40px]">
          <CampPerk showButton></CampPerk>
          <CampPerk showButton></CampPerk>
        </div>
      </ReactModal>
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutOnlyDashboard;
