import React from 'react'
import MainFeaturesData from './MainFeaturesData'
import { FaCheckCircle } from 'react-icons/fa'

const MainFeatures = () => {

    const data = [
        {
            icon: <FaCheckCircle/>,
            title: 'Responsive Design',
            description: 'Our Designs are responsive to cater to audiences across devices of different screen sizes.'

        },
        {
            icon: <FaCheckCircle/>,
            title: 'UI/UX Excellence',
            description: 'We analyze and prioritize user behavior and needs and We build designs for smooth navigation and better interaction.'

        },
        {
            icon: <FaCheckCircle/>,
            title: 'Optimization for Performance',
            description: 'We optimize our websites to make them lightweight to increase performance and decrease load time.'

        },
        {
            icon: <FaCheckCircle/>,
            title: 'Dedicated Team',
            description: 'For every web development project, we craft a team of developers devoted to your project.'

        },
        {
            icon: <FaCheckCircle/>,
            title: 'Security',
            description: 'As per its importance, we made websites by following the best security practices.'

        },
        {
            icon: <FaCheckCircle/>,
            title: 'SEO',
            description: 'We add all exclusive SEO features and enable the website to roar in Search Engine Result Pages.'

        },
        {
            icon: <FaCheckCircle/>,
            title: 'Clean Code',
            description: 'We are committed to writing clean code during web development to ensure readability, upgrade, maintenance, and debugging.'

        },
    ]
    return (
        <div>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <h1 className='text-2xl font-semibold'>Focus</h1>
                <h2 className='text-[#2e50ac] text-3xl'>Our Main Features</h2>
                <p>Our development process is focused on creating top-notch web solutions to meet your specific requirements.</p>
            </div>

            <div className="grid grid-cols-3 gap-10 py-12">
                {data.map((item, index) => (
                    <div key={index}>
                        <MainFeaturesData
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainFeatures
