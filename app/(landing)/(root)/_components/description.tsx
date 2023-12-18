"use client"

const Description = () => {
    return ( 
      <div className='mt-[-370px] z-10 relative'>
        <img 
          src='/wave-top.svg'
          alt='wave-top'
          className='w-full h-auto z-5'
        />
        <div className='h-full w-full flex mt-[-30px] z-20 bg-[#F6BEA2]'>
          <div className='h-full flex-[1] justify-between flex'>
            <div></div>
            <img
              alt="logo"
              src="/logo.png"
              className='h-full w-auto'
            />
            <div></div>
          </div>
          <div className='h-full flex-[1.5] pl-20 justify-center pt-10'>
            <h1 className='font-bold text-3xl mb-2 text-amber-900'>Little Skin, Big Promises</h1>
            <p className='w-[75%] text-amber-900 pb-8 text-lg'>
              Unveil the secret to effortlessly glowing skin with Little Skin - the ultimate skincare marvel! Expertly crafted with a blend of nature&apos;s finest ingredients, Little Skin is your new go-to for a rejuvenating and nurturing experience. Our lightweight formula penetrates deep, offering hydration and nourishment without the heaviness. Ideal for all skin types, this gentle yet effective elixir soothes, repairs, and revitalizes, leaving your skin feeling soft, supple, and luminous. Embrace a radiant complexion and the confidence that comes with it, every day with Little Skin. Simple, pure, and irresistibly radiant - that&apos;s the Little Skin promise!
            </p>
            <button className='w-[150px] rounded-3xl bg-[#6622AA] p-2'>
              <p className='text-slate-200 text-lg font-light uppercase'>Book Now</p>
            </button>
          </div>
        </div>
        <img 
          src='/wave-top.svg'
          alt='wave-bottom'
          className='w-full h-auto z-20 rotate-180 mt-[-2px]'
        />
      </div>
     );
}
 
export default Description;