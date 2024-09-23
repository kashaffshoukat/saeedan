import CustomTopComponent from "../../components/CustomTopComponent";
import Page from "../../components/page";
import LatestProjects from "./LatestProjects";

const Portfolio = () => {
  return (
    <Page title="Saeedan Portfolio">
   
      <CustomTopComponent title1={'Our Portfolio'} description={'Redefine Your Business Processes With Our Powerful Automated Services. Redefine Your Business Processes With Our Powerful Automated Services.'} btnLabel={'Contact Us'} />
      <LatestProjects />
    </Page>
  );
};

export default Portfolio;
