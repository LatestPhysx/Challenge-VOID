import React from 'react'
import { motion } from 'motion/react'
import Cart from '../../assets/cart.svg'
import QrCode from '../../assets/QrCode.svg'
import Collection from '../../assets/collection_two.svg'
import GiftRed from '../../assets/GiftRed.svg'
import Puzzle from '../../assets/puzzle.svg'

const ParcourSection = () => {

    const items:Array<Object> = [
        {
            imageLink: Cart,
            title: "Achat produit",
            subtitle: "Le client achète votre produit en magasin"
        },
        {
            imageLink: QrCode,
            title: "Scan QR Code",
            subtitle: "Il scanne le code sur l'emballage"
        },
        {
            imageLink: Collection,
            title: "Déblocage carte",
            subtitle: "Une carte digitale est débloquée"
        },
        {
            imageLink: Puzzle,
            title: "Collection",
            subtitle: "Il complète sa collection"
        },
        {
            imageLink: GiftRed,
            title: "Récompenses",
            subtitle: "Participe aux tirages"
        },
    ]

  return (
    <motion.div initial={{ y: 100 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} whileInView={{ y: 0 }} className='flex flex-col gap-5 py-24 px-5'>
        <div className='flex flex-col gap-5 w-full items-center justify-center'>
            <span className='text-5xl poppins-bold text-[#0F172A]'>Un parcours client simple et engageant</span>
            <span className='text-xl poppins-regular text-[#475569]'>De l'achat du produit à la récompense, en 5 étapes</span>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-10 gap-5 items-center w-full lg:w-[90%] mx-auto justify-between'>
            {
                items.map((item, index) => {
                    return (
                        <div className='flex flex-col items-center text-center h-full justify-between p-2 gap-2 relative'>
                            <div className={`absolute poppins-bold text-white ${index > 2 ? 'bg-[#DC2626]' : 'bg-[#16A34A]'} right-0 top-0 p-1 rounded-full w-8 flex items-center justify-center h-8`}>{index+1}</div>
                            <img src={item.imageLink} alt="" />
                            <span className='text-2xl poppins-semibold text-[#0F172A]'>{item.title}</span>
                            <span className='text-lg poppins-regular text-[#475569]'>{item.subtitle}</span>
                        </div>
                    )
                })
            }
        </div>
    </motion.div>
  )
}

export default ParcourSection