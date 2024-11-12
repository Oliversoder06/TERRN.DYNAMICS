import Image from 'next/image'
import React from 'react'
import SocialMediaBallContainer from './SocialMediaBallContainer'

const Footer = () => {
    return (
        <div>
            {/* DESKTOP */}
            <footer className='bg-footer_main hidden md:block'>
                <div className=' h-[205px] px-4 flex items-center justify-between max-w-[1440px] mx-auto'>
                    <Image
                        src='/logos/white-logo.png'
                        alt='logo'
                        width={100}
                        height={100}
                        className='lg:w-[375px] w-[300px]'
                        unoptimized={true}
                    />
                    <SocialMediaBallContainer />
                    <div className='bg-[#D9D9D9] lg:w-[260px] lg:h-[140px] w-[200px] h-[100px] flex items-center justify-center'>
                        <p className='font-bold'>COOL ILLUSTRATION</p>
                    </div>
                </div>
                <div className='h-[50px] bg-footer_dark flex items-center justify-center'>
                    <p className='text-white'>Copyright ©2024, <span className='font-semibold'>TERRN</span>.DYNAMICS</p>
                </div>
            </footer>
            {/* MOBILE */}
            <footer className='bg-footer_main block md:hidden'>
                <div className='h-[300px] flex flex-col items-center justify-center gap-8'>
                    <div className='bg-[#D9D9D9] w-[230px] h-[120px] flex items-center justify-center'>
                        <p className='font-bold'>COOL ILLUSTRATION</p>
                    </div>
                    <SocialMediaBallContainer />
                </div>
                <div className='bg-footer_dark h-[180px] flex items-center flex-col justify-center gap-8'>
                    <Image src='/logos/white-logo.png' alt='logo' width={100} height={100} className='w-[300px] mx-auto' />
                    <p className='text-white'>Copyright ©2024, <span className='font-semibold'>TERRN</span>.DYNAMICS</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer