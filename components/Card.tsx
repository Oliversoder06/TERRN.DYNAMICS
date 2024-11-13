import Image from 'next/image';
import React from 'react';

const Card = ({ title, description, image }: { title?: string, description?: string, image?: string }) => {
    return (
        <div className='w-[1040px] min-h-[270px] h-auto py-[16px] border-[1px] border-[#e6e6e6] hover:border-[#585858] flex items-center cursor-pointer'>
            <div className='size-[236px] border-[#D9D9D9] mx-[16px]'>
                <Image
                    src={image || "https://via.placeholder.com/236"}
                    alt={title || "No title is available"}
                    className='w-full h-full object-cover'
                    unoptimized={true}
                    width={236}
                    height={236}
                />
            </div>
            <div className='max-w-[620px] flex flex-col gap-[15px]'>
                <h1 className='text-black font-bold text-[32px] leading-[41.6px]'>{title || "No title is available"}</h1>
                <div className='bg-black h-[1px] w-[200px]' />
                <p className='text-black text-[20px] leading-[26px]'>{description || "No description is available"}</p>
            </div>
        </div>
    );
}

export default Card;
