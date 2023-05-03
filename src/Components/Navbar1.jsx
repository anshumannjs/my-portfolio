import React from 'react'
import { useState } from 'react'
import logo from '../Images/njs-high-resolution-logo-color-on-transparent-background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const variants = {
        open: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: -1
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: 1
            }
        }
    }

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? "#FFB200" : "#000000",
        }
    }

    return (
        <>
            <nav className='p-2 flex items-center justify-between w-[100%] bg-transparent fixed shadow-sm text-white z-20 backdrop-blur-md'>
                <div className='flex items-center justify-between mx-3 w-full sm:w-fit'>
                    <motion.div
                        animate={{ scale: 1 }}
                        initial={{ scale: 0 }}
                    >
                        <img className='h-8 sm:h-10' src={logo} alt="logo" />
                    </motion.div>
                    <FontAwesomeIcon icon={faBars} size='lg' className='sm:hidden' onClick={handleClick} />
                </div>
                <div className='flex space-x-2.5 lg:space-x-4 mr-3'>
                    <ul className='hidden sm:flex space-x-3 items-center text-lg font-semibold text-cyan-500'>
                        <li className='cursor-pointer' style={{ navLinkStyles }}>
                            Intro
                        </li>
                        <li className='cursor-pointer' style={{ navLinkStyles }}>
                            About
                        </li>
                        <li className="cursor-pointer" style={{ navLinkStyles }}>
                            Services
                        </li>
                        <li className='cursor-pointer' style={{ navLinkStyles }}>
                            Projects
                        </li>
                        <li className='cursor-pointer' style={{ navLinkStyles }}>
                            Contact
                        </li>
                    </ul>
                </div>
            </nav>
            {showMenu &&
                <motion.div className='bg-black/70 fixed top-0 w-full h-full ease-in-out duration-500 z-30' onClick={handleClick}>
                    <motion.aside
                        className='bg-white h-full w-3/4 py-3 px-3 absolute left-0 ease-in-out'
                        animate={{ width: '75%' }}
                        initial={{ width: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.div className='flex justify-between items-center'>
                            <div className='text-lg font-semibold pr-4'>
                                <img className='h-8 md:h-10' src={logo} alt="logo" />
                            </div>
                            <div className='' onClick={handleClick}>
                                <FontAwesomeIcon icon={faXmark} size='lg' />
                            </div>
                        </motion.div>
                        <motion.ul className='text-lg my-6 space-y-3 font-semibold flex flex-col'>
                            <li className='cursor-pointer' style={{ navLinkStyles }}>
                                Intro
                            </li>
                            <li className='cursor-pointer' style={{ navLinkStyles }}>
                                About
                            </li>
                            <li className="cursor-pointer" style={{ navLinkStyles }}>
                                Services
                            </li>
                            <li className='cursor-pointer' style={{ navLinkStyles }}>
                                Projects
                            </li>
                            <li className='cursor-pointer' style={{ navLinkStyles }}>
                                Contact
                            </li>
                        </motion.ul>
                    </motion.aside>
                </motion.div>}
        </>
    )
}

export default Navbar
