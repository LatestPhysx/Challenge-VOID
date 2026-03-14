import React from 'react'
import PhoneIcon from '../../assets/PhoneIcon.svg'
import Underline from '../../assets/underline.svg'
import rightArrow from '../../assets/rightArrow.svg'
import Lightbulb from '../../assets/lightbulb.svg'
import { motion } from 'motion/react'

const Section = () => {
  return (
    <motion.div initial={{ x: -1000 }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} animate={{ x: 0 }} className='flex xl:w-[90%] flex-col lg:flex-row items-center content-center mx-auto mt-5 gap-5 p-5'>
        <div className='flex p-3 w-full flex-col gap-5'>
            <span className='poppins-bold text-4xl leading-relaxed xl:leading-tight lg text-5xl xl:text-8xl text-[#0F172A]'>Transformez chaque <span className='text-transparent relative bg-clip-text bg-[linear-gradient(90deg,_#16A34A_0%,_#0B6B3A_100%)]'>produit <div className='absolute bottom-0 left-0 w-full'><img src={Underline} className='w-full' alt="" /></div></span> en expérience de jeu</span>
            <span className='text-3xl leading-relaxed text-[#475569] poppins-regular'>YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification innovantes. <span className='poppins-semibold text-[#0F172A]'>Codes QR, cartes digitales, défis et récompenses.</span></span>
            <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex flex-col'>
                    <span className='poppins-bold text-3xl text-[#0B6B3A]'>500k+</span>
                    <span className='poppins-medium text-md text-[#475569]'>Interactions/mois</span>
                </div>
                <div className='flex flex-col'>
                    <span className='poppins-bold text-3xl text-[#B01219]'>50+</span>
                    <span className='poppins-medium text-md text-[#475569]'>Marques actives</span>
                </div>
                <div className='flex flex-col'>
                    <span className='poppins-bold text-3xl text-[#0B6B3A]'>x3.5</span>
                    <span className='poppins-medium text-md text-[#475569]'>ROI moyen</span>
                </div>
            </div>
            <div className='w-full flex gap-3'>
                <button className='text-white justify-center w-full lg:w-1/4 bg-[linear-gradient(90deg,_#16A34A_0%,_#0B6B3A_100%)] flex items-center p-3 gap-3 rounded-xl shadow-[0px_4px_6px_-4px_#0000001A,_0px_10px_15px_-3px_#0000001A] hover:cursor-pointer'>Voir la démo <img src={rightArrow} alt="" /></button>
                <button className='poppins-medium rounded-[12px] justify-center w-full lg:w-2/4 bg-white border-2 border-[#CBD5E1] text-[#334155] flex items-center p-3 gap-3 hover:cursor-pointer'><img src={Lightbulb} alt="" /> Comment ça marche</button>
            </div>
            <div className='mt-5 mb-3 w-full h-[1px] bg-[#E2E8F0]'></div>
            <div className='flex flex-col'>
                <span className='poppins-medium text-[#64748B] text-lg'>Ils nous font confiance</span>
                <div className='flex flex-col lg:flex-row gap-5 my-5 text-[#94A3B8] poppins-medium'>
                    <span>Maroc Telecom</span>
                    <span>Inwi</span>
                    <span>Orange</span>
                    <span>Carrefour</span>
                </div>
            </div>
        </div>
        <div className='w-full h-full'>
            <img className='w-full' src={PhoneIcon} alt="" />
        </div>
    </motion.div>
  )
}

export default Section