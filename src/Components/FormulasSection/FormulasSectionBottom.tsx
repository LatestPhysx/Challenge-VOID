import React from 'react'
import EnergyImage from '../../assets/EnergyGreen.svg'
import ArrowImage from '../../assets/RedArrow.svg'
import WorldImage from '../../assets/World.svg'
import GreenCheck from '../../assets/GreenCheck2.svg'
import RedCheck from '../../assets/RedCheck.svg'
import { motion } from 'motion/react'

const FormulasSectionBottom = () => {

    const pricingPlans:Array<Object> = [
        {
            imageLink: EnergyImage,
            title: "Starter",
            subtitle1: "Campagne locale",
            paragraph: "Tarification sur mesure selon vos volumes",
            subtitle2: "Idéal pour tester sur un marché",
            checks: [
                "Jusqu'à 1 000 utilisateurs",
                "Jusqu'à 10K QR codes",
                "1 pays / région",
                "Album standard (équipe nationale)",
                "Hébergement Cloud sécurisé",
                "Backoffice simplifié",
                "Support par email",
                "1 marque"
            ],
            buttonText: "Demander un devis"
        },
        {
            imageLink: ArrowImage,
            title: "Scale",
            subtitle1: "Expansion nationale",
            paragraph: "Tarification sur mesure selon vos volumes",
            subtitle2: "Pour des campagnes d'envergure",
            checks: [
                "Jusqu'à 50 000 utilisateurs",
                "QR codes illimités",
                "Multi-pays (jusqu'à 5)",
                "Album complet (toutes les équipes)",
                "Cloud ou On-Premise",
                "Backoffice avancé avec analytics",
                "Support prioritaire 24/7",
                "Jusqu'à 3 marques",
                "API REST disponible"
            ],
            buttonText: "Planifier une démo"
        },
        {
            imageLink: WorldImage,
            title: "Enterprise",
            subtitle1: "Solution globale",
            paragraph: "Tarification sur mesure selon vos volumes",
            subtitle2: "Pour les groupes internationaux",
            checks: [
                "Utilisateurs illimités",
                "QR codes illimités",
                "Déploiement mondial",
                "Albums personnalisés par région",
                "Infrastructure dédiée (On-Premise)",
                "Multi-marques illimité",
                "Développements sur-mesure",
                "Account manager dédié",
                "SLA garanti 99.9%",
                "Formation et onboarding complet"
            ],
            buttonText: "Contactez-nous"
        }
    ];

    return (
        <motion.div initial={{ x: 200 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4, ease: "backInOut" }} whileInView={{ x: 0 }} className='flex flex-col w-full bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F8FAFC_100%)] py-24 px-8 gap-5 items-center'>
            <span className='text-5xl poppins-bold text-[#0F172A]'>Des formules adaptées à votre échelle</span>
            <span className='text-xl text-[#475569] poppins-regular'>Choisissez la solution qui correspond à vos besoins et votre ambition</span>
            <div className='mt-24 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center'>
                {
                    pricingPlans.map((item, index) => {
                        return(
                            <div className={`flex flex-col gap-2 rounded-2xl border ${index === 1 ? 'border-[#FECACA] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]' : 'border-[#E2E8F0]'} px-8 py-14 justify-between h-full relative`}>
                                {index === 1 ? <div className='absolute py-1.5 px-5 rounded-full bg-[linear-gradient(90deg,#DC2626_0%,#B01219_100%)] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white poppins-semibold shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]'>POPULAIRE</div> : null}
                                <img className='w-16' src={item.imageLink} alt="" />
                                <div className='flex flex-col'>
                                    <span className='text-[#0F172A] text-xl poppins-semibold'>{item.title}</span>
                                    <span className='text-md text-[#16A34A] poppins-medium'>{item.subtitle1}</span>
                                </div>
                                <div className='text-[#475569] poppins-medium text-lg'>{item.subtitle2}</div>
                                <p className='border-[#F1F5F9] border-y border-b px-1 py-3.5 text-md poopins-regular text-[#64748B]'>{item.paragraph}</p>
                                <div className='grid grid-cols-1 gap-2'>
                                    {
                                        item.checks.map((check) => {
                                            return(
                                                <span className='flex text-[#475569] poppins-regular flex-row gap-2'><img className='w-5' src={index === 1 ? RedCheck : GreenCheck} alt="" /> {check}</span>
                                            )
                                        })
                                    }
                                </div>
                                <button className={`mt-7 py-3 text-lg poppins-medium rounded-lg ${index === 1 ? 'bg-[#DC2626] text-white' : 'bg-white text-[#334155] border border-[#CBD5E1]'}`}>{item.buttonText}</button>
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default FormulasSectionBottom