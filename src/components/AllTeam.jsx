import React from 'react'
import CustomTeamCard from './CustomTeamCard'
import { ali, amir, anas, daniyal, hamza, moaz, mudasser, rohan, salam, shahbaz, usama, zubair } from '../assets'

const AllTeam = () => {
    const data = [
        {
            image: rohan,
            name: 'Ruhan Ahmad',
            position: 'Sr.Project Manager'
        },
        {
            image: mudasser,
            name: 'Syed Muddasar Anayat',
            position: 'Sr.React JS Developer'
        },
        {
            image: anas,
            name: 'Muhammad Anas',
            position: 'Sr.Laravel Developer'
        },
        {
            image: amir,
            name: 'Muhammad Amir',
            position: 'Sr.Laravel Developer'
        },
        {
            image: moaz,
            name: 'Muhammad Moaz',
            position: 'React JS Developer'
        },
        {
            image: ali,
            name: 'Ali Husnain',
            position: 'Laravel Developer'
        },
        {
            image: salam,
            name: 'Abdul Salam',
            position: 'Project Manager'
        },
        {
            image: hamza,
            name: 'Hamza Yasin',
            position: 'UI UX Designer'
        },
        {
            image: daniyal,
            name: 'Muhammad Daniyal',
            position: 'React JS Developer'
        },
        {
            image: usama,
            name: 'Usama Jawad',
            position: 'React JS Developer'
        },
        {
            image: shahbaz,
            name: 'Shahbaz Ali',
            position: 'Laravel Developer'
        },
        {
            image: zubair,
            name: 'Muhammad Zubair',
            position: 'React JS Developer'
        },
        {
            image: rohan,
            name: 'Irfan Ali',
            position: 'React JS Developer'
        },
        {
            image: rohan,
            name: 'Fida Hussain',
            position: 'React JS Developer'
        },
        {
            image: rohan,
            name: 'Ghulam Murtaza',
            position: 'React JS Developer'
        },
        {
            image: rohan,
            name: 'Haseeb Mushtaq',
            position: 'React JS Developer'
        },
      
    ]

    return (

        <div
            className='px-20 py-12'
        >
            <h1 className='flex items-center justify-center text-5xl font-semibold'>
                Creatives and &nbsp;<span className='text-[#0A6EB7]'>Professionals</span>
            </h1>
            <div className="grid grid-cols-4 gap-9 py-20">
                {data.map((item, index) => (
                    <div key={index}>
                        <CustomTeamCard
                            name={item.name}
                            position={item.position}
                            Image={item.image}

                        />

                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default AllTeam
