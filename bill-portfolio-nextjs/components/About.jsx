import React from 'react'
import Image from 'next/image'
import AboutImg from '../public/assets/macbook-pro-img.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#F0A500]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>I am a 25 year old Latino college student from Florida International University. Pursuing a 2nd Bachelors Degree in Cybersecurity after obtaining my 1st Bachelors Degree in Computer Science. I am very passionate with Web Development related topics and I consider myself an open minded person who loves to learn and think out of the box within the tech field.</p>
                <p className='py-2 text-gray-600'>Ever since I coded my very first &quot;Hello World&quot; program I knew I wanted to be part of the programming world and experience the magic of creating programs/apps to deliver the best experience for every user in the world. My hobbies are cooking, working out at the gym, meet with friends, go to concert, and make YouTube videos for my YouTube channel. I&apos;ve been doing YouTube since 2016!</p>
                <p className='py-2 text-gray-600'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4'>
                <Image className='rounded-xl' src={AboutImg} alt='/'/>
            </div>
        </div>
    </div>
  )
}

export default About