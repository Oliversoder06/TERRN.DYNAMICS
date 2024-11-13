import Image from 'next/image'
import React from 'react'

const SocialMediaBallContainer = () => {
    return (
        <div className='flex gap-4'>
            <div className='size-[60px] bg-white hover:bg-[#bebebe] rounded-full flex items-center justify-center'>
                <Image
                    src='/icons/YouTube.svg'
                    alt='facebook'
                    width={43}
                    height={43}
                    className='cursor-pointer'
                />
            </div>
            <div className='size-[60px] bg-white hover:bg-[#bebebe] rounded-full flex items-center justify-center'>
                <Image
                    src='/icons/Instagram.svg'
                    alt='facebook'
                    width={35}
                    height={43}
                    className='cursor-pointer'
                />
            </div>
            <div className='size-[60px] bg-white hover:bg-[#bebebe] rounded-full flex items-center justify-center'>
                <Image
                    src='/icons/Email.svg'
                    alt='facebook'
                    width={50}
                    height={43}
                    className='cursor-pointer'
                />
            </div>
        </div>
    )
}

export default SocialMediaBallContainer