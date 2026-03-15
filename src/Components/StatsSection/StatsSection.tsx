import React from 'react'
import GreenArrow from '../../assets/GreenUpArrow.svg'
import PeopleImage from '../../assets/GreenGroup.svg'
import GreenStar from '../../assets/GreenStar.svg'
import GreenCircle from '../../assets/GreenStar.svg'
import { motion } from 'motion/react'

const StatsSection = () => {

    const items:Array<Object> = [
        {
            imageLink: GreenArrow,
            title: "500K+",
            subtitle: "Interactions mensuelles"
        },
        {
            imageLink: PeopleImage,
            title: "50+",
            subtitle: "Marques partenaires"
        },
        {
            imageLink: GreenStar,
            title: "98%",
            subtitle: "Taux de satisfaction"
        },
        {
            imageLink: GreenCircle,
            title: "24/7",
            subtitle: "Support technique"
        },
    ];

  return (
    <motion.div initial={{ x: 100 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} animate={{ x: 0 }} className='bg-white border-t border-[#E5E7EB] w-full py-16 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5'>
        {
            items.map((item, index) => {
                return(
                    <div className='flex flex-col gap-3 p-5 items-center justify-center'>
                        <img src={item.imageLink} alt="" />
                        <span className='text-4xl poppins-bold text-[#0F172A]'>{item.title}</span>
                        <span className='text-lg text-center text-[#475569] poppins-regular'>{item.subtitle}</span>
                    </div>
                );
            })
        }
    </motion.div>
  )
}

export default StatsSection