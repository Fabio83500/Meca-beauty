import React from 'react'
import Image from 'next/image'
import imgOngles from "@/public/assets/images/imgOngles.jpg"

export default function Ongles() {
    const textOngle = `LE BROW LIFT EST UNE TECHNIQUE CONSISTANT À REHAUSSER ET ÉPAISSIR LES SOURCILS, TOUT EN FIXANT LEUR MOUVEMENT.
  UNE TECHNIQUE VENUE DE RUSSIE, QUI PEUT ÊTRE RÉALISÉ SANS LA POSE D'UN FILM PROTECTEUR AUTOUR DES YEUX. LE BROW LIFT
  EST UNE TECHNIQUE PROCHE DU REHAUSSEMENT DE CILS. CHAQUE POIL EST FIXÉ DE FAÇON PRÉCISE. LES POILS SONT TRAVAILLÉS
  DE MANIÈRE À DEVENIR PLUS FACILES À COIFFER, AFIN DE LEUR DONNER LA FORME VOULUE. ON PEUT COMPLÉTER LE TOUT PAR UNE
  TEINTURE, POUR INTENSIFIER LA COULEUR DU SOURCIL.`;

     const textBrowLift = `LE BROW LIFT EST UNE TECHNIQUE CONSISTANT À REHAUSSER ET ÉPAISSIR LES SOURCILS, TOUT EN FIXANT LEUR MOUVEMENT.
  UNE TECHNIQUE VENUE DE RUSSIE, QUI PEUT ÊTRE RÉALISÉ SANS LA POSE D'UN FILM PROTECTEUR AUTOUR DES YEUX. LE BROW LIFT
  EST UNE TECHNIQUE PROCHE DU REHAUSSEMENT DE CILS. CHAQUE POIL EST FIXÉ DE FAÇON PRÉCISE. LES POILS SONT TRAVAILLÉS
  DE MANIÈRE À DEVENIR PLUS FACILES À COIFFER, AFIN DE LEUR DONNER LA FORME VOULUE. ON PEUT COMPLÉTER LE TOUT PAR UNE
  TEINTURE, POUR INTENSIFIER LA COULEUR DU SOURCIL.`;

  const textEpilation = `L’épilation au fil est une méthode traditionnelle et naturelle venue d’Inde et du Moyen-Orient, qui permet d’obtenir une épilation précise, douce et sans produits chimiques. Elle consiste à utiliser un fil de coton torsadé pour attraper et retirer les poils à la racine, même les plus fins. Cette technique offre un tracé net est parfaitement dessiné, idéal pour les sourcils, mais aussi pour le visage (lèvre, menton, joues, etc) `;

  const textStrass = `Les strass dentaires sont des petits bijoux esthétique que l’on pose délicatement sur la dent pour sublimer le sourire et apporter une touche d’originalité ou de glamour. La poste se fait sans douleur sans percer et sans abîmer la dent. Le strass est simplement collé à l’aide d’un gel dentaire professionnel et polymérisé à la lumière.`;


    return (
        <>
            <div class="grid md:grid-cols-4 gap-6 items-stretch   mx-10">
                <div class="bg-white shadow-lg rounded-2xl shadow-md p-6 text-[#7a7a7a] ">
                    <span className='text-4xl'>💅🏽</span>
                    <span class="block text-xl text my-2 font-bold">Beauté des ongles  </span>
                        <p>{textOngle.slice(0, 250) + '...' }</p>
                </div>
                    <div class="bg-white shadow-lg rounded-2xl shadow-md p-6 text-[#7a7a7a] ">
                    <span className='text-4xl'>💄</span>
                    
                    <span class="block text-xl my-2 font-bold">Le brow lift </span>
                        <p>{textBrowLift.slice(0, 250) + '...' }</p>
                </div>
                   <div class="bg-white shadow-lg rounded-2xl shadow-md p-6 text-[#7a7a7a] ">
                    <span className='text-4xl'>🪡</span>
                    
                    <span class="block text-xl my-2 font-bold">Épilation au fil </span>
                        <p>{textEpilation.slice(0, 250) + '...' }</p>
                </div>
                 <div class="bg-white shadow-lg rounded-2xl shadow-md p-6 text-[#7a7a7a] ">
                    <span className='text-4xl'>💎</span>
                    
                    <span class="block text-xl my-2 font-bold">Strass dentaire </span>
                        <p>{textStrass.slice(0, 250) + '...' }</p>
                </div>
                
            </div>


        </>
    )
}