import React from 'react'
import img from '../Images/Web-development,-programmer-engineering-and-coding-website-on-augmented-reality-interface-screens-on-transparent-background-PNG (1).png'
import { faGear, faLightbulb, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SkillsServices1() {
  return (
    <div id='service' className='w-[90%] mx-auto border border-black rounded-md shadow-lg shadow-cyan-400 mt-20 text-white bg-black'>
      <h1 className='text-center mx-auto font-bold text-2xl text-cyan-400'>
        My Services
      </h1>

      <div className='flex flex-col md:flex-row justify-center space-x-0 md:space-x-10'>
        <img src={img} alt="" className='w-[80%] md:w-[40%] mx-auto md:mx-0'/>

        <div className='text-center space-y-5 md:space-y-28 my-0 md:my-auto'>
          <div className='flex space-x-3 px-3'>
            <FontAwesomeIcon icon={faWallet} className='my-auto'/>
            <div>
            <h1>Resonable and flexible price for clients</h1>
            <hr className='border-cyan-500 border'/>
            </div>
          </div>

          <div className='flex space-x-3 px-3'>
            <FontAwesomeIcon icon={faLightbulb} className='my-auto ml-3'/>
            <div>
            <h1>Elaborating ideas in a discussion</h1>
            <hr className='border-cyan-500 border'/>
            </div>
          </div>

          <div className='flex space-x-3 px-3'>
            <FontAwesomeIcon icon={faGear} className='my-auto ml-3'/>
            <div>
            <h1>Full range of design and customizations</h1>
            <hr className='border-cyan-500 border'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
