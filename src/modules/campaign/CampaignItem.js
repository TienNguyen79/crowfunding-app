import React from "react";
import IconFolder from "../../components/icons/IconFolder";
import { Link } from "react-router-dom";
import CampCategory from "./parts/CampCategory";
import CampMeta from "./parts/CampMeta";
import CampDesc from "./parts/CampDesc";
import CampTitle from "./parts/CampTitle";
import CampAuthor from "./parts/CampAuthor";
import CampImage from "./parts/CampImage";

const CampaignItem = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_12px_20px_0px_rgba(184,_184,_184,_0.03),0px_6px_12px_0px_rgba(184,_184,_184,_0.02),0px_2px_4px_0px_rgba(184,_184,_184,_0.03)]">
      <CampImage></CampImage>
      <div className="py-[15px] pl-5 pr-[40px] ">
        <CampCategory text="Education"></CampCategory>
        <div className="">
          <CampTitle>Powered Kits Learning Boxes</CampTitle>
          <CampDesc>
            My computer decided to die. As a result, my small business.
          </CampDesc>
        </div>
        <div className="flex items-center justify-between mb-5">
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>
        </div>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
