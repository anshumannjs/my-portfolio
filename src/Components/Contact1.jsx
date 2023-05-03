import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Contact1() {
    const [link, setLink] = useState('');


    return (
        <section className="dark bg-black text-white dark:bg-gray-900 w-[80%] mx-auto">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>

                <div className='absolute right-[11%] flex flex-col space-y-5 text-white'>
                    <FontAwesomeIcon icon={faFacebook} onClick={(e) => { setLink('fb') }} className='cursor-pointer text-white hover:text-cyan-200 hover:scale-110' />
                    <FontAwesomeIcon icon={faTwitter} onClick={(e) => setLink('tw')} className='cursor-pointer text-white hover:text-cyan-200 hover:scale-110' />
                    <FontAwesomeIcon icon={faInstagram} onClick={(e) => setLink('In')} className='cursor-pointer text-white hover:text-cyan-200 hover:scale-110' />
                    <FontAwesomeIcon icon={faLinkedinIn} onClick={(e) => setLink('lk')} className='cursor-pointer text-white hover:text-cyan-200 hover:scale-110' />
                    <FontAwesomeIcon icon={faWhatsapp} onClick={(e) => setLink('wp')} className='cursor-pointer text-white hover:text-cyan-200 hover:scale-110' />
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

                <form action="#" className="space-y-8">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Emai</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>
    )
}
