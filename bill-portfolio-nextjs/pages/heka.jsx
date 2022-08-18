import React from 'react'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import hekaCovid from '../public/assets/projects/Heka Screenshot 1.png'


const heka = () => {
  return (
    <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={hekaCovid} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Heka COVID-19 Tracker Android App</h2>
                <h3>Flutter / Dart / Firebase / Android Studio</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project </p>
                <h2>Overview</h2>
                <p>I was assigned into the Public Health Team and we came up with the idea to build an android app that informs users with relevant COVID-19 statistics of cases in Miami-Dade County. We built this app with Dart programming language for our android app. We used Flutter for our front-end design of the applcation. I designed and implemented our custom heatmaps into the application. With Google Maps API being implemented, the application tracks the user’s location and displays the custom heatmaps in areas of Miami-Dade with major COVID-19 cases. We used Firebase to record the number of total COVID-19 cases and mortality cases.</p>
              <a 
                href='https://github.com/adrdev10/PublicHealthTeamFall2020'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4'>Code</button>
              </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'> 
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Flutter</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Dart</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Google Maps API</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Firebase</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Android Studio</p>
                </div>
            </div>
         </div>
         <Link href="/#projects">
                <p className='underline cursor-pointer'>Back</p>
         </Link>
      </div>

    </div>
  )
}

export default heka