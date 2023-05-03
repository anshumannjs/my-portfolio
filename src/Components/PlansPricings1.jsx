import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import PlanCard1 from './PlanCard1'

export default function PlansPricings1() {
    return (
        <div className='text-white w-full'>
            <h1 className='font-bold text-cyan-400 text-4xl text-center'>Plans & Pricings</h1>

            <div className='flex md:justify-center space-y-5 md:space-y-0 md:space-x-3 flex-col md:flex-row'>
            <PlanCard1 detail={{title:"Single page website",price:"$30",days:"7"}}/>
            <PlanCard1 detail={{title:"Multi page website",price:"$50",days:"30"}}/>
            </div>
        </div>
    )
}
