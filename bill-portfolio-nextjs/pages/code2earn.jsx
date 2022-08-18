import React from 'react' 
import Image from 'next/image'
import codeEarnBkg from '../public/assets/projects/Code2Earn Screenshot 2.png'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'


const code2earn = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
              <Image className='absolute z-1' layout='fill' objectFit='cover' src={codeEarnBkg} alt='/' />
              <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'> Code2Earn</h2>
                <h3>React / Bootstrap / Firebase</h3>
              </div>
        </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>I built this application to demonstrate my knowledge working with React JS. This website was built usign React JS and is stylized with Bootstrap CSS. This is a LeetCode inspired website but comes with our own coinbase system. With our coinbase system, students will get rewarded by answering correctly the LeetCode exercises or solving real world coding challenges from other members. The more they participate, the higher the rewards making a good incentive for students to prepare more with Data Structures & Algorithms. This application supports user authentication using Firebase. Another feature of this application is a marketplace tab that offers variety of NFTs so users can buy them with the coins they have earned.</p>
          <a 
            href='https://github.com/eschafir/code2earn'
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
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Firebase</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Bootstrap CSS</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Routes</p>
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

export default code2earn