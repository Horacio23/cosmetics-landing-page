const CollectionInfo = () => {
    return ( 
      <div className='h-[700px] mt-[-370px] bg-indigo-400 z-0 relative overflow-hidden'>
          <div className='gradient-01'/>
          <div className='gradient-02'/>
          <div className='gradient-03 '/>
          <div className='gradient-04 '/>
        <div className='absolute right-0 top-20 flex w-full h-[300px] z-20 pt-44'>
          <div className='h-full flex-[1.75] px-36 justify-center '>
              <div className='flex align-baseline justify-start mb-3'>
                
                <img
                    alt="logo"
                    src="/text-logo-white.png"
                    className="sepia-0 px-4 h-15 mt-[-15px] "
                />
                <h1 className='text-3xl mb-2 ml-3 text-slate-100 font-semibold uppercase'>Bed Time collection</h1>

              </div>
              <p className='w-[90%] text-slate-100 pb-8 text-lg'>
                Introducing the &ldquo;Dreamy Nights&rdquo; Collection from Little Skin – your key to a nighttime skincare wonderland. Each product in this line is crafted to pamper your skin as you sleep, blending soothing scents with deep nourishment. Experience rejuvenation overnight and greet each morning with a softer, more luminous complexion. Little Skin&apos;s &ldquo;Dreamy Nights&rdquo; makes every bedtime an opportunity for beauty renewal. Sweet dreams, beautiful skin!
              </p>
              <button className='w-auto rounded-3xl bg-[#E4A0AA] p-3 border-slate-200 border-2 '>
                <p className='text-lg text-slate-900 font-light mx-4 uppercase'>Shop the collection</p>
              </button>
            </div>
            <div className='flex-[1]'>
              <div className='mt-[-20px]'>
                <img
                  src='/bed-time-collection.png'
                  alt='bed-time-collection'
                  className='border-4 border-slate-200 bg-center w-[300px] h-[350px]'
                />
              </div>
            </div>
        </div>
      </div>
     );
}
 
export default CollectionInfo;