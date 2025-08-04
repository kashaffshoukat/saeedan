import React from 'react';
import CustomTeamCard from './CustomTeamCard';
import { ali, amir, anas, daniyal, fida, hamza, haseeb, moaz, mudasser, murtaza, rohan, salam, shahbaz, usama, zubair, pmbg, react, laravel, react2, hamzabg, python, salambg, amirbg, wajidbg, irfan, wajid, newpic, newpic2, bdbg, mehboob, graphic, tahoor, alizulqarnain, aimlbg, ubaid, bddbg, zumra, mehwish } from '../assets';

const AllTeam = () => {

    const data = [
         {
            image: zumra,
            name: 'Zumra Majeed',
            position: 'HR Executive',
            backgroundColor: "#dd6f65",
            backgroundImage: "https://t3.ftcdn.net/jpg/04/06/02/96/360_F_406029666_HXoRQoU8ojjpcDiSKRSe34DOF5EIyeP5.jpg"
        },
        {
            image: rohan,
            name: 'Ruhan Ahmad',
            position: 'Sr.Project Manager',
            backgroundColor: '#008dad',
            backgroundImage: pmbg,
        },
        {
            image: mudasser,
            name: 'Syed Muddasar Anayat',
            position: 'Sr.React JS Developer',
            backgroundColor: '#314252',
            backgroundImage: react
        },
        {
            image: amir,
            name: 'Muhammad Amir',
            position: 'Sr.Laravel Developer',
            backgroundColor: '#C8CBFF',
            backgroundImage: amirbg

        },
        {
            image: moaz,
            name: 'Muhammad Moaz',
            position: 'React JS Developer',
            backgroundColor: '#58788b',
            backgroundImage: react2

        },
        {
            image: ali,
            name: 'Ali Husnain',
            position: 'Laravel Developer',
            backgroundColor: '#c8cbff',
            backgroundImage: amirbg

        },
         {
            image: hamza,
            name: 'Hamza Yasin',
            position: 'UI UX Designer',
            backgroundColor: '#008dad',
            backgroundImage: hamzabg

        },
        {
            image: zubair,
            name: 'Muhammad Zubair',
            position: 'React JS Developer',
            backgroundColor: '#27283d',
            backgroundImage: react2

        },
        {
            image: irfan,
            name: 'Irfan Ali',
            position: 'React JS Developer',
            backgroundColor: '#0f3574',
            backgroundImage: react

        },
        {
            image: alizulqarnain,
            name: 'Ali Zulqarnain',
            position: 'AI/ML Developer',
            backgroundColor: '#021e4b',
            backgroundImage: aimlbg
        },
          {
            image: mehwish,
            name: 'Mehwish Shaukat',
            position: 'Business Developer',
            backgroundColor: "#666e75",
            backgroundImage: bddbg
        },
        
    ];
    return (
        <div className='py-12 px-3'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl mt-5 font-semibold text-center'>
                Creatives and &nbsp;<span className='text-[#2e5090]'>Professionals</span>
            </h1>
            <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-4 gap-24 lg:gap-14 md:gap-20 mt-4 py-12 md:py-16">
                {data.map((item, index) => (
                    <div key={index}>
                        <CustomTeamCard
                            name={item.name}
                            position={item.position}
                            Image={item.image}
                            backgroundColor={item.backgroundColor}
                            backgroundImage={item.backgroundImage}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTeam;
