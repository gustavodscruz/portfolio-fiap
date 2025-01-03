import Image from "next/image"
import { FaGithub, FaLinkedin } from "react-icons/fa"

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
        <div className="flex flex-col bg-[#1B1616] rounded-xl w-[300px] m-auto items-center min-h-[500px] justify-between border-[#646cdf] border-4">
            <Image src={foto ?? "/devs.png"} alt={`Foto dev ${nome}`} height={200} width={300} className=" rounded-t-lg h-[200px] w-[300px] object-cover object-center bg-[#646cdf]"  />
            <div className="flex flex-col items-center justify-center gap-2 mt-6">
                <h4 className="mt-4 text-2xl text-primary-text font-primary">{nome}</h4>
                <p className="text-[#5BF0F5] text-lg font-secondary text-center mt-2 min-h-40 p-5">{resumo}</p>
            </div>
            
            <div className="flex justify-center gap-3 mt-3 mb-6">
                {github ? (
                    <a href={github}>
                        <FaGithub color="#FFF" size={40} radius={360} className="hover:scale-105 transition-all duration-300 hover:invert-[51%] hover:sepia-[51%] hover:saturate-[3108%] hover:hue-rotate-[320deg] hover:brightness-[95%] hover:contrast-[76%]" />
                    </a>
                ): ''}

                {linkedin ? (
                    <a href={linkedin}>
                        <FaLinkedin color="#FFF" size={40} radius={360} className="hover:scale-105 transition-all duration-300 hover:invert-[51%] hover:sepia-[51%] hover:saturate-[3108%] hover:hue-rotate-[320deg] hover:brightness-[95%] hover:contrast-[76%]" />
                    </a>
                ): ''}
            </div>
        </div>
        </>
    )
}