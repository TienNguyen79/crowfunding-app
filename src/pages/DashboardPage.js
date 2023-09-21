import React, { Fragment, useEffect } from "react";
import Heading from "../components/common/Heading";
import CampainGrid from "../modules/campaign/CampainGrid";
import CampaignItem from "../modules/campaign/CampaignItem";
import CampaignFeature from "../modules/campaign/CampaignFeature";
import Gap from "../components/common/Gap";
import Overlay from "../components/common/Overlay";
import axios from "../api/axios";
import { apiURL } from "../config/config";

const DashboardPage = () => {
  // useEffect(() => {
  //   async function fetchCategory() {
  //     try {
  //       const response = await axios.get(`${apiURL}/campaigns`);
  //       // setCategoriesData(response?.data || []);
  //       console.log(
  //         "🚀 ~ file: CampaignAddNew.js:129 ~ fetchCategory ~ response:",
  //         response.data
  //       );
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   fetchCategory();
  // }, []);
  return (
    <Fragment>
      <Heading number={4}>Your Campain</Heading>
      <Overlay></Overlay>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>

      <Heading>Popular Campaign</Heading>
      <CampainGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampainGrid>
      <div className="mt-10"></div>
      <Heading>Recent Campaign</Heading>
      <CampainGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampainGrid>
    </Fragment>
  );
};

export default DashboardPage;
