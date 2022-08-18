import React from 'react'
import Image from 'next/image'
import ytDownload2 from '../public/assets/projects/python-yt-download-screenshot2.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const ytDownloader = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={ytDownload2} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'> Python Youtube Video Downloader</h2>
                <h3>VS Code / Python / Python Pip Packages</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project </p>
                <h2>Overview</h2>
                <p>I built this app to get introduced into the Python world. This application lets users to download any YouTube of choice, with the highest resolution, by simply pasting the video&apos;s link into the app and save it locally into their machine. The app also gives the user the option to choose their preferred directory to save their downloaded video. This  Python GUI app was built in VS Code, along with 2 python install packages tools that supports downloading media, Pip PyTube and MoviePy.</p>
              <a 
                href='https://github.com/BillTheDude/Python-Youtube-Downloader'
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
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>VS Code</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Python</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Python Pip</p>
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

export default ytDownloader