import React from "react";
import { defaultImage } from "../../../constants/global";

const CampAuthor = ({ image = defaultImage, author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-3 text-xs">
      <div className="w-[30px] h-[30px]">
        <img className="w-full h-full rounded-full" src={image} alt="" />
      </div>
      <div className="text-text3 font-normal">
        by <span className="text-text2 font-semibold">{author}</span>
      </div>
    </div>
  );
};

export default CampAuthor;
