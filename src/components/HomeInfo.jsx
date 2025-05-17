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
       a <span className='font-semibold'>software engineer</span> crafting smart solutions
    </h1>
  ),
  2: (
    <Infobox
      text="Not just pixels and code — discover the person behind the craft"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <Infobox
      text="Where ideas meet execution — explore my work"
      link="/projects"
      btnText="View Projects"
    />
  ),
  4: (
    <Infobox
      text="Don’t be a stranger — whether it’s for collaboration, conversation, or just coffee"
      link="/contact"
      btnText="Let's Connect"
    />
  )
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
