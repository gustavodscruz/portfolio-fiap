import Image from "next/image"

type CardMembro = {
    nome: string, 
    resumo : string,
    foto? : string,
    github? : string,
    linkedin? : string
}

export default function Card({nome, resumo, foto, github, linkedin}: CardMembro){
    return(
        <>
        <div className="flex flex-col bg-[#1B1616] p-5 rounded-md max-w-[300px] m-auto items-center">
            <Image src={foto ?? "/devs.png"} alt={`Foto dev ${nome}`} height={300} width={200}  />
            <h4 className="mt-4 text-2xl text-primary-text font-primary">{nome}</h4>
            <p className="text-[#5BF0F5] text-lg font-secondary text-center">{resumo}</p>
        </div>
        </>
    )
}