import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <img src="/Spin-1s-200px.svg" className="loadingsvg" alt="loading" />
  ) : (
    children
  );
  let defaultClassName =
    "flex justify-center items-center  p-4 text-base font-semibol min-h-[56px] rounded-xl ";

  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + "bg-primary text-white";
      break;
    case "secondary":
      defaultClassName = defaultClassName + "bg-secondary text-white";
      break;
    case "ghost":
      defaultClassName = defaultClassName + "bg-[#EEEAFD] text-secondary";
      break;
    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={`${defaultClassName} ${className}`}>
        {" "}
        {child}
      </Link>
    );

  return (
    <button
      type={type}
      {...rest}
      className={`${defaultClassName} ${
        !!isLoading ? "opacity-50 pointer-events-none select-none" : ""
      }  ${className}`}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
