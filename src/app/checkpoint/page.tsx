"use client"

import FilteredTable from "@/components/FilteredTable";
import Section from "@/components/MotionSection/section";
import Image from "next/image";


export default function Checkpoint(){
    return(
        <div className="mt-8 flex flex-col gap-6">
            <Section>
                <div className="flex justify-between gap-4">
                    <div className="flex w-1/2 flex-col gap-4 justify-center">
                        <h1 className="text-red-custom text-6xl font-bold font-primary">
                            Checkpoint
                        </h1>
                        <p className="text-primary-text text-xl font-medium font-secondary">
                        O checkpoint é uma avaliação projetada para testar os conhecimentos adquiridos até o 
                        ponto específico do conteúdo abordado pelo professor. Durante o ano, realizamos 6 checkpoints, 
                        sendo 3 no primeiro semestre e 3 no segundo. Cada um deles vale 10% da nota final. Dos 6 checkpoints, 
                        a realização de um é opcional, ou seja, você pode optar por não fazer um, sem prejuízo à sua nota final.
                        </p>
                    </div>
                    <Image
                    src="/checkpoint.gif"
                    alt="Imagem que mostra um gif de um menino escrevendo no computador"
                    height={1040}
                    width={1040}
                    className="size-[400px] object-contain border-4 border-red-custom rounded-md bg-red-100 max-w-1/2 m-auto"
                    />
                </div>
            </Section>
            <Section>
                <div className="flex flex-col gap-4 m-auto mt-8">
                    <h2 className="text-red-custom text-3xl font-bold font-primary text-center">
                    Nossos Checkpoints
                    </h2>
                    <p className="text-primary-text text-xl font-medium font-secondary text-center">
                    Avaliações para medir seu progresso acadêmico
                    </p>
                </div>
                <FilteredTable tipoTarefa="Checkpoints" />
            </Section>
        </div>
    )
}