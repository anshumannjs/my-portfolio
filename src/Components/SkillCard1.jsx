import React from 'react'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SkillCard1(props) {
  return (
    <div className='h-[10vh] md:h-[20vh] w-[20vw] md:w-[10vw] border border-black flex flex-col justify-between p-3 rounded-md shadow-lg'>
        <FontAwesomeIcon icon={faReact}/>
        <div className='font-bold text-black mx-auto'>
            React
        </div>
    </div>
  )
}
