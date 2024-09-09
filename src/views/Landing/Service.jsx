import React from 'react';
import ServiceHomeCard from '../../components/ServiceHomeCard';
import { MdWeb, MdSecurity, MdSpeed } from 'react-icons/md'; // Example icons from react-icons

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
            "Data Encryption",
            "Network Security",
            "Threat Detection & Response"
        ]
    },
    {
        icon: <MdSpeed />, // Icon for performance optimization
        mainHeading: 'Performance Optimization',
        subHeadings: [
            "Speed Enhancements",
            "Code Optimization",
            "Server Performance Tuning"
        ]
    }
];

const Service = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-4'>
                <h3 className='text-4xl font-bold text-primary'>Services We Deliver</h3>
                <p className='text-2xl font-thin'>Our Featured Services</p>
            </div>
            <div className='grid grid-cols-12 gap-6 py-12'>
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
        </>
    );
}

export default Service;
