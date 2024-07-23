import React from 'react'
import satelite from "../../assets/satelite1.jpg"

const Banner = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                <img data-aos="zoom-in" src={satelite} alt="" className="w-full sm:w-[100%] mx-auto max-h-[350px] object-cover"/>
                </div>
                <div className='space-y-5 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
                    <p data-aos="fade-up" className="text-sky-800 uppercase">Nossa missão</p>
                    <h1 data-aos="fade-up" data-aos-delay="300" className="text-5xl uppercase">Rapidcast</h1>
                    <p data-aos="fade-up" data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi ipsum, unde dolores, excepturi eligendi dolorem error laudantium facere harum consequatur vitae ad. Praesentium quibusdam nisi recusandae hic porro cum! lorem</p>
                    <button data-aos="fade-up" data-aos-delay="700" className="primary-button">Ler mais</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner