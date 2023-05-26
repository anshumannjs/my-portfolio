import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export default function PlanCard1(props) {
    return (
        <div className='bg-black w-[80vw] md:w-[30vw] space-y-5 md:space-y-14 rounded-xl p-3 mx-auto md:mx-0'>
            <div>
                <h1 className='font-bold text-cyan-400 text-xl text-center'>Web Development</h1>
                <h1 className='text-center'>{props.detail.title}</h1>
            </div>

            <div className='flex justify-center space-x-2'>
                <h1 className='font-bold text-4xl'>{props.detail.price}</h1>
                <h1 className='my-auto'>(Negotiable)</h1>
            </div>

            <div>
                <div className='flex space-x-2 justify-center'>
                    <FontAwesomeIcon className='my-auto' icon={faCircleCheck} />
                    <h1 className=''>Delivered within {props.detail.days} days</h1>
                </div>
                <div className='flex space-x-2 justify-center'>
                    <FontAwesomeIcon className='my-auto' icon={faCircleCheck} />
                    <h1 className='my-auto'>Professional design</h1>
                </div>
            </div>
        </div>
    )
}
