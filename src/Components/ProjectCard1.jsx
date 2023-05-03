import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCircle, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5, faJava, faCss3, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard1() {
    let imgArr = ["https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg", "https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg", "https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg", "https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"]
    const [num, setNum] = useState(0);

    function handleNext() {
        if (num == 3) {
            setNum(0);
        }
        else {
            setNum(num + 1);
        }
    }

    function handlePrev() {
        if (num == 0) {
            setNum(3);
        }
        else {
            setNum(num - 1);
        }
    }

    return (
        <div className="flex justify-center w-[80%] mx-auto">
            <div className="flex flex-col rounded-lg bg-black text-white shadow-lg dark:bg-neutral-700 md:flex-row border border-black">

                <div className='md:w-[50%] border border-black bg-gray-800'>
                    <div>
                        <img className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={imgArr[num]} alt="" />
                    </div>

                    <div className='flex bottom-0 space-x-5 justify-around'>
                        <FontAwesomeIcon icon={faArrowLeft} onClick={handleNext} />
                        <div className='flex space-x-5 my-auto'>
                            {
                                imgArr.map((x, i) => {
                                    return(
                                        <FontAwesomeIcon icon={faCircle} onClick={(e) => { setNum(i) }} color={`${num == i ? "cyan" : "gray"}`} className='hover:scale-[1.1] text-xs hover:cursor-pointer' />
                                    )
                                })
                            }

                            {/* <FontAwesomeIcon icon={faCircle} onClick={(e) => { setNum(0) }} color={`${num == 0 ? "cyan" : "gray"}`} className='hover:scale-[1.1] text-xs' />
                            <FontAwesomeIcon icon={faCircle} onClick={(e) => { setNum(1) }} color={`${num == 1 ? "cyan" : "gray"}`} className='hover:scale-[1.1] text-xs' />
                            <FontAwesomeIcon icon={faCircle} onClick={(e) => { setNum(2) }} color={`${num == 2 ? "cyan" : "gray"}`} className='hover:scale-[1.1] text-xs' />
                            <FontAwesomeIcon icon={faCircle} onClick={(e) => { setNum(3) }} color={`${num == 3 ? "cyan" : "gray"}`} className='hover:scale-[1.1] text-xs' /> */}
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} onClick={handlePrev} />
                    </div>
                </div>


                <div className="flex flex-col justify-start md:w-[50%] p-5 md:p-10">
                    <h5 className="mb-2 text-xl font-bold text-center text-neutral-800 dark:text-neutral-50">
                        Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </p>

                    <div className='flex w-full justify-between'>
                        <div className='w-[50%] space-y-4'>
                            <div className='font-bold'>
                                Tools
                            </div>

                            <div className='flex justify-between'>
                                <FontAwesomeIcon icon={faReact} />
                                <FontAwesomeIcon icon={faJava} />
                                <FontAwesomeIcon icon={faHtml5} />
                                <FontAwesomeIcon icon={faCss3} />
                            </div>
                        </div>

                        <div className='w-[50%] space-y-4'>
                            <div className='mx-auto text-center font-bold'>
                                Links
                            </div>

                            <div className='flex justify-center'>
                                <FontAwesomeIcon icon={faGithub} className='mr-5' />
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
