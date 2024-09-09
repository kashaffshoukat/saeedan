import React from "react";
import TopSectionComponent from "../../components/TopSectionComponent";
import CeoSection from "../../components/CeoSection";
import AllTeam from "../../components/AllTeam";
import Page from "../../components/page";
const Team = () => {
  return (
    <Page title="Saeedan Team">
      <TopSectionComponent />
      <CeoSection />
      <AllTeam />
    </Page>
  );
};

export default Team;
