import React from 'react'
import Decore from "../assets/Decore.png"
import HeroImg from "../assets/Heroimg.png"
import { Play } from 'lucide-react'
import Navbar from './Navbar'
import redLine from "../assets/redLine.png"

const Hero = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${Decore})`,
            backgroundSize: 'cover',
             height: '672px',
             width: '100%',
            backgroundRepeat: 'no-repeat'
          }}>
            <Navbar/>
            <div className='max-w-6xl mx-auto flex gap-10 md:gap-0 flex-col md:flex-row items-center justify-center px-6 mt-7'>
                {/* text section */}
                <div className='md:space-y-7 space-y-4 lg:w-[630px] lg:h-[535px]'>
                    <h3 className="font-bold text-[#DF6951] text-sm">BEST DESTINATIONS AROUND THE WORLD</h3>
                    <div className='relative'>
                    <h1 className='lg:text-7xl text-5xl text-[#181E4B] font-bold volkhov-bold lg:w-[545px] z-50'>Travel, enjoy
                        and live a new
                        and full life</h1>
                       <img src={redLine} alt="" className='absolute top-10 lg:top-14 lg:w-[385px] lg:h-[12px] lg:left-58 -z-10'/>
                    </div>
                        <p className='text-[#5E6282] lg:w-[477px] poppins-medium'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                        <div className='flex gap-7'>
                            <button className='bg-yellow-500 text-white py-1 px-3 rounded-md'>Find out more</button>
                            <div className='flex gap-2 items-center'>
                                <span className='bg-[#DF6951] rounded-full p-3'><Play fill='white' className='text-white w-3 h-3'/></span>
                                <p className='text-[#686D77]'>Play Demo</p>
                            </div>
                        </div>
                </div>
                {/* img section */}
                <img src={HeroImg} alt="" className='lg:w-[783px] lg:h-[764px]'/>
            </div>
        </div>
    )
}

export default Hero
