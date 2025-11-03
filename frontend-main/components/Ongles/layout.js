import React from 'react'
import Image from 'next/image'
import imgOngles from "@/public/assets/images/imgOngles.jpg"
import Link from 'next/link'
import gel1 from "@/public/assets/images/gel/gel1.jpg"
import gel2 from "@/public/assets/images/gel/gel2.jpg"
import gel3 from "@/public/assets/images/gel/gel3.jpg"
import gelx1 from "@/public/assets/images/test/americaine1.jpg"
import gelx2 from "@/public/assets/images/test/americaine2.jpg"
import gelx3 from "@/public/assets/images/test/americaine3.jpg"



import semi1 from "@/public/assets/images/semi/semi1.jpg"
import semi2 from "@/public/assets/images/semi/semi2.jpg"
import semi3 from '@/public/assets/images/semi3.jpg'


export default function Ongles() {

    return (
        <>
            <div className='pt-10'>
                <h2 className='text-3xl font-semibold text-center text-[#ED069E] mb-10'>Beauté des ongles </h2>
                <div className=' flex items-center justify-center'>

                   
                </div>




                <div id='ongles' className=' grid md:grid-cols-2 gap-x-20 '>

                    <Image src={imgOngles} alt="Qui sommes nous" className="object-cover h-[57.5rem] rounded-3xl" />
                    <div>
                        <h4 className='text-xl text-[#ED069E] font-medium'>Qu’est-ce qu’une Prothésiste Ongulaire ? </h4>
                         <p className=' mt-4 text-centermb-10' >

                        Une <span className='text-[#ED069E]'>prothésiste ongulaire</span> est une professionnelle
                         spécialisée dans 
                        la beauté et le <span className='text-[#ED069E]'>soin des ongles.</span> Son rôle est de sublimer 
                        les <span className='text-[#ED069E]'>mains </span> 
                        et les <span className='text-[#ED069E]'>pieds </span> à travers différentes techniques de pose,
                        de renforcement 
                        et de décoration. Elle travaille aussi bien sur l’aspect <span className='text-[#ED069E]'>esthétique</span> que sur la 
                        santé et la <span className='text-[#ED069E]'>protection</span> de l’<span className='text-[#ED069E]'>ongle naturel.</span><br/>

                        MECA Beauty – L’art de l’ongle sur mesure <br/>

                        Chez Meca Beauty, chaque pose est réalisée avec <span className='text-[#ED069E]'>précision, passion et créativité.</span><br/>

                        Je vous propose des prestations adaptées à vos envies et à vos besoins, pour des ongles <span className='text-[#ED069E]'>
                         élégants, solides et durables.   </span> <br/><br/>

                        Mes prestations :<br/><br/>

                        <span className='text-[#ED069E]'>-Pose en gel : </span>technique professionnelle permettant d’allonger, renforcer et structurer
                         vos ongles pour un résultat impeccable et longue tenue.<br/><br/>
                        Extension au chablon / poppit : création d’un ongle parfaitement modelé sans capsule,
                         pour un rendu naturel.<br/><br/>
                        <span className='text-[#ED069E]'>-Pose avec des demi-capsules :</span> pour une extension rapide, régulière et résistante.<br/><br/>
                        <span className='text-[#ED069E]'>-Capsules américaines / Gel X :</span> la tendance du moment ! Des capsules préformées pour une pose 
                        rapide et un résultat fin, léger et ultra brillant.<br/><br/>
                        <span className='text-[#ED069E]'>-Vernis semi-permanent :</span> idéal pour celles qui souhaitent une manucure soignée et brillante
                         pendant 2 à 3 semaines sans abîmer l’ongle naturel.
                    </p>
                 
                        
               
                       <div className="flex items-center justify-center  pt-20">
                        <div className="flex items-center justify-center ">
                        <Link
                         href="/contact"
                            className="shadow-none w-fit rounded-2xl border-none flex items-center space-x-2 text-sm px-6 py-3
                         font-medium text-white hover:bg-pink-600 bg-[#ED069E] transition
                          duration-150 ease-in-out">
                            <svg  className="w-5 h-5 text-white" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14
                                 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 
                                 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"></path>
                            </svg><span  className="block text-xl">Prendre rendez-vous</span>
                        </Link>
                    </div>
                    </div>
                    </div>
                  
                </div>
                     <div>
                        <div id='realisations'>
                            <span className='block text-2xl font-semibold text-[#ED069E] mt-10 mb-4 text-center'>Ongle en gel </span>

                            <div className='grid grid-cols-3 gap-x-4 md:gap-x-20'>
                                <Image className='rounded-3xl' src={gel1} />
                                <Image className='rounded-3xl' src={gel2} />
                                <Image className='rounded-3xl' src={gel3} />
                            </div>

                        </div>
                        <div className='my-10'>
                            <span className='block text-2xl font-semibold text-[#ED069E] mb-4 text-center'>Ongle en gel X / Pose américaine </span>
                            <div className='grid grid-cols-3 gap-x-4 md:gap-x-20'>
                                <Image className='rounded-3xl' src={gelx1} />
                                <Image className='rounded-3xl' src={gelx2} />
                                <Image className='rounded-3xl' src={gelx3} />

                            </div>

                        </div>
                        <div>
                            <span className='block text-2xl font-semibold text-[#ED069E] mb-4 text-center'>Semi-permanant </span>
                            <div className='grid grid-cols-3 gap-x-4 md:gap-x-20'>
                                <Image className='rounded-3xl' src={semi1} />
                                <Image className='rounded-3xl' src={semi2} />
                                <Image className='rounded-3xl' src={semi3} />

                            </div>

                        </div>

                    </div>
            </div>

        </>
    )
}