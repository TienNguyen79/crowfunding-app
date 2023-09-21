import React from "react";
import { defaultImage } from "../../../constants/global";
import CampTitle from "./CampTitle";
import Button from "../../../components/button/Button";

const CampPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow1">
        <div className="mb-5">
          <img
            src={defaultImage}
            className="w-full h-[232px] object-cover rounded-xl"
            alt="img"
          />
        </div>
        <div className="pb-5 pl-5">
          <button className="rounded-[2px] bg-secondary text-white px-[14px] py-1 mb-[20px] text-xs font-medium">
            Featured
          </button>
          <CampTitle className="text-[20px] mb-[5px]">
            Special One Camera
          </CampTitle>
          <div className="flex items-center gap-x-[10px] mb-[15px]">
            <span className="text-text1 text-[20px] font-bold">$2,724 USD</span>
            <div className="text-error text-sm font-medium  ">
              <span className="line-through ">$1,504 USD</span>
              <span className="ml-[5px]">(12% OFF)</span>
            </div>
          </div>
          <div className="mb-[15px]">
            <h2 className="text-[20px] font-medium text-text1">
              Estimated Shipping
            </h2>
            <span className="text-sm font-normal text-text2">October 2022</span>
          </div>
          <div className="mb-[15px] text-text1 ">
            <strong>05</strong> <span className="text-text2">claimed</span>
          </div>

          <span className="text-text2 text-sm font-normal">
            Ships worldwide
          </span>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button className="rounded-xl w-full" kind="secondary">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampPerk;
