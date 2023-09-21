import React from "react";
import DashboardSearch from "./DashboardSearch";
import Button from "../../components/button/Button";
import DashboardFund from "./DashboardFund";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardTopbar = () => {
  const { user } = useSelector((state) => state.auth);
  // console.log(
  //   "🚀 ~ file: DashboardTopbar.js:10 ~ DashboardTopbar ~ user:",
  //   user
  // );

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10 ">
        <Link to="/">
          <img
            src="/logo2.png"
            className="w-full max-w-[52px] object-cover"
            alt="logo"
          />
        </Link>
        <div className="w-full max-w-[458px]">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center flex-1 justify-end gap-x-10">
        <DashboardFund></DashboardFund>

        <div>
          <Button type="button" kind="secondary" href="/start-campaign">
            Start a campaign
          </Button>
        </div>

        {!user && !user?.id ? (
          <div className="flex justify-center items-center gap-x-2">
            <Link to="/register">
              <span className="hover:opacity-75">Sign Up</span>
            </Link>
            <div className="h-[18px] w-[1px] bg-slate-400"></div>
            <Link to="/login">
              <span className="hover:opacity-75">Sign In</span>
            </Link>
          </div>
        ) : (
          <div className="w-[52px] h-[52px]" title={user.name}>
            <img
              src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
              className="w-full h-full  object-cover rounded-full cursor-pointer"
              alt="logo"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardTopbar;
