import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'


const Navbar = () => {
    const [open,setOpen] = useState(false)
    const toggle = ()=> {
        setOpen(!open)
    }
    return (
        <div className='pb-3 pt-5'> 
            <div className='max-w-7xl mx-auto flex items-center justify-between px-6 md:px-0'>
                {/* logo section */}
                <img src={Logo} alt="" className='w-[90px]'/>
                <nav className='md:flex gap-14 hidden'>
                    <ul className='flex gap-16 items-center font-semibold'>
                        <li>Destinations</li>
                        <li>Hotels</li>
                        <li>Flights</li>
                        <li>Bookings</li>
                    </ul>
                    <ul className='flex gap-10 items-center font-semibold'>
                        <li>Login</li>
                        <button className='py-1 px-3 border'>Sign up</button>
                        <select name="lang" id="lang">
                            <option value="EN">EN</option>                          
                        </select>
                    </ul>
                </nav> 
                {
                    open ? <HiMenuAlt3 onClick={toggle} className='text-4xl md:hidden'/> : <HiMenuAlt1 onClick={toggle} className='text-4xl md:hidden'/>
                }
            </div>
            <ResponsiveMenu open={open}/>
        </div>
    )
}

export default Navbar
