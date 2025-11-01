import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <footer className=" bg-[#95216C] shadow-sm ">
          <div className="w-full text-white max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="#accueil" className="flex justify-center items-center mb-4 sm:mb-0 space-x-3 ">
              </a>
              <ul className="font-medium sm:mb-0 ">
                <li>
                  <a href="/#quiSommesNous" className="hover:underline me-4 md:me-6">Qui sommes nous </a>
                </li>
                <li>
                  <a href="/#ongles" className="hover:underline me-4 md:me-6">Beauté des ongles </a>
                </li>
                <li>
                  <a href="/mentions-legales" className="hover:underline me-4 md:me-6">Mention légales</a>
                </li>
              </ul>
            </div>
            <div className='flex space-x-4 items-center mt-4 lg:mt-0 justify-center '>
             
              <Link href="https://www.instagram.com/meca___beauty/">
                <svg xmlns="http://www.w3.org/2000/svg" fill='white' x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg></Link>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm ">© 2025
              <a href="#accueil" className="hover:underline"> Meca-Beauty </a>.Tous droits réservés .</span>
          </div>
        </footer>
        </>
    )
}
