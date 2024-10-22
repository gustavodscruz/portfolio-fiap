"use client"

import Section from "@/components/MotionSection/section";
import { Tarefa, tarefas } from "@/utils/fakelist";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {FaCheckSquare, FaFilter, FaTrash } from "react-icons/fa";

export default function Challenge() {
  const [openDisplay, setOpenDisplay] = useState(false)
  
  const toggleDisplay = () => {
    setOpenDisplay(!openDisplay);
  };

  const handleAuthorChoose = (autor : Tarefa['autor']) => {
    setSelectAuthor(autor)
  }

  const clearAuthorChoose = () => {
    setSelectAuthor(false)
    if (openDisplay) setOpenDisplay(false)
  }

  const [selectAuthor, setSelectAuthor] = useState<boolean | Tarefa['autor']>(false) 


  return (
    <div className="mt-8 flex flex-col gap-6">
      <Section>
          <div className="flex justify-between gap-4">
            <div className="flex w-1/2 flex-col gap-4 justify-center">
              <h1 className="text-red-custom text-6xl font-bold font-primary">
                Challenge
              </h1>
              <p className="text-primary-text text-xl font-medium font-secondary">
                Como a Inteligência Artificial pode auxiliar no diagnóstico de
                problemas veiculares? Diante desse desafio, utilizamos várias
                ferramentas, tecnologias e linguagens para lidar com situações
                ocorrentes no setor automobilístico. Veja mais!
              </p>
            </div>
            <Image
              src="/solucao-ia.gif"
              alt="Como a IA pode ajudar a solucionar problemas?"
              height={1040}
              width={1040}
              className="size-[400px] object-contain border-4 border-red-custom rounded-md bg-red-100 max-w-1/2 m-auto"
            />
          </div>
      </Section>
      <Section>
          <div className="flex flex-col gap-4 m-auto mt-8">
            <h2 className="text-red-custom text-3xl font-bold font-primary text-center">
              Nossos serviços
            </h2>
            <p className="text-primary-text text-xl font-medium font-secondary text-center">
              Como podemos ajudar o seu negócio
            </p>
          </div>
          <Section>
            <div className={`${openDisplay ? 'flex' : 'hidden'} bg-[#011625] w-max rounded *:text-primary-text flex-col gap-1`}>
              <div onClick={() => handleAuthorChoose("Gustavo Dias")} className="group flex p-4 cursor-pointer min-w-40 justify-between font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300">
                  <p>Gustavo Dias</p>
                  <FaCheckSquare color="#16a34a" size={15} className=" hidden group-hover:flex transition-colors duration-300" />
              </div>
              <div onClick={() => handleAuthorChoose("Sofia Petruk")} className="group flex p-4 cursor-pointer min-w-40 justify-between font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300">
                  <p>Sofia Petruk</p>
                  <FaCheckSquare color="#16a34a" size={15} className=" hidden group-hover:flex transition-colors duration-300" />
              </div>
              <div onClick={() => handleAuthorChoose("Felipe Ribeiro")} className="group flex p-4 cursor-pointer min-w-40 justify-between font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300">
                  <p>Felipe Ribeiro</p>
                  <FaCheckSquare color="#16a34a" size={15} className=" hidden group-hover:flex transition-colors duration-300" />
              </div>
              <div onClick={() => handleAuthorChoose("Júlia Monteiro")} className="group flex p-4 cursor-pointer min-w-40 justify-between font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300">
                  <p>Júlia Monteiro</p>
                  <FaCheckSquare color="#16a34a" size={15} className=" hidden group-hover:flex transition-colors duration-300" />
              </div>
              <div onClick={() => handleAuthorChoose("Júlia Angelozi")} className="group flex p-4 cursor-pointer min-w-40 justify-between font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300">
                  <p>Júlia Angelozi</p>
                  <FaCheckSquare color="#16a34a" size={15} className=" hidden group-hover:flex transition-colors duration-300" />
              </div>
            </div>
          </Section>
          <table className="w-full mt-8">
            <thead className="bg-[#011625]">
                <tr className="">
                    <th className=" flex p-5 items-center gap-3"><p className="text-primary-text font-primary text-lg">Autor</p> 
                    <FaFilter 
                    color="#FFF" size={15} 
                    className="hover:scale-125 hover:brightness-0 hover:saturate-100 hover:invert-[50%] cursor-pointer transition-all duration-300"
                    onClick={toggleDisplay} 
                    />
                    <FaTrash 
                    color="#fff" size={15}
                    className={`${selectAuthor ? 'block' : 'hidden'} hover:scale-125 hover:brightness-0 hover:saturate-100 hover:invert-[50%] cursor-pointer transition-all duration-300`}
                    onClick={clearAuthorChoose}
                    />
                    
                    </th>
                    <th className="p-5 items-center gap-3"><p className="text-primary-text font-primary text-lg">Tarefa</p></th>
                    <th className="p-5 items-center gap-3"><p className="text-primary-text font-primary text-lg">Matéria</p></th>
                    <th className="rounded-tr-md p-5 items-center gap-3"><p className="text-primary-text font-primary text-lg">Tipo</p></th>
                </tr>
            </thead>
            <tbody className="bg-[#001d31] last:rounded-b-md">
                {tarefas.map((tarefa, indice)=>(
                    selectAuthor ? (
                      tarefa.tipo.includes("Challenge") && tarefa.autor == selectAuthor ? 
                      (<Link href={`/tarefa/${indice}`}>
                        <tr key={indice}>
                            <td className="p-5 text-primary-text font-secondary font-light text-left border-b border-[#1b3040]">{tarefa.autor}</td>
                            <td className="p-5 text-primary-text font-secondary font-light text-center border-b border-[#1b3040]">{tarefa.titulo}</td>
                            <td className="p-5 text-primary-text font-secondary font-light text-center border-b border-[#1b3040]">{tarefa.materia}</td>
                            <td className="p-5 text-primary-text font-secondary font-light text-center border-b border-[#1b3040]">{tarefa.tipo}</td>
                        </tr>
                      </Link>) : ''
                    ) :                  
                    tarefa.tipo.includes("Challenge") ? 
                    (<tr key={indice}>
                        <td className="p-5 text-primary-text font-secondary font-light text-left border-b border-[#1b3040]">{tarefa.autor}</td>
                        <td className="p-5 text-primary-text font-secondary font-light text-center border-b border-[#1b3040]">{tarefa.titulo}</td>
                        <td className="p-5 text-primary-text font-secondary font-light text-center border-b border-[#1b3040]">{tarefa.materia}</td>
                        <td className="p-5 text-primary-text font-secondary font-light text-center border-b border-[#1b3040]">{tarefa.tipo}</td>
                    </tr>) : ''
                ))}
            </tbody>
          </table>
      </Section>
    </div>
  );
}
