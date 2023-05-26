import React from 'react'
import { SiJavascript,SiTailwindcss,SiGit,SiFirebase,SiTypescript,SiRedux,SiHtml5,SiCss3,SiCplusplus,SiReact, } from 'react-icons/si'

export default function Skills() {
  return (
    <div className='mt-20 flex shadow-lg shadow-cyan-500 mb-10 bg-black w-[90%] space-x-3 text-white mx-auto border border-black p-3 md:p-5 rounded-lg'>
        <div className='w-[10%] font-bold text-cyan-400'>
            My Skills:
        </div>

        <div className='flex justify-around w-[90%] my-auto'>
        <SiReact />
        <SiJavascript />
        <SiTailwindcss />
        <SiGit />
        <SiFirebase />
        <SiTypescript />
        <SiRedux />
        <SiHtml5 />
        <SiCss3 />
        <SiCplusplus />
        </div>
    </div>
  )
}
