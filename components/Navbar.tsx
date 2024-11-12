"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div>
            {/* DESKTOP */}
            <div className='hidden md:block bg-black h-[100px]'>
                <nav className='max-w-[1440px] h-full mx-auto px-7'>
                    <div className='flex h-full items-center'>
                        <Image src='/logos/white-icon.png' alt='logo' width={100} height={100} className='absolute lg:w-[100px] w-[75px]' />
                        <div className='flex justify-center w-full gap-16 items-center'>
                            <Link
                                href="/about"
                                className='text-white lg:text-[24px] text-[16px]'>
                                ABOUT ME
                            </Link>
                            <div className='bg-white w-[1px] h-[40px]' />
                            <Link
                                href="/portfolio"
                                className='text-white lg:text-[24px] text-[16px]'>
                                PORTFOLIO
                            </Link>
                            <div className='bg-white w-[1px] h-[40px]' />
                            <Link
                                href="/news"
                                className='text-white lg:text-[24px] text-[16px]'>
                                NEWS
                            </Link>
                        </div>
                    </div >
                </nav >
            </div >
            {/* MOBILE */}
            <div className='md:hidden'>
                <nav>
                    <div className='flex justify-between items-center'>
                        <div>
                            <Image src='/logos/black-icon.png'
                                alt='logo'
                                width={100}
                                height={100}
                                onClick={handleMenu}
                                className={`w-[75px] fixed top-3 left-3 transition-all duration-500 ${isMenuOpen ? 'rotate-[360deg] opacity-0' : 'block'}`} />
                            <div className={`${isMenuOpen ? 'bg-black opacity-100' : 'opacity-0'} transition-all duration-500  w-[400px] h-screen`}>
                                <Image src='/logos/white-icon.png'
                                    alt='logo'
                                    width={100}
                                    height={100}
                                    onClick={handleMenu}
                                    className={`w-[75px] fixed top-3 left-3 transition-all duration-500 ${isMenuOpen ? 'rotate-[360deg] ' : 'opacity-0'}`} />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar