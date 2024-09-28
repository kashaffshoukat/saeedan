import { useRef } from "react";
import Button from "../../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Benefits from "./Benefits";
import Service from "./Service";
import Testimonial from "./Testimonial";
import TechnologyStack from "./TechnologyStack";
import FAQs from "./FAQS";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import PortolioSlider from "./PortolioSlider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { amir, amirbg, landingbg } from "../../assets";

const Landing = () => {
  const getInTouchRef = useRef(null);

  const scrollToGetInTouch = () => {
    getInTouchRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="overflow-hidden">
        <section className="bg-white">
          {/* <div className="mx-auto flex flex-col lg:flex-row items-center"> */}
            {/* <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col items-start justify-start">
              <h1 className="text-4xl text-primary mb-4 font-bold">
                Web and App Development
              </h1>
              <h2 className="text-3xl mb-6 font-bold">Services Agency</h2>
              <p className="text-3xl text-gray-800 mb-6">
                Saeedan Technology -{" "}
                <span className="text-primary">
                  Custom Software Development Company
                </span>
              </p>
              <p className="text-2xl text-gray-600 mb-6 font-semibold">
                Want to see your app idea shine?
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Our expert developers transform your vision into stunning,
                user-friendly apps. Click now to turn your dreams into reality!
              </p>
              <div>
                <Button
                  onClick={scrollToGetInTouch}
                  icon={<FaArrowRightLong />}
                >
                  Schedule Free Consultation
                </Button>
              </div>
            </div> */}

            {/* <div className="lg:w-1/2">
              <LazyLoadImage
                src="/assets/homepage.webp"
                effect="blur"
                className="w-full h-auto object-cover"
                alt={"Web and App Development Illustration"}
              />
            </div> */}


<div className="relative flex flex-col gap-7 h-[70vh] items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${landingbg})` }}
      >
        <div className="absolute inset-0 bg-blue-950 opacity-40" />
      </div>
      <h1 className="text-7xl text-center text-white relative z-10">
        Be the {" "}
        <span className="underline underline-offset-8">
        Trendsetter
        </span> 
        {" "}
         in <br /> Your Digital Space
      </h1>
      <p className="text-3xl w-[80%] text-center text-white relative z-10">
        Access elite software engineers with diverse expertise in 100+ technologies, working in your timezone
      </p>
      <div className="relative z-10">
        <Button
          // onClick={scrollToGetInTouch}
          icon={<FaArrowRightLong />}
          className={'border-white, text-white'}
        >
          Schedule Free Consultation
        </Button>
      </div>
    </div>















          {/* </div> */}
          <Benefits />
          <Service getInTouchRef={getInTouchRef} />
          <PortolioSlider />
          <Testimonial />
          <TechnologyStack />
          <FAQs />
          <div ref={getInTouchRef}>
            <GetInTouch />
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
