import Head from 'next/head'
import React, { useState } from 'react';
import Hero from "@/components/Hero/layout"
import QuiSommesNous from '@/components/QuiSommesNous/layout';
import EmbelissementRegard from '@/components/EmbelissementRegard/layout';
import Services from "@/components/Services/layout"
import EpilationFil from '@/components/EpilationFil/layout';
import StrassDentaire from '@/components/StrassDentaire/layout';
export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>Meca Beauty by Anaïs </title>
        <meta name="description" content="
        Bienvenue chez MECA Beauty, l’institut où beauté, douceur et passion se rencontrent. 
        Je m’appelle Anaïs, je suis la fondatrice de MECA Beauty, passionnée par le monde des ongles depuis 2018, 
        j’ai décidé de transformer cette passion en métier, en obtenant mon diplôme de prothésiste ongulaire en septembre 2024.
         Amoureuse du rose et du détail, j’aime créer une ambiance chaleureuse et bienveillante ou chaque cliente se sent unique, 
         belle et écoutée. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ED069E"></meta>
        <link rel="icon" href="/engine.ico" />
      </Head>

      <section id="accueil">
        <nav className="bg-[#95216C] z-50 relative sticky top-0 shadow-lg">
          <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-0">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            </a>
            <button onClick={handleClick} className="md:hidden text-white">
              {isOpen ? (
                // Icône croix
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icône burger
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
            <div className='hidden md:block'>
              
              <ul className="flex space-x-10 items-center text-white ">
                
                <li><a className="w-full hover:text-[#ED069E]" href="/#accueil">Accueil</a></li>
                <li><a className="w-full hover:text-[#ED069E]" href="/#ongles"> Beauté des ongles</a></li>
                <li><a className="w-full hover:text-[#ED069E]" href="/#quiSommesNous">Qui sommes nous</a></li>
                <li><a className="w-full bg-white px-4 py-1 rounded-2xl text-[#ED069E]" href="/contact">Me contacter</a></li>
              </ul>
            </div>
            {/* Menu Mobile */}
            <div className={`${isOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-[#131615] 
      text-white md:hidden`}>
              <ul className="flex flex-col p-4 space-y-2">
                <li><a href="/#ongles" className="block py-2 px-3">Beauté des ongles</a></li>
                <li><a href="/#quiSommesNous" className="block py-2 px-3">Qui sommes nous</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <Hero />
        <div className='md:relative 2xl:-top-16 md:xl:-top-8 px-4 md:px-8 xl:px-0'>
          <Services />
        </div>
        <div className='max-w-7xl mx-auto px-4 md:px-8 xl:px-0'>
          <QuiSommesNous />
          <EmbelissementRegard />
          <EpilationFil />
          <StrassDentaire />
        </div>
      </section>
    </>
  );
}
