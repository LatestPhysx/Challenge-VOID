import React from 'react'
import FirstImage from '../../assets/Digital.png'
import SecondImage from '../../assets/QuizFootball.png'
import ThirdImage from '../../assets/Tomboladigitale.png'
import FourthImage from '../../assets/Pronostics.png'
import RightArrow from '../../assets/GreenRightArrow.svg'
import { motion } from 'motion/react'

const GamesSection = () => {

    const items: Array<Object> = [
        {
            imageLink: FirstImage,
            title: "Album Digital 2025",
            subtitle: "Collection de cartes avec échanges et défis."
        },
        {
            imageLink: SecondImage,
            title: "Quiz Football",
            subtitle: "Questions sur l'actualité et l'histoire du foot."
        },
        {
            imageLink: ThirdImage,
            title: "Tombola digitale",
            subtitle: "Tirages au sort avec lots sponsorisés."
        },
        {
            imageLink: FourthImage,
            title: "Pronostics",
            subtitle: "Prédictions de matchs et classements."
        },
    ]

    return (
        <motion.div initial={{ y: 100 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} whileInView={{ y: 0 }} className='w-full bg-[#F8FAFC] gap-5 flex flex-col py-24 px-8 items-center'>
            <span className='text-3xl text-[#0F172A] poppins-bold'>Catalogue de jeux</span>
            <span className='text-lg text-[#475569] poppins-regular'>Des mécaniques éprouvées pour engager vos audiences</span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-5'>
                {
                    items.map((item, index) => {
                        return (
                            <div className='rounded-2xl grid grid-cols-1 border h-full border-[#E2E8F0] shadow-[0px_1px_2px_0px_#0000000D]'>
                                <div className='relative w-full rounded-t-2xl'>
                                    {index < 2 ? <span className={`absolute rounded-tr-2xl px-3 py-1 uppercase poppins-semibold text-white rounded-bl-xl top-0 right-0 ${index === 1 ? 'bg-[#475569]' : 'bg-[linear-gradient(90deg,#16A34A_0%,#0B6B3A_100%)]'}`}>{index === 0 ? 'star' : 'BIENTÔT'}</span> : null}
                                    <img className='w-full rounded-t-2xl' src={item.imageLink} alt="" />
                                </div>
                                <div className='bg- h-full w-full px-6 py-7 rounded-b-2xl flex flex-col gap-2'>
                                    <span className='text-xl poppins-semibold text-[#0F172A]'>{item.title}</span>
                                    <span className='text-lg text-[#475569] poppins-regular'>{item.subtitle}</span>
                                    {index === 0 ? <button className='flex mt-3 gap-3 flex-row items-center text-[#16A34A] poppins-medium'>Découvrir <img src={RightArrow} alt="" /></button> : null}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </motion.div>
    )
}

export default GamesSection