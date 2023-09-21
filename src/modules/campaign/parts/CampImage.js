import React from "react";
import { defaultImage } from "../../../constants/global";

const CampImage = ({ className = "h-[158px]", image = defaultImage }) => {
  return (
    <div className={className}>
      <img
        src={image}
        className="w-full h-full object-cover  rounded-2xl"
        alt="img"
      />
    </div>
  );
};

export default CampImage;
