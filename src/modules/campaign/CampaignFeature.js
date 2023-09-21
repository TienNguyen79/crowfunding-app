import React from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";

const CampaignFeature = () => {
  return (
    <div className="flex items-start gap-x-[30px] ">
      <CampImage className="h-[266px]  w-[583px]"></CampImage>
      <div className="w-full max-w-[435px] py-3">
        <CampCategory className="mb-4"></CampCategory>
        <CampTitle className=" mb-4 text-[20px]">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="mb-6 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>

        <div className="w-full rounded-full h-[5px] bg-[#EFEFEF] mb-[22px]">
          <div className="w-[275px] h-full bg-primary rounded-full"></div>
        </div>

        <div className="flex items-center justify-between">
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
