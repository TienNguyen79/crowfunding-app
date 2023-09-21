import React, { Fragment } from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import CampViewAuthor from "./parts/CampViewAuthor";
import Button from "../../components/button/Button";
import { defaultImage } from "../../constants/global";
import CampSupport from "./parts/CampSupport";
import CampPerk from "./parts/CampPerk";
import CampainGrid from "./CampainGrid";
import CampaignItem from "./CampaignItem";

const CampaignView = () => {
  return (
    <Fragment>
      <div className="h-[140px] bg-white rounded-3xl gradient-banner flex justify-center items-center text-[40px] text-white font-bold mb-10">
        Education
      </div>

      <div className="mb-[94px]">
        <div className="flex items-start gap-x-[30px] ">
          <div>
            <CampImage className="h-[398px] mb-[30px]  w-[583px]"></CampImage>

            <div className="flex items-center gap-x-5 justify-center ">
              {Array(4)
                .fill(0)
                .map((item, index) => (
                  <img
                    key={index}
                    src={defaultImage}
                    className="w-[89px] h-[70px] object-cover rounded-[5px]"
                    alt=""
                  />
                ))}
            </div>
          </div>
          <div className="w-full max-w-[435px] py-3">
            <CampCategory className="mb-4"></CampCategory>
            <CampTitle className=" mb-4 text-[20px]">
              Remake - We Make architecture exhibition
            </CampTitle>
            <CampDesc className=" text-sm">
              Remake - We Make: an exhibition about architecture's social agency
              in the face of urbanisation
            </CampDesc>

            <CampViewAuthor></CampViewAuthor>

            <div className="w-full rounded-full h-[5px] bg-[#EFEFEF] mb-[22px]">
              <div className="w-[275px] h-full bg-primary rounded-full"></div>
            </div>

            <div className="flex items-center justify-between mb-[15px]">
              <CampMeta></CampMeta>
              <CampMeta></CampMeta>
              <CampMeta></CampMeta>
            </div>

            <Button kind="primary" className="font-semibold">
              Back this project
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center bg-white py-[19px] px-[135px] shadow-sm border-b border-slate-200 mb-6">
        <div>
          <ul className=" flex items-center gap-x-[60px] text-text3 text-sm font-medium  ">
            <li>Campgain</li>
            <li>Risks</li>
            <li>FAQ</li>
            <li>Updates</li>
            <li>Comments</li>
          </ul>
        </div>
        <div className="w-[200px]">
          <Button kind="primary">Back this project</Button>
        </div>
      </div>

      <div className="grid grid-cols-[1.3fr,1fr] gap-x-[124px] mb-[70px]">
        <div>
          <h2 className="mb-10 text-text1 text-[20px] font-semibold">Story</h2>
          <div className="w-full bg-white">à lôi</div>
        </div>
        <div>
          <h2 className="mb-5 text-text1 font-semibold">Support</h2>
          <CampSupport></CampSupport>
          <div className="mb-[60px]"></div>

          <div className="flex flex-col gap-y-[30px]">
            <CampPerk></CampPerk>
            <CampPerk></CampPerk>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-10 text-text1 text-[20px] font-semibold">Support</h2>

        <CampainGrid>
          <CampaignItem></CampaignItem>
          <CampaignItem></CampaignItem>
          <CampaignItem></CampaignItem>
          <CampaignItem></CampaignItem>
        </CampainGrid>
      </div>
    </Fragment>
  );
};

export default CampaignView;
