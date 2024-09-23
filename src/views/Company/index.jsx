import Problem from "./Problem";
import Page from "../../components/page";
import CEO_Section from "../../components/CeoSection";
import Set_Apart from "./SetApart";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import CustomTopComponent from '../../components/CustomTopComponent'

const Company = () => {


  return (
    <Page title="Saeedan Company">
      <CustomTopComponent title1={'Unleash Your potential with us'} title2={'Excellence begin here'} description={'Saeedan Technology is a Strategic collaborator to empower your business through cutting-edge IT solutions. Let’s maximize your potential growth.'} btnLabel={'Contact Us'} />
      <Problem />
      <CEO_Section />
      <div className="py-4">
        <Set_Apart />
      </div>
      <GetInTouch />
    </Page>
  );
};

export default Company;
