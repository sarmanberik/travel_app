import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500"> 
        <div className='hero-map'/>
        <div className="relative z-20 flex flex-col xl:w-1/2">
            <Image 
            src="/camp.svg"
            alt='camp'
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
            />
        </div>
        <h1 className='bold-52 lg:bold-88'>
            Putuk Truno Camp Area
        </h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>We want to be each of your journey seeking the  satisfaction of seeing</p>
    </section>
  )
}

export default Hero