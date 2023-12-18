"use client"

const Footer = () => {
    return ( 
      <div id="footer" className='flex h-full z-20 relative bg-slate-200 justify-between py-8 px-28'>
        <div className='flex-[1]'>
            <img 
                alt="small-logo"
                src="small-logo.png"
                className="h-[200px] w-auto"
            />
        </div>
        <div className='flex flex-col flex-[2] align-middle'>
          <div className='flex flex-col lg:flex-row justify-center'>
            <span className='uppercase font-semibold text-slate-500 text-lg mr-4 pt-1'>Join the mailing list</span>
            <input
              className='bg-slate-100 border-2 border-slate-300 rounded-3xl p-1 pl-3'
              placeholder='Email' 
            />
          </div>
          <div className='flex justify-between align-middle mt-10  text-slate-500 px-0 lg:px-[8%]'>
            <span>Contact Us</span>
            <span>|</span>
            <span>FAQ</span>
            <span>|</span>
            <span>Shipping</span>
            <span>|</span>
            <span>Order Tracking</span>
          </div>
          <div className='flex justify-between mt-4 text-slate-500 lg:px-10 ppercase'>
            <span>Privacy policy</span>
            <span>|</span>
            <span>terms and conditions</span>
            <span>|</span>
            <span>Accessibility</span>
            <span>|</span>
            <span>Cookie policy</span>
          </div>
          <div className=''>

          </div>
        </div>
        <div className='flex-[1]'>
            <div className=" absolute justify-end right-28">
                <img 
                    alt="logo"
                    src="logo.png"
                    className="h-[200px] w-auto right-0"
                />
            </div>
        </div>
      </div>
     );
}
 
export default Footer;