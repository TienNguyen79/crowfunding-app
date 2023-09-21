import React from "react";

const CampMeta = ({
  amout = "$2000",
  text = "Raised of $1,900",
  size = "small",
}) => {
  return (
    <div>
      <h3
        className={`text-sm font-semibold text-text2 ${
          size === "small" ? "text-sm" : "text-xl"
        }`}
      >
        {amout}
      </h3>
      <span
        className={`text-xs font-normal text-text4 ${
          size === "small" ? "text-xs" : "text-base"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default CampMeta;
