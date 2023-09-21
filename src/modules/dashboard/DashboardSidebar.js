import React, { useEffect } from "react";
import IconDashboard from "../../components/icons/IconDashboard";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import IconCampaign from "../../components/icons/IconCampaign";
import IconPayment from "../../components/icons/IconPayment";
import IconWithdraw from "../../components/icons/IconWithdraw";
import IconProfile from "../../components/icons/IconProfile";
import IconLogout from "../../components/icons/IconLogout";
import IconDarkmode from "../../components/icons/IconDarkmode";
import { logOut } from "../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../store/auth/auth-slice";
import IconCategory from "../../components/icons/IconCategory";
import IconAdmin from "../../components/icons/IconAdmin";

const sidebarLinks = [
  { icon: <IconAdmin></IconAdmin>, title: "Admin", url: "/admin" },
  { icon: <IconDashboard></IconDashboard>, title: "Dashboard", url: "/" },
  { icon: <IconCampaign></IconCampaign>, title: "Campaign", url: "/campaign" },
  { icon: <IconCategory></IconCategory>, title: "Category", url: "/category" },
  { icon: <IconPayment></IconPayment>, title: "Payment", url: "/payment" },
  { icon: <IconWithdraw></IconWithdraw>, title: "Withdraw", url: "/withdraw" },
  { icon: <IconProfile></IconProfile>, title: "Profile", url: "/profile" },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: "Light/Dark",
    url: "#",
    onclick: () => {},
  },
];

const DashboardSidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className="w-full md:w-[76px] bg-white shadow-[10px_10px_20px_0px_rgba(218,_213,_213,_0.15)] rounded-3xl px-[14px] md:py-10 flex flex-col   ">
      {sidebarLinks.length > 0 &&
        sidebarLinks.map((link) => {
          if (link.url === "/logout") {
            return (
              <button
                key={link.title}
                onClick={() => {
                  dispatch(authLogout());
                }}
                className="gap-x-5 flex items-center md:w-12 md:h-12 md:rounded-lg md:justify-center  md:mb-8 last:mt-auto last:shadow-sdprimary md:py-0 md:pl-0  w-[300px] py-4 pl-5"
              >
                <span>{link.icon}</span>
                <span className="md:hidden ">{link.title}</span>
              </button>
            );
          }
          return (
            <NavLink
              to={link.url}
              key={link.title}
              className={`gap-x-5 flex items-center md:w-12 md:h-12 md:rounded-lg md:justify-center  md:mb-8 last:mt-auto last:shadow-sdprimary md:py-0 md:pl-0  w-[300px] py-4 pl-5
            ${
              location.pathname === link.url
                ? "bg-primary text-primary bg-opacity-20"
                : ""
            }
            `}
              // className={({ isActive }) =>
              //   isActive ? "text-green-400 scale-110 font-semibold" : ""
              // }
            >
              <span>{link.icon}</span>
              <span className="md:hidden ">{link.title}</span>
            </NavLink>
          );
        })}
    </div>
  );
};

export default DashboardSidebar;
