import React from 'react'
import { companypic} from '../assets'
import OurProcessData from './OurProcessData'

const OurProcess = () => {
    const data=[
        {
           number:'#1',
           title:'Draft Preparation',
           description:'A draft is been prepared under the complete guidance of client requirements and business prospects.'
        },
        {
            number:'#2',
            title:'Layout Development',
            description:'According to the UI design drafted, a layout will be coded afterward that reflects the approved website design.'
         },
         {
            number:'#3',
            title:'Meetings',
            description:'We provide quality and premium support to our clients as they are open to contact 24/7 about a query.'
         },
         {
            number:'#4',
            title:'Design Presentation',
            description:'A User Interface is been crafted that fully satisfies project requirements and ease user journey through the product.'
         },
         {
            number:'#5',
            title:'Backend Development',
            description:'Backend logic is also coded synchronously and integrated into the user interface of website. It’s done either through APIs or the embedding of code.'
         },
         {
            number:'#6',
            title:'Quality Assurance',
            description:'All functionalities and features of the website are tested by an expert team of Software Quality Assurance.'
         },
    ]
    return (
        <div className='bg-[#f7f9ff] p-4'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <h1 className='text-[#2e50ac] text-3xl'>Our Process</h1>
                <p>Our development process is focused on creating top-notch web solutions to meet your specific requirements.</p>
            </div>

            <div className="grid grid-cols-12 py-12">
                <div className='col-span-6'>
                    <h1 className='text-4xl text-[#2e5090]'>Our Process, Simple, seamless, streamlined</h1>
                    <img src={companypic} alt="" className='h-[65%] mt-4' />
                </div>
                <div className='col-span-6'>
                    <div className='flex flex-col gap-10'>
                {data.map((item, index) => (
                    <div key={index}>
                        <OurProcessData
                           number={item.number}
                           title={item.title}
                           description={item.description}
                           />
                    </div>
                ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default OurProcess
