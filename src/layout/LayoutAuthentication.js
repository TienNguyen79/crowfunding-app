import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ErrorComponent from "../components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";
const LayoutAuthentication = ({ children, heading = "" }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.email) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (user && user.email) return null;
  return (
    <div className="relative w-full min-h-screen bg-lite p-10 dark:bg-darkbg  isolate">
      <img
        src="/Ellipse.png"
        alt=""
        className="hidden lg:block absolute w-full bottom-0 left-0 right-0 pointer-events-none z-[-1]"
      />
      <Link to="/">
        <img
          src="/logo2.png"
          alt="nmt-app"
          className="inline-block mb-5 lg:mb-16 w-full max-w-[40px] lg:max-w-[60px] dark:bg-white dark:rounded-xl  "
        />
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto dark:bg-darkSecondary ">
        <h1 className="text-lg mb-1 font-semibold lg:text-xl lg:mb-3 text-center text-text1 dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
