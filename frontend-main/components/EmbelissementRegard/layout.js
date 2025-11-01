import React from 'react'
import Image from 'next/image'
import imgQuiSommesNous from "@/public/assets/images/browLift2.jpg"
import Link from 'next/link'
export default function EmbelissementRegard() {
    return (
        <>
            <div id='quiSommesNous' className='my-20 grid md:grid-cols-2 gap-x-20 gap-y-10 '>
                    <Image src={imgQuiSommesNous} alt="Qui sommes nous" className="h-96 object-cover rounded-3xl" />
            <div>
                    <h2 className='text-2xl font-semibold text-[#ED069E] mb-4'>Embelissement du regard</h2>
                    <p className=' my-4'>
                        Le Brow lift, aussi appelé, rehaussement de sourcils, et un soin esthétique,
                        qui permet de discipliner, lifté et redessiner les sourcils de façon naturelle, 
                        sans maquillage permanent. <br /> <br/>
                        Grâce à une technique douce et à des produits spécifiques,
                        les poils des sourcils sont fixés dans une nouvelle direction afin de créer un effet plus fourni, 
                        plus lisse et parfaitement structuré. Ce soin met en valeur le regard en ouvrant visuellement les
                         yeux et en donnant un aspect soigné et élégant.
                    </p>
                    
                     <div className="pt-12 ">
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

        </>
    )
}