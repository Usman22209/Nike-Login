import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    const [open, setopen] = useState(false)
    //toogle menu function to hide and unhide menu bar in mobile devices
    const togglemenu = () => {
        let menu = document.getElementById("menu");
        let img = document.getElementById("img")
        if (menu.classList.contains("opacity-0")) {
            setopen(true)
            menu.classList.replace("opacity-0", "opacity-100")
            img.classList.replace("w-10", "w-8")
        } else {
          
            menu.classList.replace("opacity-100", "opacity-0")
            img.classList.replace("w-8", "w-10")
            setopen(false)
        }
    }
    return (
        <div className='flex flex-row container mx-auto justify-between mt-2'><Link to="/">
            <img src="Logo.jfif" alt="" className='ml-2 h-16' /></Link>
            <div className='flex flex-col sm:flex-row items-end sm:items-center min-w-[50vw] lg:min-w-[60vw] justify-between absolute sm:relative right-2 top-14 sm:top-auto menu bg-white h-[60vh] sm:h-auto opacity-0 sm:opacity-100 z-10' id='menu'>
                <ul className='sm:*:border-none *:border  min-w-[50vw] lg:min-w-[60vw] text-center flex flex-col sm:flex-row *:py-2 *:cursor-pointer *:mx-[10px] *:font-bold *:widt'><li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li></ul>
                <Link to="/sign" className='text-white w-[90%] bg-red-600 sm:px-4 text-center hover:bg-red-700  mr-auto sm:mr-2 py-1 rounded-sm'>
                    <button  onClick={togglemenu}>Login</button></Link>
            </div>
            //changing hamburger to close based on the value of open
            <img id='img' src={open ? "close.svg" : "hamburger.svg"} className='w-10 visible sm:hidden absolute right-1 menu ' onClick={togglemenu} alt="" />
        </div>
    )
}
