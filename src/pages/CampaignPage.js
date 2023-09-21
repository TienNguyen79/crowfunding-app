import React, { Fragment } from "react";
import LayoutDashboard from "../layout/LayoutDashboard";
import Heading from "../components/common/Heading";
import CampainGrid from "../modules/campaign/CampainGrid";
import CampaignFeature from "../modules/campaign/CampaignFeature";
import Button from "../components/button/Button";

const CampaignPage = () => {
  return (
    <Fragment>
      <div className="  flex items-center justify-between py-[31px] px-[40px] bg-white rounded-3xl mb-10 ">
        <div className="flex items-center gap-x-6  ">
          <button className="w-[54px] h-[54px] flex justify-center items-center rounded-[100px] bg-secondary ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>

          <div className="flex-1">
            <h1 className="text-[22px] text-text1 font-semibold mb-2">
              Create Your Campaign
            </h1>
            <p className="text-sm text-text3 mb-2">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="/" className="block text-primary text-sm">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <div>
          <Button
            type="button"
            kind="ghost"
            className="font-semibold px-8"
            href="/start-campaign"
          >
            Create campaign
          </Button>
        </div>
      </div>

      <Heading number={4}>Your Campaign</Heading>
      <CampainGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampainGrid>

      <div className="mt-10 w-[200px] mx-auto ">
        <Button kind="ghost" className="font-semibold">
          See more+
        </Button>
      </div>
    </Fragment>
  );
};

export default CampaignPage;
