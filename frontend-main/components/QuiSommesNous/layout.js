import React from 'react'
import Image from 'next/image'
import imgQuiSommesNous from "@/public/assets/images/serviceOngle.jpg"

export default function QuiSommesNous() {
    return (
        <>
            <div id='quiSommesNous' className='my-20 grid md:grid-cols-2 gap-x-20 '>
                <div>
                    <h2 className='text-2xl font-semibold text-center text-[#ED069E] mb-10'>Qui sommes nous </h2>
                    <p className=' my-4'>
                        Bienvenue chez <span className='text-[#ED069E]'>MECA Beauty</span>, l’institut où beauté, 
                        douceur et passion se rencontrent. <br /> <br />
                        Je m’appelle Anaïs, je suis la <span className=' text-[#ED069E]'>fondatrice de MECA Beauty</span>, 
                        passionnée par le monde des ongles depuis 2018,
                        j’ai décidé de transformer cette passion en métier, en obtenant mon <span className='text-[#ED069E]'>
                            diplôme de prothésiste ongulaire</span>  en
                        septembre 2024. Amoureuse du rose et du détail, j’aime créer une ambiance chaleureuse et bienveillante ou
                        chaque cliente se sent unique, belle et écoutée. <br /> <br />

                        Chez MECA Beauty, on y retrouve :<br /> <br />
                        - <span className='text-[#ED069E] font-medium'>Beauté des ongles : </span> manucure, pose de gel, nail art personnalisé, soins des cuticules, ... À partir de 40 €,
                        pour une pose complète.<br /> <br />

                        - <span className='text-[#ED069E] font-medium'>Embellissement du regard</span> 
                        (Brow Lift, diplômée depuis septembre 2024) : restructuration et teinture des sourcils.
                        À partir de 25 €. <br /> <br />

                        - <span className='text-[#ED069E] font-medium'>Épilation au fil : </span> pour un résultat net et précis (diplômée depuis mai 2025). À partir de 7 €. <br /> <br />

                        - <span className='text-[#ED069E] font-medium'>Strass dentaire :</span> apportez une touche d’éclat et d’originalité à votre sourire (diplômée depuis octobre 2025). <br /> <br />

                        Chaque prestation est réalisée avec soin, dans le respect de vos envies et de votre style,
                         pour un résultat à la fois élégant, moderne et durable. MECA Beauty,
                          c’est un lieu pensé pour vous : <span className=' text-[#ED069E]'>un espace rose</span>, girly et apaisant, ou vous pouvez prendre du 
                          temps pour vous, <span className=' text-[#ED069E]'>vous détendre et ressortir avec le sourire.</span>
                        Mon objectif est simple, que vous vous sentiez belle, confiante et épanouie après chaque rendez-vous. <br /> <br />

                        Prenez rendez-vous et venez découvrir l’expérience MECA Beauty, là où la beauté rencontre la passion.
                    </p>
                </div>
                <Image src={imgQuiSommesNous} alt="Qui sommes nous" className="w-full h-[55rem] object-cover rounded-2xl" />
            </div>
        </>
    )
}