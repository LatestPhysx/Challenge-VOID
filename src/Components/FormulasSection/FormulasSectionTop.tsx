import React from 'react'
import PeopleImage from '../../assets/People.svg'
import QrCodeImage from '../../assets/QrCode.svg'
import WorldImage from '../../assets/World.svg'
import CollectionImage from '../../assets/Collection.svg'
import CloudImage from '../../assets/Cloud.svg'
import { motion } from 'motion/react'

const FormulasSectionTop = () => {

    const items: Array<Object> = [
        {
            imageLink: PeopleImage,
            title: "Utilisateurs",
            subtitle: "De 1K à illimité"
        },
        {
            imageLink: QrCodeImage,
            title: "QR Codes",
            subtitle: "Volume adapté"
        },
        {
            imageLink: WorldImage,
            title: "Couverture",
            subtitle: "Local à mondial"
        },
        {
            imageLink: CollectionImage,
            title: "Albums",
            subtitle: "Standard ou custom"
        },
        {
            imageLink: CloudImage,
            title: "Infrastructure",
            subtitle: "Cloud ou On-Premise"
        },
    ]

    return (<>
        <motion.div initial={{ x: -200 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} whileInView={{ x: 0 }} className='w-full lg:w-[85%] py-24 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
            {
                items.map((item) => {
                    return (
                        <div className='p-3 flex flex-col gap-3 items-center'>
                            <img className='w-14' src={item.imageLink} alt="" />
                            <span className='poppins-semibold text-xl text-[#0F172A]'>{item.title}</span>
                            <span className='poppins-regular text-[#475569]'>{item.subtitle}</span>
                        </div>
                    )
                })
            }
        </motion.div>
    </>)
}

export default FormulasSectionTop