import React from 'react'
import MoonImage from '../../assets/Moon.svg'
import EnergyImage from '../../assets/Energy.svg'
import HeartImage from '../../assets/Heart.svg'
import { motion } from 'motion/react'

const TransformSection = () => {

    const items:Array<Object> = [
        {
            imageLink: EnergyImage,
            title: "Engagement immédiat",
            subtitle: "Chaque produit devient une opportunité de jeu"
        },
        {
            imageLink: HeartImage,
            title: "Fidélisation naturelle",
            subtitle: "Les clients reviennent pour compléter leur collection"
        },
        {
            imageLink: MoonImage,
            title: "Viralité organique",
            subtitle: "Les fans partagent et échangent entre eux"
        }
    ];


  return (
    <motion.div initial={{ x: 100 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} animate={{ x: 0 }} className='w-full py-24 px-5 bg-[linear-gradient(90deg,_#16A34A_0%,_#0B6B3A_100%)] text-white flex flex-col gap-5 items-center'>
        <span className='text-4xl poppins-bold'>Transformez vos ventes en expérience mémorable</span>
        <span className='text-center text-[#F0FDF4] poppins-regular text-lg'>YouCanWin offre à vos clients plus qu'un produit : une expérience interactive <br /> complète autour du football</span>
        <div className='my-5 w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                items.map((item) => {
                    return (
                        <div className='px-5 py-16 bg-[#FFFFFF1A] rounded-2xl backdrop-blur-md flex flex-col gap-3 items-center justify-center text-center'>
                            <img src={item.imageLink} alt="" />
                            <span className='text-2xl poppins-semibold'>{item.title}</span>
                            <span className='text-md text-[#F0FDF4] poppins-regular'>{item.subtitle}</span>
                        </div>
                    )
                })
            }
        </div>
    </motion.div>
  )
}

export default TransformSection