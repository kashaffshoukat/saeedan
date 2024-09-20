import BenefitsCard from "../../components/BenifitsCart";
import {
  MdOutlinePriceCheck,
  MdOutlineSupportAgent,
  MdOutlineSpeed,
  MdOutlineSecurity,
  MdOutlineDevices,
  MdOutlineTrendingUp,
} from "react-icons/md";

const benefitsData = [
  {
    icon: <MdOutlinePriceCheck />, // Pricing Icon
    title: "Affordable Pricing",
    description:
      "We offer our clients very Affordable Quotes for every project they hire us.",
  },
  {
    icon: <MdOutlineSupportAgent />, // Support Icon
    title: "24/7 Support",
    description:
      "We provide round-the-clock support to our clients and are available to discuss the project before and during development.",
  },
  {
    icon: <MdOutlineDevices />, // Responsive Icon
    title: "Responsive Design",
    description:
      "We will develop a responsive website for your business that will be accessible on a wide range of devices and screen sizes.",
  },
  {
    icon: <MdOutlineTrendingUp />, // High Performance Icon
    title: "High Performance",
    description:
      "Our developed websites are optimized for high performance and scalability, ensuring efficiency and a smooth user experience.",
  },
  {
    icon: <MdOutlineSpeed />, // SEO Icon
    title: "SEO Ready",
    description:
      "We deliver SEO-ready websites capable of performing well in search engine result pages, which is critical for business growth.",
  },
  {
    icon: <MdOutlineSecurity />, // Security Icon
    title: "Top-notch Security",
    description:
      "We believe in a security-first mechanism in development to ensure the integrity and longevity of website data.",
  },
];

const Benefits = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl font-bold text-primary">Benefits</h3>
        <p className="text-2xl font-thin">Working Benefits with us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="flex flex-col items-center">
            <BenefitsCard
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Benefits;
