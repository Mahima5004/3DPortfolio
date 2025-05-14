import React from 'react';
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';

const Infobox = ({ text, link, btnText }) => (
  <div className='info-box neo-brutalism-blue'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} alt="Arrow" className='w-4 h-4 object-contain' />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi I am <span className='font-semibold'>Mahima</span> 👋
      <br />
      A Software Engineer
    </h1>
  ),
  2: (
    <Infobox
      text="Have a look at my experience"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <Infobox
      text="Have a look at my Projects"
      link="/projects"
      btnText="View Projects"
    />
  ),
  4: (
    <Infobox
      text="Need a project done or looking for dev? I'm just a click away"
      link="/contact"
      btnText="Let's Connect"
    />
  )
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
