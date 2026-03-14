import React from 'react'
import SettingsLogo from '../../assets/GreenSettings.svg'
import Arrow from '../../assets/rightArrow.svg'
import QrCodeImage from '../../assets/QrCode.svg'
import PeopleImage from '../../assets/People.svg'
import SettingsImage from '../../assets/Settings.svg'
import NetworkImage from '../../assets/Network.svg'
import GiftImage from '../../assets/Gift.svg'
import NotificationImage from '../../assets/Notifications.svg'
import DownloadImage from '../../assets/Download.svg'
import CollectionImage from '../../assets/Collection.svg'
import { motion } from 'motion/react'

const GenerationSection = () => {

    const items:Array<Object> = [
        {
            imageLink: QrCodeImage,
            title: "Générateur QR Codes",
            subtitle: "Créez et téléchargez vos QR codes uniques en masse"
        },
        {
            imageLink: PeopleImage,
            title: "CRM Participants",
            subtitle: "Collectez et gérez vos participants avec segmentation avancée"
        },
        {
            imageLink: SettingsImage,
            title: "Configuration jeux",
            subtitle: "Paramétrez entièrement vos jeux : règles, lots, durée, visuels"
        },
        {
            imageLink: NetworkImage,
            title: "Analytics temps réel",
            subtitle: "Suivez vos KPIs : scans, conversions, engagement, ROI"
        },
        {
            imageLink: GiftImage,
            title: "Gestion des lots",
            subtitle: "Définissez vos récompenses et gérez les tirages au sort"
        },
        {
            imageLink: NotificationImage,
            title: "Notifications",
            subtitle: "Envoyez des push, emails et SMS à vos participants"
        },
        {
            imageLink: DownloadImage,
            title: "Export données",
            subtitle: "Téléchargez vos données en CSV, Excel ou via API"
        },
        {
            imageLink: CollectionImage,
            title: "Multi-campagnes",
            subtitle: "Gérez plusieurs campagnes simultanément"
        }
    ];

  return (
    <motion.div initial={{ y: -100 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} whileInView={{ y: 0 }} className='w-full bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F5F5F5_100%)] border border-[#0000001A] px-5 py-24 flex flex-col items-center justify-center gap-5'>
        <div className='px-8 py-1.5 rounded-full bg-[#DCFCE7] text-[#0B6B3A] poppins-medium text-md flex gap-2'>
            <img src={SettingsLogo} alt="" /> Backoffice tout-en-un
        </div>
        <span className='text-4xl poppins-bold text-[#0F172A]'>Gérez tout depuis une interface unique</span>
        <span className='text-center text-lg poppins-regular text-[#475569]'>Notre backoffice intuitif vous permet de créer, configurer et piloter vos <br />campagnes en toute autonomie</span>
        <div className='w-full xl:w-[95%] mx-auto p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
                items.map((item) => {
                    return(
                        <div className='flex flex-col gap-3 py-8 px-9 bg-white border border-[#E2E8F0] rounded-xl'>
                            <img className='w-20' src={item.imageLink} alt="" />
                            <span className='text-xl text-[#0F172A] poppins-semibold'>{item.title}</span>
                            <span className='text-md poppins-regular text-[#475569]'>{item.subtitle}</span>
                        </div>
                    )
                })
            }
        </div>
        <button className='bg-[#16A34A] flex gap-3 py-3 px-12 rounded-lg poppins-medium text-white items-center text-lg'>Demander un accès au backoffice <img src={Arrow} alt="" /></button>
    </motion.div>
  )
}

export default GenerationSection