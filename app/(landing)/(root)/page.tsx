/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import Description from './_components/description'
import CollectionInfo from './_components/collection-info'

export default function Home() {
  return (
    <div className='w-full h-full bg-[#F6BEA2]'>
      <div className="h-[1000px] z-0">
        <Navbar />
        <img 
          src='/cosmetic.png'
          alt="hero-section"
          className='absolute w-full h-auto bg-auto bg-center '
        />
      </div>
      <Description />
      <CollectionInfo />
      <Footer />
    </div>
  ) 
}
