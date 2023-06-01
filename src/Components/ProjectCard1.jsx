import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCircle, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5, faJava, faCss3, faGithub } from '@fortawesome/free-brands-svg-icons';
import glassball from './ProjectImages/glassball'
import fooddelivery from './ProjectImages/fooddelivery'
import newsnjs from './ProjectImages/newsnjs'
import notarybooking from './ProjectImages/notarybooking'
import noteapp from './ProjectImages/noteapp'
import traveltrek from './ProjectImages/traveltrek'
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation,Pagination } from 'swiper';
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { FaReact } from 'react-icons/fa';

export default function ProjectCard1(props) {
    const projectObj={glassball,fooddelivery,newsnjs,notarybooking,noteapp,traveltrek};
    let currObj=projectObj[props.project];
    let imgArr=Object.values(Object.values(currObj)[0]);
    let icons=Object.values(Object.values(currObj)[3]);

    const [num, setNum] = useState(0);

    function handleNext() {
        if (num == imgArr.length-1) {
            setNum(0);
        }
        else {
            setNum(num + 1);
        }
    }

    function handlePrev() {
        if (num == 0) {
            setNum(imgArr.length-1);
        }
        else {
            setNum(num - 1);
        }
    }

    return (
        <div className="flex justify-center w-[90%] md:h-[55vh] mx-auto mb-10 shadow-lg shadow-cyan-400">
            <div className="flex flex-col rounded-lg bg-black text-white shadow-lg dark:bg-neutral-700 md:flex-row border border-black">

                {/* <div className='md:w-[50%] border border-black bg-gray-800'>
                    <div>
                        <img className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={imgArr[num]} alt="" />
                    </div>

                    <div className='flex bottom-0 space-x-5 justify-around'>
                        <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrev} />
                        <div className='flex space-x-5 my-auto'>
                            {
                                imgArr.map((x, i) => {
                                    return(
                                        <FontAwesomeIcon icon={faCircle} onClick={(e) => { setNum(i) }} color={`${num == i ? "cyan" : "gray"}`} className='hover:scale-[1.1] text-xs hover:cursor-pointer' />
                                    )
                                })
                            }

                        </div>
                        <FontAwesomeIcon icon={faArrowRight} onClick={handleNext} />
                    </div>
                </div> */}

                
                <Swiper
                    className='md:w-[45vw] w-[90vw] border border-black md:rounded-l-lg rounded-t-lg bg-gray-800'
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{clickable:true}}
                    loop={true}
                >
                    {
                        imgArr.map((x,i)=>{
                            return(
                                <SwiperSlide> <img src={imgArr[i]} alt="" className='w-[100%] md:h-[100%]'/> </SwiperSlide>
                            )
                        })
                    }
                </Swiper>


                <div className="flex flex-col justify-start md:w-[45vw] h-[50vh] md:h-auto p-5 md:p-10">
                    <h5 className="mb-2 text-xl font-bold text-center text-cyan-400 dark:text-neutral-50">
                        {currObj.title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 md:mt-[5%]">
                        {currObj.desc}
                    </p>

                    <div className='absolute bottom-14 w-[90vw] md:w-[40vw]'>
                    <div className='flex w-full justify-between'>
                        <div className='w-[70%] space-y-4'>
                            <div className='font-bold'>
                                Tools
                            </div>

                            <div className='flex space-x-5'>

                                {
                                    icons.map((x,i)=>{
                                        return(
                                            x()
                                        )
                                    })
                                }
                                
                            </div>
                        </div>

                        <div className='w-[30%] space-y-4'>
                            <div className='font-bold'>
                                Links
                            </div>

                            <div className='flex space-x-5'>
                                <FontAwesomeIcon icon={faGithub} className='hover:cursor-pointer' onClick={()=>{window.open(currObj.github,'_blank')}}/>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='hover:cursor-pointer' onClick={()=>{window.open(currObj.link,'_blank')}}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
