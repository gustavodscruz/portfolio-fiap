"use client";

import FilteredTable from "@/components/FilteredTable";
import Section from "@/components/MotionSection/section";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Challenge() {
  return (
    <div className="mt-8 flex flex-col gap-6">
      <Section>
        <div className="flex justify-between gap-4">
          <div className="flex w-1/2 flex-col gap-4 justify-center">
            <h1 className="text-red-custom text-6xl font-bold font-primary">
              <Typewriter
                options={{
                  strings: ["Challenge"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </h1>
            <p className="text-primary-text text-xl font-medium font-secondary">
              O challenge é uma forma de avaliação em que os alunos desenvolvem,
              ao longo do ano, um projeto proposto por uma empresa. Com dois
              entregáveis ​​por semestre, o projeto envolve todas as
              disciplinas, permitindo que os alunos apliquem conhecimentos de
              forma prática e integrada. Essa abordagem multidisciplinar
              incentiva a colaboração e a resolução de problemas, conectando
              teoria e prática, e oferecendo uma experiência comprovada às
              demandas do mercado.
            </p>
          </div>
          <Image
            src="/solucao-ia.gif"
            alt="Como a IA pode ajudar a solucionar problemas?"
            height={1040}
            width={1040}
            className="h-[400px] w-[580px] object-contain border-4 border-red-custom rounded-md bg-red-100 max-w-1/2 m-auto"
          />
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-4 m-auto mt-8">
          <h2 className="text-red-custom text-3xl font-bold font-primary text-center">
            Nossas Challenge Sprints
          </h2>
          <p className="text-primary-text text-xl font-medium font-secondary text-center">
            Desenvolvendo aplicações para empresas
          </p>
        </div>
        <FilteredTable tipoTarefa="Challenge" />
      </Section>
    </div>
  );
}
