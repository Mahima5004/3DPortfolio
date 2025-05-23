import React from 'react'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className='cta'>
     <p className='cta-text'>Have a project in mind? <br className='sm:block hidden'/>
     Let's build something amazing together!</p>
     
    <Link to = '/contact' className = 'btn'>
      Contact Me
    </Link>
    </section>
  )
}

export default CTA