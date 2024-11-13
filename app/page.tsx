import Card from '@/components/Card'
import Hero from '@/components/Hero'
import React from 'react'

const Homepage = () => {
  return (
    <main className='min-h-screen h-auto'>
      <Hero />
      <div className='md:block hidden'>
        <h1 className='text-[36px] text-center mt-[72px]'>RECENT NEWS</h1>
        <div className='flex flex-col items-center gap-[40px] my-[40px]'>
          <Card
            title='This is a card with a title and no description or image'
          />
          <Card
            title='This is a card with a title and description but no image'
            description='This is a description for the card'
          />
          <Card
            title='This is a card with a title, description, and image'
            description='This is a description for the card'
            image='https://random.imagecdn.app/500/150'
          />
          <Card
            description='This is a card with a description and image but no title'
            image='https://random.imagecdn.app/500/150'
          />
        </div>
      </div>
    </main>
  )
}

export default Homepage