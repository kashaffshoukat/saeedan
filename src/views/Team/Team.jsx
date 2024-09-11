import React from "react";
import TopSectionComponent from "../../components/TopSectionComponent";
import CeoSection from "../../components/CeoSection";
import AllTeam from "../../components/AllTeam";
import Page from "../../components/page";
const Team = () => {
  return (
    <Page title="Saeedan Team">
      <div className="md:px-20 md:py-12 px-2 py-2">

      <TopSectionComponent />
      <CeoSection />
      <AllTeam />
      </div>
    </Page>
  );
};

export default Team;
