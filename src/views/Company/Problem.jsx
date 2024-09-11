import { MdElectricBolt } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { IoShieldCheckmark } from "react-icons/io5";

const Problem = () => {
  const problems = [
    {
      icon: (
        <MdElectricBolt
          size={50}
          className="bg-skyBlue p-3 rounded-full text-blue-800"
        />
      ),
      title: "Embrace the Future, Today",
      description:
        "We have a proven track record of success, helping businesses of all sizes achieve their digital goals.",
    },
    {
      icon: (
        <ImUsers
          size={50}
          className="bg-skyBlue p-3 rounded-full text-blue-800"
        />
      ),
      title: "Dedicated Team",
      description:
        "We have a proven track record of success, helping businesses of all sizes achieve their digital goals.",
    },
    {
      icon: (
        <IoShieldCheckmark
          size={50}
          className="bg-skyBlue p-3 rounded-full text-blue-800"
        />
      ),
      title: "Ensure long-term scalability",
      description:
        "Your goals, our expertise. Tell us your vision, and we will tailor the perfect software team for you.",
    },
  ];

  return (
    <div className="flex flex-col gap-6 xl:gap-10 p-10  md:p-16 xl:p-20">
      <h1 className="font-semibold text-2xl md:text-3xl lg:text-5xl">
        Problem We'll Help You
        <span className="text-primary font-semibold"> Solve</span>
      </h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {problems?.map((problem, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between px-5 py-10 gap-4 bg-problems border-[1.5px] border-problemBorder rounded-md"
          >
            {problem.icon}
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
              {problem.title}
            </h1>
            <p className="text-md md:text-lg">{problem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problem;
