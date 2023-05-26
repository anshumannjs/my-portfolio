import React, { useState } from 'react'
import HeroImg from '../Images/wallpapersden.com_black-hole-hd-digital_3840x1620.jpg'
import { TypeAnimation } from 'react-type-animation'
import { faFacebook,faTwitter,faInstagram,faWhatsapp,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HeroSection1() {
  const [link,setLink]=useState('');

  function handleContact(){
    document.getElementById('contact').scrollIntoView({behavior:'smooth',block:'center'});
  }

  return (
    <div id='intro' className='h-[100vh] shadow-xl shadow-cyan-400' style={{ backgroundImage: `url(${HeroImg})`, backgroundSize: 'cover' }}>
      <div className='absolute top-[50%] left-5 md:left-10 text-base md:text-4xl'>
      <div className='text-white font-bold'>
        Hello,
      </div>
      <div className='text-white font-bold'>
        I am <span className='bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text'>
          <TypeAnimation
          sequence={[
            'Anshuman',
            2000,
            'Njs',
            1000
          ]}
          repeat={Infinity}
          />
          </span>,
      </div>
      <div className='text-white font-bold'>Front End Developer</div>

      <button onClick={handleContact} className={`p-2 border border-white rounded-md hover:scale-110 hover:border-cyan-500 hover:text-cyan-500 cursor-pointer text-white mt-5 text-base`}>
        Contact Me
      </button>
      </div>

      <div className='absolute right-5 top-[40%] flex flex-col space-y-5'>
      <FontAwesomeIcon icon={faFacebook} onClick={(e)=>{setLink('fb')}} className='cursor-pointer text-white hover:text-cyan-200 hover:scale-110'/>
      <FontAwesomeIcon icon={faTwitter} onClick={(e)=>setLink('tw')} className='cursor-pointer text-white hover:text-cyan-200 hover:scale-110'/>
      <FontAwesomeIcon icon={faInstagram} onClick={(e)=>setLink('In')} className='cursor-pointer text-white hover:text-cyan-200 hover:scale-110'/>
      <FontAwesomeIcon icon={faLinkedinIn} onClick={(e)=>setLink('lk')} className='cursor-pointer text-white hover:text-cyan-200 hover:scale-110'/>
      <FontAwesomeIcon icon={faWhatsapp} onClick={(e)=>setLink('wp')} className='cursor-pointer text-white hover:text-cyan-200 hover:scale-110'/>
      </div>
    </div>
  )
}
