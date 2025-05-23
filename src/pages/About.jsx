import React from 'react'
import { skills, experiences } from '../constants'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA';


function About() {
  return (
    <section className='max-container'>
        <h1 className='head-text'>
          Hello! I'm <span className='blue-gradient-text font-semibold drop-shadow'>
          Mahima</span>
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            a software engineer driven by curiosity and a passion for building purposeful tech. 
            Beyond clean code and seamless interfaces, 
            I love solving real-world problems and turning ideas into intuitive digital experiences. 
            This page isn’t just about what I do — it’s about why I do it.
          </p>
        </div>

        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>My Skills</h3>

          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill, index) => (
              <div  key = {index} className='block-container w-20 h-20'>
                <div className='btn-back rounded-xl'/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img 
                  src= {skill.imageUrl} 
                  alt={skill.name} 
                  className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experiance */}
        <div className='py-16'>
          <h3 className='subhead-text'>Work Experiance</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
             <p>
            Every project, role, and challenge has shaped the engineer I am today. 
            From writing my first lines of code to building real-world applications, 
            my journey is a blend of growth, grit, and curiosity. 
            Here's a look at the experiences that have sharpened my skills and fueled my passion for problem-solving.
          </p>
          </div>

          <div className='mt-12 flex'></div>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                 key={experience.company_name}
                 date={experience.date}
                 icon={
                 <div className='flex justify-center items-center
                  w-full h-full'>
                  <img 
                  src= {experience.icon} 
                  alt={experience.company_name}
                  className='w-[60%] h-[60%] object-contain' 
                  />
                 </div>
                 }
                  
                 iconStyle = {
                  {
                    background: experience.iconBg,
                    // boxShadow: 'none',
                  }
                 }
                 contentStyle={
                  {
                    borderBottom : '8px',
                    borderStyle : 'solid',
                    borderBottomColor : experience.iconBg,
                    boxShadow : 'none',
                  }
                 }
                >
                  <div key={index}>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-gray-800 font-medium font-base'
                      style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                    <p className='text-gray-500 text-xs'
                      style={{ margin: 0 }}>
                      {experience.project}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50 pl-1 text-sm font-normal'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
        </div>

        <hr className='border-slate-200'/>
        <CTA />
    </section>
  )
}

export default About