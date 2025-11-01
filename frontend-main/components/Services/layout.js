import React from 'react'
import Image from 'next/image'
import imgOngles from "@/public/assets/images/imgOngles.jpg"

export default function Ongles() {
    const textOngle = `Une prothésiste ongulaire est une professionnelle spécialisée dans 
                        la beauté et le soin des ongles. Son rôle est de sublimer les mains 
                        et les pieds à travers différentes techniques de pose, de renforcement 
                        et de décoration. Elle travaille aussi bien sur l’aspect esthétique que sur la 
                        santé et la protection de l’ongle naturel.`;

     const textBrowLift = `Le brow lift est une technique consistant à rehausser et épaissir les sourcils, tout en fixant leur mouvement.
Une technique venue de Russie, qui peut être réalisée sans la pose d'un film protecteur autour des yeux. Le brow lift
est une technique proche du rehaussement de cils. Chaque poil est fixé de façon précise. Les poils sont travaillés
de manière à devenir plus faciles à coiffer, afin de leur donner la forme voulue. On peut compléter le tout par une
teinture, pour intensifier la couleur du sourcil.`;

  const textEpilation = `L’épilation au fil est une méthode traditionnelle et naturelle venue d’Inde et du Moyen-Orient, qui permet d’obtenir une épilation précise, douce et sans produits chimiques. Elle consiste à utiliser un fil de coton torsadé pour attraper et retirer les poils à la racine, même les plus fins. Cette technique offre un tracé net est parfaitement dessiné, idéal pour les sourcils, mais aussi pour le visage (lèvre, menton, joues, etc) `;

  const textStrass = `Les strass dentaires sont des petits bijoux esthétique que l’on pose délicatement sur la dent pour sublimer le sourire et apporter une touche d’originalité ou de glamour. La poste se fait sans douleur sans percer et sans abîmer la dent. Le strass est simplement collé à l’aide d’un gel dentaire professionnel et polymérisé à la lumière.`;


    return (
        <>
            <div class="grid md:grid-cols-4 gap-6 items-stretch  pt-10 md:mx-10">
                <div class="bg-white shadow-lg rounded-2xl shadow-md p-6 text-[#7a7a7a] ">
                    <span className='text-4xl'>💅🏽</span>
                    <span class="block text-xl text my-2 font-bold">Beauté des ongles  </span>
                        <p>{textOngle.slice(0, 200) + '...' }</p>
                </div>
                    <div class="bg-white shadow-lg rounded-2xl shadow-md p-6 text-[#7a7a7a] ">
                    <span className='text-4xl'>💄</span>
                    
                    <span class="block text-xl my-2 font-bold">Le brow lift </span>
                        <p>{textBrowLift.slice(0, 200) + '...' }</p>
                </div>
                   <div class="bg-white shadow-lg rounded-2xl shadow-md p-6 text-[#7a7a7a] ">
                    <span className='text-4xl'>🪡</span>
                    
                    <span class="block text-xl my-2 font-bold">Épilation au fil </span>
                        <p>{textEpilation.slice(0, 200) + '...' }</p>
                </div>
                 <div class="bg-white shadow-lg rounded-2xl shadow-md p-6 text-[#7a7a7a] ">
                    <span className='text-4xl'>💎</span>
                    
                    <span class="block text-xl my-2 font-bold">Strass dentaire </span>
                        <p>{textStrass.slice(0, 200) + '...' }</p>
                </div>
                
            </div>


        </>
    )
}