import React from 'react'
export const Main = () => {
    return (
        <div className='flex row sm:mt-[50px] mt-3 '>

            <div id="text" className='sm:ml-16 ml-6 mx-auto'><h1 className='text-[40px] sm:text-[70px] pr-10 sm:mx-auto text-start font-[impact] '>
                YOUR FEET DESERVE THE BEST</h1>
                <p className='text-sm text-gray-500 font-semibold max-w-[80vw] text-start'>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.BEST SERVICES PROVIDER ALL OVER THE WORLD.<br></br><span className='font-bold text-black'>BOOK YOUR ORDER NOW!</span>
                </p>
                <div id="buttons" className='mt-8 *:cursor-pointerflex flex-row w-[80vw] sm:w-auto'>
                    <button className=' bg-red-600 hover:bg-red-700 px-3 py-1 rounded-sm text-white'>Shop Now</button><button className='ml-9 border-2 border-black hover:bg-black hover:text-white transition-all px-3 py-1 rounded-sm font-semibold'>Category</button></div></div>
            <img src="show.png" className='sm:h-[40vw] h-[40vw] mr-5 relative right-[90px] sm:right-0 float-right ' alt="" />
        </div>
    )
}
