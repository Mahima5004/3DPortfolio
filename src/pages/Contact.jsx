import React, { Suspense, useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import Fox from '../models/Fox'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import  useAlert  from '../hooks/useAlert'
import Alert from '../components/Alert'
import { socialLinks } from '../constants';


function Contact() {

  const formRef = useRef(null);

  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFocus = () => setCurrentAnimation('walk');
    
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

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
      showAlert({
        show : true,
        text: 'Message sent successfully',
        type: 'success'
      })
      //hide an alert

      setTimeout(() => {
        hideAlert(false);
        setCurrentAnimation('idle')
        setFormData({
        name: '',
        email: '',
        message: ''
    })}, [3000]);
    }).catch((error) => {

      setIsLoading(false); 

      showAlert({
        show : true,
        text: "I didn't receive your message, please try again",
        type: 'danger'
      })
      // setCurrentAnimation('idle');
      // console.log(error);    
    })

    

  }


  return (
    <>
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>

      {alert.show && <Alert {...alert}/>}

      {/* <Alert text="test"/> */}
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
            rows={3}
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

      {/* fox model */}
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px'>
        <Canvas  camera = {{
            position : [0, 0, 5],
            fov : 75,
            near : 0.1,
            far : 1000
          }}
          >   

           <directionalLight 
             intensity={2.5}
             position={[0,0,1]}
           />

           <ambientLight 
            intensity={0.5}
           />

          <Suspense fallback={<Loader />}>
            <Fox 

             currentAnimation={currentAnimation}
             position = {[0.5, 0.35, 0]}
             rotation = {[12.6, -0.6, 0]}
             scale = {[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
      
    </section>
    

    {/* //social links footer */}

    <footer className="text-gray-800 py-5">
      <div className="max-container mx-auto flex flex-col lg:flex-row justify-between items-center px-6">

        {/* Left side text */}
        <div className="mb-6 lg:mb-0 text-center lg:text-left max-w-xl">
          <p className="text-2xl font-semibold mb-4">
            Let's Stay Connected! 🚀
          </p>
          <p className="text-lg font-medium text-opacity-80">
            Whether it's for collaborations, questions, or just a casual chat—I'd love to connect with you. Let's build something amazing together!
          </p>
        </div>

        {/* Right side: Social links */}
        <div className="flex justify-center lg:justify-end gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-blue-300 transform hover:scale-110 transition duration-300 ease-in-out"
            >
              <img
                src={social.iconUrl}
                alt={social.name}
                className="w-7 h-7 transform transition duration-200 hover:scale-125"
              />
              <span className="text-md font-semibold">{social.name}</span>
            </a>
          ))}
        </div>

      </div>

      {/* Footer Text */}
      <div className="text-center text-sm text-gray-200 mt-8">
        <p>&copy; {new Date().getFullYear()} Mahima. All rights reserved.</p>
      </div>
    </footer>

    
</>

  )
}

export default Contact

