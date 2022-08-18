import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonLinesFill,BsChevronDoubleUp} from 'react-icons/bs'
import {GrDocumentText} from 'react-icons/gr'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#F0A500]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span03 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale:105 ease-in duration-300'/>
                        </div>
                        <div>
                            <h2 className='py-2'>Name here:</h2>
                            <p>Software Engineer</p>
                            <p className='py-4'>I am available for Internship Opportunities</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4'>
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
                {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input 
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    type='email'
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input 
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    type='text'
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
                <div className='flex justify-center py-12'>
                    <Link href="/">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <BsChevronDoubleUp  className="text-[#F0A500]"size={30}/>
                        </div>
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default Contact