import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div>
            {/* DESKTOP */}
            <div className='hidden md:flex justify-center items-center relative'>
                {/* HERO BG-IMAGE */}
                <div className='w-full h-[500px] relative'>
                    <Image
                        src='/images/homepage-bg.png'
                        alt='logo'
                        unoptimized={true}
                        layout='fill'
                        objectFit='cover'
                        className='opacity-35'
                    />
                </div>

                {/* HERO TEXT */}
                <div className='absolute flex flex-col items-center lg:gap-7 gap-5'>
                    <Image
                        src='/logos/black-logo.png'
                        alt='logo'
                        width={100}
                        height={100}
                        className='lg:w-[625px] w-[500px]'
                        unoptimized={true}
                    />
                    <p className='text-black lg:text-[24px] text-[20px] max-w-[600px] text-center'>
                        <span className='font-bold'>TERRN</span>.DYNAMICS is a project we're making for a client. It's a project that's going to be a big hit in the future.
                    </p>
                </div>
                <div className="h-[100px] w-full absolute bottom-0 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* MOBILE */}
            <div className='md:hidden'>
                <div className='w-full h-[300px] relative'>
                    <Image
                        src='/images/homepage-bg.png'
                        alt='logo'
                        unoptimized={true}
                        layout='fill'
                        objectFit='cover'
                        className='opacity-35'
                    />
                    <div className="h-[100px] w-full absolute bottom-0 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className='absolute flex flex-col items-center gap-5 w-full top-[20%]'>
                    <Image
                        src='/logos/black-logo.png'
                        alt='logo'
                        width={100}
                        height={100}
                        className='w-[360px]'
                        unoptimized={true}
                    />
                    <p className='text-black text-[16px] max-w-[300px] text-center'>
                        <span className='font-bold'>TERRN</span>.DYNAMICS is a project we're making for a client. It's a project that's going to be a big hit in the future.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero