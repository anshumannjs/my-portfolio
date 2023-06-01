import React, { useRef } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser'

export default function Contact1() {
    const [link, setLink] = useState('');
    const form = useRef();

    function handleSubmit(e){
        e.preventDefault();
        emailjs.sendForm('service_k14fy1r','template_hyfe5u8',form.current,'bG75hkGtE6gzgixpn')
        .then((result)=>{
            console.log(result);
        },(err)=>{
            console.log(err);
        })
    }

    return (
        <section id='contact' className="dark bg-black text-white dark:bg-gray-900 border border-black rounded-lg w-[90%] mx-auto mt-20 shadow-lg shadow-cyan-400">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-cyan-400">Contact Us</h2>

                <div className='absolute right-[11%] flex flex-col space-y-5 text-white'>
                    <FontAwesomeIcon icon={faFacebook} onClick={(e) => { setLink('fb') }} className='cursor-pointer text-white hover:text-cyan-400 hover:scale-110' />
                    <FontAwesomeIcon icon={faTwitter} onClick={(e) => setLink('tw')} className='cursor-pointer text-white hover:text-cyan-400 hover:scale-110' />
                    <FontAwesomeIcon icon={faInstagram} onClick={(e) => setLink('In')} className='cursor-pointer text-white hover:text-cyan-400 hover:scale-110' />
                    <FontAwesomeIcon icon={faLinkedinIn} onClick={(e) => setLink('lk')} className='cursor-pointer text-white hover:text-cyan-400 hover:scale-110' />
                    <FontAwesomeIcon icon={faWhatsapp} onClick={(e) => setLink('wp')} className='cursor-pointer text-white hover:text-cyan-400 hover:scale-110' />
                </div>

                <div className='flex flex-col md:flex-row space-y-3 md:space-x-3 my-10'>
                    <div className='flex space-x-3 my-auto'>
                        <FontAwesomeIcon className='my-auto text-3xl' icon={faLocationDot} />
                        <div>
                            <h1 className='font-bold text-lg'>My Location</h1>
                            <h1>Bhubaneswar,Odisha,India</h1>
                        </div>
                    </div>

                    <div className='flex space-x-3 my-auto'>
                        <FontAwesomeIcon className='my-auto text-3xl' icon={faPhone} />
                        <div>
                            <h1 className='font-bold text-lg'>Phone Number</h1>
                            <h1>+91 8658159749</h1>
                        </div>
                    </div>

                    <div className='flex space-x-3 my-auto'>
                        <FontAwesomeIcon className='my-auto text-3xl' icon={faMailBulk} />
                        <div>
                            <h1 className='font-bold text-lg'>Email Address</h1>
                            <h1>anshumannarendrajitsingh@gmail.com</h1>
                        </div>
                    </div>
                </div>

                <form action="#" ref={form} className="space-y-8">
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                        <input type="name" name='from_name' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="email" name='from_email' id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" name='message' rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
                    </div>
                    <button onClick={(e)=>handleSubmit(e)} className={`p-2 border border-white rounded-md hover:scale-110 hover:border-cyan-500 hover:text-cyan-500 cursor-pointer text-white mt-5 text-base`}>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}
