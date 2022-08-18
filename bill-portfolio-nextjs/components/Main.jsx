import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {GrDocumentText} from 'react-icons/gr'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700'>
                    Hi, I&apos;m <span className='text-[#F0A500]'>Bill</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Software Engineer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    Check out some of my projects. 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a
                        href='https://www.linkedin.com/in/billliza/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaLinkedinIn/>
                        </div>
                    </a>

                    <a
                        href='https://github.com/BillTheDude'
                        target='_blank'
                        rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaGithub/>
                    </div>
                    </a>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail/>
                    </div>
                    <Link href='/resume'>
                        <a
                            href='/assets/Bill Liza Resume.pdf'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
                                <GrDocumentText/>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main