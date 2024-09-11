import React from 'react'
import WebServicesCustomCards from './WebServicesCustomCards'

const WebServicesCards = () => {

    const Webdata = [
        {
            program: 'Web App Development',
            para: 'We will create an outstanding Website for you, that connects with your audience, drives sales, and enables success.'
        },
        {
            program: 'Mob App development',
            para: 'From User-Friendly Interfaces to Secure Payment Gateways, and Database Management to inventory Management.'
        },
        {
            program: 'Custom Software Development',
            para: 'Revolutionize your business by breaking down monolithic architecture into smaller services for enhanced flexibility, Agility, and Scalability.'
        },
        {
            program: 'Php Development',
            para: 'Gain actionable insights like KPIs, Sales, and Other metrics in a presentable manner. Data, analytics, and Insights to empower your Business.'
        },
        {
            program: 'UI / UX. Designing',
            para: 'Make your Website a hub of communication and information. Our Web Portal development services provide a user-friendly interface and seamless integration.'
        },
        {
            program: 'WordPress Development',
            para: 'Hire our exclusive services to build Social Apps. We will develop real-time interactive feeds, and profiles to make social apps feel like a community.'
        },
    ]
    return (
        <>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-extralight text-[#2e5090]'>Our Services</h1>
            <h2 className='text-xl font-semibold'>The Services we Provide</h2>
        </div>
        <div className="grid grid-cols-6">
            {Webdata.map((data, index) => (
                <div key={index}>
                    <WebServicesCustomCards
                        program={data.program}
                        para={data.para}
                        />
                </div>
            ))}
        </div>
            </>
    )
}

export default WebServicesCards
