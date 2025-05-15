import React, { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {

  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = (e) => {

  }

  const handleBlur = (e) => {}

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      
      {
        from_name : formData.name,
        to_name : 'Mahima',
        from_email : formData.email,
        to_email : import.meta.env.VITE_APP_EMAILJS_USER_ID,
        message : formData.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      //show success message
      //hide an alert
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);    
    })

    setFormData({
      name: '',
      email: '',
      message: ''
    })

  }


  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form 
          className='flex flex-col mt-4 gap-7 w-full'
          onSubmit={handleSubmit}
          >
          <label className='text-black-500 font-semibold'>
            Name
            <input 
            type="text"
            name='name'
            className='input shadow-card' 
            placeholder='Enter your name'
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />  
          </label>

          <label className='text-black-500 font-semibold'>
            Email Id
            <input 
            type="email"
            name='email'
            className='input shadow-card' 
            placeholder='Enter your email'
            required
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />  
          </label>

          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea 
            name='message'
            className='textarea shadow-card' 
            placeholder='Let me know how can I help you'
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />  
          </label>

          <button 
           type='submit'
           onFocus={handleFocus}
           onBlur={handleBlur}
           className='btn'
           disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

