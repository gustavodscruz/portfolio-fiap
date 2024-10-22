import Section from "@/components/MotionSection/section";
import { tarefas } from "@/utils/fakelist";
import Image from "next/image";
import { useState } from "react";
import {FaCheckSquare, FaFilter } from "react-icons/fa";

export default function Challenge() {
  const [hover, setHover] = useState(false)
  
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

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
          <div className="flex bg-[#011625] w-max p-3 rounded *:text-primary-text flex-col gap-1">
            <div className="group flex p-2 font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300">
                <p>Gustavo Dias</p>
                <FaCheckSquare color="#a3a4a8" size={15} className=" group-hover:custom-filter-green transition-colors duration-300" style={{transform: hover ? "brightness(0) saturate(100%) invert(54%) sepia(77%) saturate(3778%) hue-rotate(112deg) brightness(90%) contrast(83%)" : ''}} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
            </div>
            <div className="flex p-2 font-primary tracking-wide text-sm">
                <p>Sofia Petruk</p>
            </div>
            <div className="flex p-2 font-primary tracking-wide text-sm">
                <p>Felipe Ribeiro</p>
            </div>
            <div className="flex p-2 font-primary tracking-wide text-sm">
                <p>Júlia Monteiro</p>
            </div>
            <div className="flex p-2 font-primary tracking-wide text-sm">
                <p>Júlia Angelozi</p>
            </div>
          </div>
          <table className="w-full mt-8">
            <thead className="bg-[#011625]">
                <tr className="">
                    <th className=" flex p-5 items-center gap-3"><p className="text-primary-text font-primary text-lg">Autor</p> <FaFilter color="#FFF" size={15} className="hover:scale-125 hover:brightness-0 hover:saturate-100 hover:invert-[50%] cursor-pointer transition-all duration-300" /></th>
                    <th className="p-5 items-center gap-3"><p className="text-primary-text font-primary text-lg">Tarefa</p></th>
                    <th className="p-5 items-center gap-3"><p className="text-primary-text font-primary text-lg">Matéria</p></th>
                    <th className="rounded-tr-md p-5 items-center gap-3"><p className="text-primary-text font-primary text-lg">Tipo</p></th>
                </tr>
            </thead>
            <tbody className="bg-[#001d31] last:rounded-b-md">
                {tarefas.map((tarefa, indice)=>(
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
