import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SocialMediaBallContainer = () => {
    return (
        <div className='flex gap-4'>
            <Link href='https://www.youtube.com/'>
                <div className='size-[60px] bg-white hover:bg-[#bebebe] rounded-full flex items-center justify-center cursor-pointer'>
                    <Image
                        src='/icons/YouTube.svg'
                        alt='YouTue'
                        width={43}
                        height={43}
                    />
                </div>
            </Link>
            <Link href='https://www.instagram.com/'>
                <div className='size-[60px] bg-white hover:bg-[#bebebe] rounded-full flex items-center justify-center cursor-pointer'>
                    <Image
                        src='/icons/Instagram.svg'
                        alt='Instagram'
                        width={35}
                        height={43}
                    />
                </div>
            </Link>
            <Link href='mailto:placeholder@example.com'>
                <div className='size-[60px] bg-white hover:bg-[#bebebe] rounded-full flex items-center justify-center cursor-pointer'>
                    <Image
                        src='/icons/Email.svg'
                        alt='Email'
                        width={50}
                        height={43}
                    />
                </div>
            </Link>
        </div>
    )
}

export default SocialMediaBallContainer