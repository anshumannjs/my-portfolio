import React from 'react'

export default function About() {
  return (
    <div id='about' className='w-[90%] mx-auto border border-black rounded-lg shadow-lg shadow-cyan-400 p-5 text-white space-y-5 mt-20 bg-black'>
        <h1 className='mx-auto text-center text-cyan-400 font-bold text-4xl'>About Me</h1>

        <div className='w-[100%] mx-auto text-center'>
            My name is 
            <span className='bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text font-bold text-lg'> Anshuman Narendra Jit Singh</span>.
            I am 20 years old. I live in Bhubaneswar,Odisha,India. i am a self taught developer
        </div>

        <div className='w-[100%] mx-auto text-center'>
            Web development has been my main focus. But, I am pretty good in web designing also. I love the process
            of using and learning new technologies. I enjoy spending time creating and improving websites
        </div>

        <div className='w-[100%] mx-auto text-center'>
            I use VS-Code as my favourite code editor. I have built multiple websites and helped people to create their websites
        </div>
    </div>
  )
}
