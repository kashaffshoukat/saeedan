import { FaLongArrowAltRight } from "react-icons/fa";
import Button from '../components/Button'
import { useLocation } from "react-router-dom";
const CustomTopComponent = ({ btnLabel, title1, title2, description

}) => {
    const handleContactClick = () => {
        const element = document.getElementById("get-in-touch");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    const portfolios = [
        { title: "97%", description: "Customer Retention" },
        { title: "50", description: "Man Years Experience" },
        { title: "600", description: "Happy Customers" },
        { title: "100", description: "Happy Clients" },
    ];

    const location = useLocation()



    return (
        <div className="bg-primary pb-14 pt-4">
            <div className="flex flex-col items-center gap-7 py-[10px] px-[20px] text-center text-white ">
                <div className="flex flex-col gap-2 md-gap-3 lg:gap-4 items-center ">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">
                        {title1}
                    </h1>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">
                        {title2}
                    </h1>
                </div>
                <p className="text-lg md:text-xl lg:text-2xl md:px-44">
                    {description}
                </p>


                {location.pathname === '/company' && <Button
                    children={btnLabel}
                    icon={<FaLongArrowAltRight />}
                    onClick={handleContactClick}
                    className=" px-5 py-2.5 font-semibold text-md md:text-lg lg:text-xl rounded-md bg-white text-primary  transition-all "
                />
                }

                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {location.pathname === '/portfolio' && portfolios.map((portfolio, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-2"
                        >
                            <h1 className="text-lg md:text-2xl lg:text-3xl  text-white">
                                <span className="font-semibold">{portfolio.title}</span> +
                            </h1>
                            <p className="text-white text-center text-lg  md:text-xl">
                                {portfolio.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CustomTopComponent;
