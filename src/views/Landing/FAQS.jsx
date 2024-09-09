import React, { useState } from "react";
import { FaChevronDown as ExpandIcon, FaChevronUp as CollapseIcon } from "react-icons/fa";

const accordionData = [
    {
        header: "Do We Offer Client Support?",
        content:
            "Yes, we provide round-the-clock support to our clients. Additionally, we arrange meetings to client needs before, during, and after development.",
    },
    {
        header: "How Many Revisions Do We Offer to Clients?",
        content:
            "We offer two revisions for every project to ensure satisfaction with the final result.",
    },
    {
        header: "How Do We Design Websites?",
        content:
            "We craft designs that prioritize seamless user journeys and navigation, enhancing conversions and sales.",
    },
    {
        header:
            "How Does Our Developed Website Help Increase Conversions and Sales?",
        content:
            "Our dedicated Design and Development teams focus on creating structures that drive sales and conversions. Furthermore, we optimize websites for SEO to improve search engine rankings.",
    },
    {
        header: "Do We Follow Best Security Practices?",
        content:
            "Absolutely. We implement top-tier security measures in all our website development projects, adhering to advanced Security-first protocols.",
    },
    {
        header: "Do We Build Multilingual Websites?",
        content:
            "Yes, we specialize in developing multilingual websites to reach diverse audiences across various languages and demographics.",
    },
];

const FAQs = () => {
    const [expandedPanels, setExpandedPanels] = useState(Array(accordionData.length).fill(false));

    const handlePanelChange = (panelIndex) => {
        const newExpandedPanels = [...expandedPanels];
        newExpandedPanels[panelIndex] = !newExpandedPanels[panelIndex];
        setExpandedPanels(newExpandedPanels);
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary">FAQs</h2>
                    <p className="text-xl font-semibold mt-2">Frequently Asked Questions</p>
                </div>
                <div className="space-y-4">
                    {accordionData.map((accordion, index) => (
                        <div key={index} className="bg-primary rounded-lg shadow-md overflow-hidden">
                            <button
                                className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 ${expandedPanels[index] ? "bg-primary-500 text-white" : "bg-gray-200 text-white"
                                    }`}
                                onClick={() => handlePanelChange(index)}
                            >
                                <span className="text-lg font-semibold">{accordion.header}</span>
                                {expandedPanels[index] ? (
                                    <CollapseIcon className="text-white" />
                                ) : (
                                    <ExpandIcon className={`text-white`} />
                                )}
                            </button>
                            {expandedPanels[index] && (
                                <div className="p-6 bg-gray-100 text-white">
                                    <p>{accordion.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
