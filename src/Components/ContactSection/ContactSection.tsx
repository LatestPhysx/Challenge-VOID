import React from 'react'
import RedCalendar from '../../assets/RedCalendar.svg'
import WhiteMail from '../../assets/WhiteMail.svg'
import { motion } from 'motion/react'

const ContactSection = () => {
    return (
        <motion.div initial={{ x: 300 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} whileInView={{ x: 0 }} className='w-full py-24 px-16 flex flex-col gap-5 items-center text-center justify-center bg-[linear-gradient(90deg,#DC2626_0%,#B01219_100%)]'>
            <span className='text-5xl poppins-bold text-white'>Prêt à transformer votre marketing ?</span>
            <span className='text-xl text-[#FEF2F2] poppins-regular'>Rejoignez les marques qui engagent leurs fans avec YouCanWin</span>
            <div className='flex flex-col lg:flex-row mx-auto w-full p-1 grid-cols-2 gap-2 items-center justify-center'>
                <button className='py-4 px-8 flex gap-3 items-center justify-center bg-white rounded-lg text-[#B01219] poppins-medium'><img src={RedCalendar} alt="" /> Planifier une démo gratuite</button>
                <button className='py-4 h-full w-fit px-8 flex gap-3 items-center justify-center bg-white/10 border-2 border-white/30 rounded-lg text-[#B01219] poppins-medium text-white'><img src={WhiteMail} alt="" /> Nous contacter</button>
            </div>
        </motion.div>
    )
}

export default ContactSection