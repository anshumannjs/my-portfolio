import React from 'react'
import ProjectCard1 from './ProjectCard1'
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation,Pagination } from 'swiper';
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function ProjectSlider() {

    const projectArr=['glassball','notarybooking','WebsiteBuilder','traveltrek','noteapp','newsnjs','fooddelivery'];

  return (
    <div id='project' className='mb-10 mt-20'>
      <h1 className='mx-auto text-center text-cyan-400 font-bold text-4xl mb-5'>My Projects</h1>
        <Swiper
            className=''
            modules={[Navigation,Pagination]}
            slidesPerView={1}
            navigation={true}
            pagination={{clickable:true}}
            loop={true}
        >
          {
            projectArr.map((i)=>{
              return(
                <SwiperSlide> <ProjectCard1 project={i}/> </SwiperSlide>
              )
            })
          }
        </Swiper>
    </div>
  )
}
