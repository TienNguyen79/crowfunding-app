import React from "react";
import { Link } from "react-router-dom";
import IconFolder from "../../../components/icons/IconFolder";

const CampCategory = ({ text = "Education", className = "mb-4" }) => {
  return (
    <Link
      to="/#"
      className={`flex items-center  gap-x-[10px] text-[12px] font-medium text-text3 ${className} `}
    >
      <IconFolder></IconFolder>
      <span className="pt-[2px]">{text}</span>
    </Link>
  );
};

export default CampCategory;
