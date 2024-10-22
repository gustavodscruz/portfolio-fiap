import Section from "@/components/MotionSection/section";
import { tarefas } from "@/utils/fakelist";
import Image from "next/image";
import { FaFilter } from "react-icons/fa";

export default function Challenge() {
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
          <table className="w-full mt-8">
            <thead className="bg-[#011625]">
                <tr className="">
                    <th className="flex p-5 items-center gap-3"><p className="text-primary-text font-primary text-lg">Autor</p> <FaFilter color="#FFF" size={15} className="hover:scale-125 hover:brightness-0 hover:saturate-100 hover:invert-[50%] cursor-pointer transition-all duration-300" /></th>
                    <th className="p-5 items-center gap-3"><p className="text-primary-text font-primary text-lg">Tarefa</p></th>
                    <th className="p-5 items-center gap-3"><p className="text-primary-text font-primary text-lg">Matéria</p></th>
                    <th className="p-5 items-center gap-3"><p className="text-primary-text font-primary text-lg">Tipo</p></th>
                </tr>
            </thead>
            <tbody className="bg-[#001d31] ">
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
