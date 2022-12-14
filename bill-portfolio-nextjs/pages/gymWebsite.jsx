import Head from 'next/head' 
import React from 'react'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import pageInProgress from '../public/assets/projects/Page_Under_Construction.png'


const gymWebsite = () => {
  return (
    <div className='w-full'>

      <Head>
        <title>Project | Gym Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={pageInProgress} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Gym Website</h2>
                <h3>React / Tailwind</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project </p>
                <h2>Overview</h2>
                <p>Redesigned the website from scratch. Ensuring the website presents a more modern UI look and easy to navigate for returning and new users. I am developing the website with NextJS to demonstrate my skills working with NextJS. The website is stylized with Tailwind CSS.<br/><br/><strong>Website project currently on development...</strong></p>
              <a 
                href=''
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
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tailwind</p>
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

export default gymWebsite