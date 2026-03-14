import React from 'react'
import { motion } from 'motion/react'
import ballImage from '../../assets/Ball_Image.svg'
import GreenCheck from '../../assets/GreenCheck.svg'
import PhoneImage from '../../assets/Phone.svg'
import CollectionImage from '../../assets/Collection.svg'
import GiftImage from '../../assets/Gift.svg'
import NetworkImage from '../../assets/Network.svg'
import CalendarImage from '../../assets/Calendar.svg'

const DemoSection = () => {

    const items: Array<Object> = [
        {
            imagePath: PhoneImage,
            title: "Activation instantanée",
            subtitle: "QR codes uniques sur chaque produit"
        },
        {
            imagePath: CollectionImage,
            title: "Collection digitale",
            subtitle: "Cartes de joueurs, raretés, échanges"
        },
        {
            imagePath: GiftImage,
            title: "Récompenses exclusives",
            subtitle: "Tirages au sort, lots partenaires, expériences VIP"
        },
        {
            imagePath: NetworkImage,
            title: "Analytics avancés",
            subtitle: "Dashboard temps réel, insights consommateurs"
        },
    ];

    return (
        <motion.div initial={{ x: 1000 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} whileInView={{ x: 0 }} className='w-full border border-[#0000001A] p-1 lg:p-5 grid grid-cols-1 lg:grid-cols-2 bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F5F5F5_100%)] mx-auto'>
            <div className='h-full flex items-center justify-center'>
                <img className='h-full min-w-2/3 ' src={ballImage} alt="" />
            </div>
            <div className='flex flex-col p-3 gap-5'>
                <div className='p-2 rounded-full flex gap-3 items-center bg-[#DCFCE7] w-fit poppins-medium text-[#0B6B3A]'><img src={GreenCheck} alt="" /> Solution complète</div>
                <span className='text-5xl poppins-bold text-[#0F172A]'>Le terrain de jeu digital de votre marque</span>
                <span className='text-2xl text-[#475569] poppins-regular'>YouCanWin transforme vos produits en expériences interactives. Chaque achat devient une opportunité d'engagement avec vos consommateurs.</span>
                {
                    items.map((item) => {
                        return (
                            <div className='flex flex-col gap-3'>
                                <div className='flex gap-5'>
                                    <span><img className='w-12' src={item.imagePath} alt="" /></span>
                                    <div className='flex flex-col'>
                                        <span className='text-xl text-[#0F172A] poppins-semibold'>{item.title}</span>
                                        <span className='text-lg text-[#475569] poppins-regular'>{item.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <button className='hover:cursor-pointer bg-[#DC2626] text-white rounded-lg py-3 px-5 w-fit poppins-medium text-lg flex items-center gap-3'>Planifier une démo <img src={CalendarImage} alt="" /></button>
            </div>
        </motion.div>
    )
}

export default DemoSection