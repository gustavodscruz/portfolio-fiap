"use client"

import FilteredTable from "@/components/FilteredTable";
import Section from "@/components/MotionSection/section";
import Image from "next/image";

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
          <FilteredTable tipoTarefa="Global Solution" />
      </Section>
    </div>
  );
}
