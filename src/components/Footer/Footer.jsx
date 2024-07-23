import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiLocationMarker } from "react-icons/hi";
import { MdCall } from "react-icons/md"
import { MdMessage } from "react-icons/md";


const Footer = () => {
  return (
    <section className="bg-gray-900 text-gray-400 px-5">
        <div className="w-full mx-auto text-gray-300">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 py-5">
            {/*first col*/}
            <div className='py-8 px-4 justify-center items-center flex flex-col'>
                <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Esteja Pronto Para Crescer</h1>
                <p>Receba atualizações <span className="font-bold">
                exclusivas
                </span> direto para sua caixa de entrada.</p>
                <br />
                <div className="flex items-center h-10">
                    <input type="text" className='py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-900 border-gray-400 border-2 rounded-md' placeholder='Email'/>
                   <button className='primary-button mx-3'>OK</button>
                </div>
            </div>
        {/*second col*/}
        <div className="grid grid-cols-2 justify-center col-span-2 md:pl-10">
            <div className="flex justify-center items-center">
                <div className='py-8'>
                    <h1 className='text-xl font-bold mb-3'>Links Rápidos</h1>
                    <ul className='flex flex-col gap-3'>
                       <li><a href="#">Home</a></li>
                       <li><a href="#">Sobre</a></li>
                       <li><a href="#">Serviços</a></li>
                       <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </div>
                <div className='py-8 flex flex-col justify-center items-center'>
                    <h1 className='text-xl font-bold mb-3'>Entre em Contato</h1>
                     <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-2'>
                            <HiLocationMarker/>
                            <p>Guarulhos, São Paulo</p>
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <MdMessage />
                            <p>vinipaiva50@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <MdCall/>
                            <p>11 97799-2725</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        {/* bottom section */}
        <div className="hidden sm:block">
            <div className="flex justify-between items-center py-6 border-t-2 border-gray-800">
                <span className="text-sm text-gray-400">
                    Copyright © 2024 VNeris. All rights reserved.
                </span>
                <div className="flex items-center justify-center gap-5 pb-4 text-gray-300 ">
                    <a href="https://github.com/VNeris">
                        <FaGithub className='text-4xl'/>
                    </a>
                    <a href="https://www.instagram.com/viny_paiv4/">
                        <FaInstagram className='text-4xl'/>
                    </a>
                    <a href="https://www.linkedin.com/in/vinicius-paiva-b49b602b6/">
                        <FaLinkedin className='text-4xl'/>
                    </a>                   
                </div>  
                <span className='text-sm text-gray-400 sm:invisible md:visible'>
                    <ul className="flex gap-3">
                        <li>Politicas de Privacidade</li>
                        <li>Termos & Condições</li>
                    </ul>
                </span>              
            </div>
        </div>
    </section>
  )
}

export default Footer