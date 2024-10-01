import React from 'react';
import CustomTeamCard from './CustomTeamCard';
import { ali, amir, anas, daniyal, fida, hamza, haseeb, moaz, mudasser, murtaza, rohan, salam, shahbaz, usama, zubair, pmbg, react, laravel, react2, hamzabg, python, salambg, amirbg, wajidbg, irfan, wajid, newpic, newpic2, bdbg } from '../assets';

const AllTeam = () => {
   
const data = [
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
      backgroundColor:'#314252',
      backgroundImage:react
  },
  {
      image: anas,
      name: 'Muhammad Anas',
      position: 'Sr.Laravel Developer',
      backgroundColor: '#ebc182',
      backgroundImage:laravel

  },
  {
      image: amir,
      name: 'Muhammad Amir',
      position: 'Sr.Laravel Developer',
      backgroundColor: '#C8CBFF',
      backgroundImage:amirbg

  },
  {
      image: moaz,
      name:'Muhammad Moaz',
      position:'React JS Developer',
      backgroundColor:'#58788b',
      backgroundImage:react2

  },
  {
      image: ali,
      name: 'Ali Husnain',
      position: 'Laravel Developer',
      backgroundColor: '#c8cbff',
      backgroundImage:amirbg

  },
  {
      image: salam,
      name: 'Abdul Salam',
      position: 'Project Manager/Flutter Developer',
      backgroundColor: '#05f0bc',
      backgroundImage:salambg

  },
  {
      image: hamza,
      name: 'Hamza Yasin',
      position: 'UI UX Designer',
      backgroundColor: '#008dad',
      backgroundImage:hamzabg

  },
  {
      image: daniyal,
      name: 'Muhammad Daniyal',
      position: 'React JS Developer',
      backgroundColor: '#fc9d1a',
      backgroundImage:react

  },
  {
      image: shahbaz,
      name: 'Shahbaz Ali',
      position: 'Laravel Developer',
      backgroundColor: '#314252',
      backgroundImage:laravel

  },
  {
      image: zubair,
      name: 'Muhammad Zubair',
      position: 'React JS Developer',
      backgroundColor: '#27283d',
      backgroundImage:react2

  },
  {
      image: irfan,
      name: 'Irfan Ali',
      position: 'React JS Developer',
      backgroundColor: '#0f3574',
      backgroundImage:react

  },
  {
      image: fida,
      name: 'Fida Hussain',
      position: 'Python Developer',
      backgroundColor: '#B0B53E',
      backgroundImage:python

  },
  {
      image: murtaza,
      name: 'Ghulam Murtaza',
      position: 'Flutter Developer',
      backgroundColor: '#3357FF',
      backgroundImage:salambg

  },
  {
      image: wajid,
      name: 'Wajid Ali',
      position: 'Cheif Marketing Officer',
      backgroundColor: '#008dad',
      backgroundImage:wajidbg
  },
  {
      image: haseeb,
      name: 'Haseeb Mushtaq',
      position: 'Laravel Developer',
      backgroundColor: '#ebc182',
      backgroundImage:amirbg
  },
  {
    image: newpic,
    name: 'Usama Riaz',
    position: 'Business Developer',
    backgroundColor: '#008dad',
    backgroundImage:bdbg
}
,{
    image: newpic2,
    name: 'Saad Ather',
    position: 'Business Developer',
    backgroundColor: '#c8cbff',
    backgroundImage:bdbg
}
];
    return (
        <div className='py-12 px-3'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl mt-5 font-semibold text-center'>
                Creatives and &nbsp;<span className='text-[#2e5090]'>Professionals</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-14 py-12 md:py-16">
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
