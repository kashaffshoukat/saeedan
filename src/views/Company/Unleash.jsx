import { FaLongArrowAltRight } from "react-icons/fa";
const Unleash = () => {
  return (
    <div className=" bg-primary pb-14 pt-4">
      <div className="flex flex-col items-center gap-7 py-[10px] px-[20px] text-center text-white ">
        <div className="flex flex-col gap-4 items-center ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl">
            Unleash Your potential with us
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-5xl">
            Excellence begin here
          </h1>
        </div>
        <p className="text-lg md:text-xl lg:text-2xl px-[20px]">
          Saeedan Technology is a Strategic collaborator to empower your
          business through cutting-edge IT solutions. Let’s maximize your
          potential growth
        </p>
        <button className="flex items-center gap-2 px-5 py-2.5 font-semibold text-md md:text-lg lg:text-xl rounded-md bg-white text-primary hover:scale-110 duration-300 transition-all">
          Contact Us <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default Unleash;
