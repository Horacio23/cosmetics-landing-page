"use client"

const Navbar = () => {
    return ( 
        <div className='absolute w-full h-[80px] flex  z-10 justify-between align-middle p-5 px-16'>
          <div className='flex w-[200px] h-full border-[1px] bg-slate-100 rounded-3xl p-2 align-middle'>
            <img 
                src="/search.svg"
                alt="search"
                className="h-4 w-4 mt-1 mx-2 "
            />

            <input className="w-full bg-slate-100 text-slate-400 text-sm pt-[1px]" placeholder="Search"/>
          </div>
          <div className="flex justify-between pt-2 font-semibold w-[50%]">
            <div><span className=" cursor-pointer ">About</span></div>
            <div><span className=" cursor-pointer">Shop</span></div>
            <div className="h-full w-[200px]">
                <img
                    alt="logo"
                    src="/text-logo.png"
                    className="sepia-0 px-4"
                />
            </div>
            <div><span className=" cursor-pointer">Knowledge</span></div>
            <div><span className=" cursor-pointer">Rewards</span></div>
          </div>
          <div className="flex w-[100px] h-full justify-end align-middle pt-3">
            <img 
                src="/heart.svg"
                alt="like"
                className="h-4 w-4 cursor-pointer"
            /> 
            <img 
                src="/profile.svg"
                alt="profile"
                className="h-[15px] w-[15px] ml-2 cursor-pointer"
            /> 
            <img 
                src="/cart.svg"
                alt="cart"
                className="h-[17px] w-[17px] ml-2 cursor-pointer"
            
            /> 
          </div>
        </div>
     );
}
 
export default Navbar;