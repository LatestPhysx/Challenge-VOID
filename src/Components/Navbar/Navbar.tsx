import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import Icon from '../../assets/icon.svg'
import rightArrow from '../../assets/rightArrow.svg'
import CloseIcon from '../../assets/Close.svg'
import SidebarIcon from '../../assets/SidebarIcon.svg'

const Navbar = () => {

    const [sidebarActive, setSidebarActive] = useState<Boolean>(false);
    useEffect(() => {
        if (sidebarActive){
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }

        return () => document.body.style.overflow = "auto";
    },[sidebarActive])

    return (<>
        <motion.nav initial={{ y: -100 }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} animate={{ y: 0 }} className='hidden lg:flex bg-white/95 gap-3 shadow-[0px_1px_2px_0px_#0000000D] backdrop-blur-[12px] w-full min-h-5 py-4 px-8'>
            <div className='flex flex-row justify-center items-center gap-1'>
                <img src={Icon} alt="" />
                <span className='poppins-bold text-2xl'>
                    <span className='bg-[linear-gradient(90deg,_#DC2626_0%,_#B01219_100%)] bg-clip-text text-transparent'>You</span>
                    <span className='text-[#1E293B]'>can</span>
                    <span className='bg-[linear-gradient(90deg,_#16A34A_0%,_#0B6B3A_100%)] bg-clip-text text-transparent'>win</span>
                </span>
                <div className='px-2 py-1 uppercase text-[#0B6B3A] poppins-semibold bg-[#DCFCE7] rounded-full'>games</div>
            </div>
            <div className='flex-1'></div>
            <div className='flex flex-row justify-center items-center text-md capitalize content-center poppins-medium gap-5'>
                <button className='capitalize hover:cursor-pointer'>nos offres</button>
                <button className='capitalize hover:cursor-pointer'>nos jeux</button>
                <button className='capitalize hover:cursor-pointer'>album 2025</button>
                <button className='capitalize hover:cursor-pointer'>À propos</button>
                <button className='hover:cursor-pointer bg-[linear-gradient(90deg,_#16A34A_0%,#0B6B3A_100%)] poppins-medium text-white p-2.5 rounded-lg flex gap-4'>
                    Demander une démo
                    <img src={rightArrow} alt="" />
                </button>
            </div>
        </motion.nav>
        <motion.nav initial={{ y: -100 }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} animate={{ y: 0 }} className='flex w-full lg:hidden p-5 relative'>
            <div className='flex flex-row justify-center items-center gap-1'>
                <img src={Icon} alt="" />
                <span className='poppins-bold text-2xl'>
                    <span className='bg-[linear-gradient(90deg,_#DC2626_0%,_#B01219_100%)] bg-clip-text text-transparent'>You</span>
                    <span className='text-[#1E293B]'>can</span>
                    <span className='bg-[linear-gradient(90deg,_#16A34A_0%,_#0B6B3A_100%)] bg-clip-text text-transparent'>win</span>
                </span>
                <div className='px-2 py-1 uppercase text-[#0B6B3A] poppins-semibold bg-[#DCFCE7] rounded-full'>games</div>
            </div>
            <div className='flex-1'></div>
            <button className='hover:cursor-pointer' onClick={() => setSidebarActive(true)}><img className='w-10' src={SidebarIcon} alt="" /></button>
            <div className={`${sidebarActive ? "opacity-100" : "opacity-0 pointer-events-none"} fixed top-0 left-0 z-20 w-screen h-screen bg-gray-500/50`}>
                <div className={`flex ease-in-out transform z-20 ${sidebarActive ? "translate-x-0" : "translate-x-full"} duration-700 flex-col fixed w-2/3 h-full top-0 right-0 bg-white items-center justify-center`}>
                    <button className='hover:cursor-pointer' onClick={() => setSidebarActive(false)} className='py-2 px-4 poppins-bold absolute top-4 right-0 -translate-x-1/3 text-white'><img className='w-10' src={CloseIcon} alt="" /></button>
                    <div className='flex flex-col justify-center items-center text-md capitalize content-center poppins-medium gap-10 w-full'>
                        <button className='capitalize hover:cursor-pointer'>nos offres</button>
                        <button className='capitalize hover:cursor-pointer'>nos jeux</button>
                        <button className='capitalize hover:cursor-pointer'>album 2025</button>
                        <button className='capitalize hover:cursor-pointer'>À propos</button>
                        <button className='hover:cursor-pointer bg-[linear-gradient(90deg,_#16A34A_0%,#0B6B3A_100%)] poppins-medium text-white p-2.5 rounded-lg flex gap-4'>
                            Demander une démo
                            <img src={rightArrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    </>)
}

export default Navbar