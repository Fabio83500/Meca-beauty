import React from 'react'
import Image from 'next/image'
import imgStrass from "@/public/assets/images/imgStrass.jpg"

export default function StrassDentaire() {
    return (
        <>
            <div id='quiSommesNous' className='my-20 grid md:grid-cols-2 gap-x-20 '>
                    <Image src={imgStrass} alt="Qui sommes nous" className="h-96 object-cover rounded-2xl" />
            <div>
                    <h2 className='text-2xl font-semibold text-[#ED069E] mb-2'>Strass dentaire </h2>
                    <p className=' my-4'>
                        Les strass dentaires sont des petits bijoux esthétique que l’on pose délicatement
                         sur la dent pour sublimer le sourire et apporter une touche d’originalité ou de glamour. <br/> <br/>
                          La poste se fait sans douleur sans percer et sans abîmer la dent. 
                          Le strass est simplement collé à l’aide d’un gel dentaire professionnel
                           et polymérisé à la lumière.

                    </p>
                     
                     <div className="flex items-center justify-center mt-20">
                        <a
                        id="numTel" href="tel:"
                            className="shadow-none w-fit rounded-md border-none flex items-center space-x-2 text-sm px-4 py-2.5
                         font-medium text-white hover:bg-red-600 bg-[#ED069E] transition
                          duration-150 ease-in-out">
                            <svg id="numTel" className="w-5 h-5 text-white" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14
                                 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 
                                 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"></path>
                            </svg><span id="numTel" className="block text-xl">Prendre rendez-vous</span>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}