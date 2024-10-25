"use client";

import FilteredTable from "@/components/FilteredTable";
import Section from "@/components/MotionSection/section";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Global() {
  return (
    <div className="mt-8 flex flex-col gap-6">
      <Section>
        <div className="flex justify-between gap-4">
          <div className="flex w-1/2 flex-col gap-4 justify-center">
            <h1 className="text-red-custom text-6xl font-bold font-primary">
              <Typewriter
                options={{
                  strings: ["Global Solution"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </h1>
            <p className="text-primary-text text-xl font-medium font-secondary">
              A Global Solution é um projeto integrador que desafia os
              estudantes a resolver um problema real proposto pela faculdade em
              um prazo de duas semanas. O problema abrange diversas áreas do
              conhecimento, e para solucioná-lo, aplicamos as competências
              desenvolvidas em Inteligência Artificial, Banco de Dados, Java,
              Python, Engenharia de Software e Front-end. Essa abordagem
              multidisciplinar permite a criação de soluções completas e
              inovadoras, preparando os alunos para desafios do mundo
              profissional.
            </p>
          </div>
          <Image
            src="/global-solution.gif"
            alt="Imagem que mostra um gif de um menino escrevendo no computador"
            height={1040}
            width={1040}
            className="h-[400px] w-[580px] object-cover border-4 border-red-custom rounded-md bg-red-100 max-w-1/2 m-auto"
          />
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-4 m-auto mt-8">
          <h2 className="text-red-custom text-3xl font-bold font-primary text-center">
            Nossas Global Solution
          </h2>
          <p className="text-primary-text text-xl font-medium font-secondary text-center">
            Unindo conhecimento e prática para soluções inovadoras
          </p>
        </div>
        <FilteredTable tipoTarefa="Global Solution" />
      </Section>
    </div>
  );
}
