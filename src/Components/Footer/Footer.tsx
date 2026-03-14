import React from 'react'
import Icon from '../../assets/icon.svg'
import Facebook from '../../assets/Facebook.svg'
import Twitter from '../../assets/Twitter.svg'
import Instagram from '../../assets/Instagram.svg'
import Linkedin from '../../assets/Linkedin.svg'
import Link from '../../assets/Link.svg'
import GreenShield from '../../assets/GreenShield.svg'
import { motion } from 'motion/react'

const Footer = () => {
    return (
        <motion.div initial={{ y: -200 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} whileInView={{ y: 0 }} className='w-full bg-[#F8FAFC] py-14'>
            <div className='w-full grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-5 p-5 lg:w-[95%] mx-auto'>
                <div className='flex flex-col gap-5 items-start justify-center md:p-5'>
                    <div className='flex flex-row gap-5 items-center justify-center'>
                        <img className='w-12' src={Icon} alt="" />
                        <span className='poppins-bold text-2xl'>
                            <span className='bg-[linear-gradient(90deg,_#DC2626_0%,_#B01219_100%)] bg-clip-text text-transparent'>You</span>
                            <span className='text-[#1E293B]'>can</span>
                            <span className='bg-[linear-gradient(90deg,_#16A34A_0%,_#0B6B3A_100%)] bg-clip-text text-transparent'>win</span>
                        </span>
                    </div>
                    <span className='poppins-regular text-[#475569]'>Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d'Agency.Africa.</span>
                    <div className='flex gap-5 flex-row items-center justify-center'>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="" /></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="" /></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="" /></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="" /></a>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><span className='text-[#0F172A] mb-1 text-xl poppins-semibold'>Liens rapides</span></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><span className='text-[#475569] poppins-regular'>Nos offres</span></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><span className='text-[#475569] poppins-regular'>Nos jeux</span></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><span className='text-[#475569] poppins-regular'>Album 2025</span></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><span className='text-[#475569] poppins-regular'>À propos</span></a>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='text-[#0F172A] mb-1 text-xl poppins-semibold'>Contact & Légal</span>
                    <a href="mailto:games@agency.africa"><span className='text-[#475569] poppins-regular'>games@agency.africa</span></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><span className='text-[#475569] poppins-regular'>Mentions légales</span></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><span className='text-[#475569] poppins-regular flex flex-row gap-2'>Protection des données (CNDP) <img className='w-3' src={Link} alt="" /></span></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><span className='text-[#475569] poppins-regular'>Conditions d'utilisation</span></a>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 gap-5 p-5 md:p-0 xl:grid-cols-3 md:min-h-20 xl:p-10'>
                <span className='flex items-start md:justify-center text-lg text-[#475569] poppins-regular'>© 2025 Youcanwin. Tous droits réservés.</span>
                <span className='flex items-end md:justify-center'>
                    <div className='py-2 px-6 flex flex-row gap-2 items-center justify-center bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg text-[#0B6B3A] poppins-medium'><img src={GreenShield} alt="" /> Site conforme CNDP Maroc</div>
                </span>
                <span className='flex items-start md:justify-center text-[#475569] poppins-regular'>
                    Un service de&nbsp;<span className='text-[#0B6B3A] poppins-semibold'>Agency.Africa</span>&nbsp;—&nbsp;<a target='_blank' href="http://games.agency.africa">games.agency.africa</a>
                </span>
            </div>
        </motion.div>
    )
}

export default Footer