import React from 'react';
import ServiceHomeCard from '../../components/ServiceHomeCard';
import { MdWeb, MdSecurity, MdSpeed } from 'react-icons/md';
import Button from '../../components/Button';
import { FaArrowRightLong } from "react-icons/fa6";

const servicesData = [
    {
        icon: <MdWeb />,
        mainHeading: 'Web Development',
        subHeadings: [
            "PHP",
            "Laravel",
            "React",
            "JavaScript",
            "My SQL",
        ]
    },
    {
        icon: <MdSecurity />,
        mainHeading: 'Custom Software Development',
        subHeadings: [
            "APIS",
            " Enterprise  ",
            "Micro Services",
            "All Powered Solutions",
            "CRM",
        ]
    },
    {
        icon: <MdSpeed />,
        mainHeading: 'Mobile App Development',
        subHeadings: [
            "Android App",
            "IOS",
            "Hybrid Apps",
            "Flutter Apps",
            "Social Apps",
        ]
    },
    {
        icon: <MdSpeed />,
        mainHeading: 'CMS Development',
        subHeadings: [
            "WordPress",
            "Shopify",
            "Wix",
            "Web Flow",
            "Custom CMS",
        ]
    },
    {
        icon: <MdSpeed />,
        mainHeading: 'UIUX Designing',
        subHeadings: [
            "Website Design",
            "Mobile App Development",
            "Usability Testing",
            "Wireframing",
        ]
    },
    {
        icon: <MdSpeed />,
        mainHeading: 'Digital Marketing',
        subHeadings: [
            "SEO",
            "PPC",
            "SMM",
            "Social Media Management",
            "Brand Kits",
        ]
    },
];

const Service = () => {
    return (
        <>
            <div className='flex flex-col items-center'>

                <div className='flex flex-col items-center gap-4'>
                    <h3 className='text-4xl font-bold text-primary'>Services We Deliver</h3>
                    <p className='text-2xl font-thin'>Our Featured Services</p>
                </div>
                <div className='grid grid-cols-12 gap-8 py-12'>
                    {servicesData.map((service, index) => (
                        <div key={index} className='col-span-4'>
                            <ServiceHomeCard
                                icon={service.icon}
                                mainHeading={service.mainHeading}
                                subHeadings={service.subHeadings}
                            />
                        </div>
                    ))}
                </div>
                <div>

                    <Button icon={<FaArrowRightLong />}>Book my Consultation Today</Button>
                </div>
            </div>
        </>
    );
}

export default Service;
