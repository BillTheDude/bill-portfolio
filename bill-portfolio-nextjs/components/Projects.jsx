import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import codeEarnImg from '../public/assets/projects/Code2Earn Screenshot 1.png'
import ytDownload from '../public/assets/projects/python-yt-download-screenshot3.png'
import hekaApp from '../public/assets/projects/Heka Screenshot 2.png'
import pageInProgress from '../public/assets/projects/Page_Under_Construction.png'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#F0A500]'>Projects</p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectItem 
                title="Gym Website" 
                backgroundImg={pageInProgress}
                projectUrl='/gymWebsite'
              />
              <ProjectItem 
                title="Code2Earn"
                backgroundImg = {codeEarnImg} 
                projectUrl='/code2earn'
              />
              <ProjectItem 
                title="Python YouTube Downloader" 
                backgroundImg={ytDownload}
                projectUrl='/ytDownloader'
              />
              <ProjectItem 
                title="Heka COVID-19 Tracker App" 
                backgroundImg= {hekaApp}
                projectUrl='/heka'
              />
            </div>
        </div>
    </div>
  )
}

export default Projects