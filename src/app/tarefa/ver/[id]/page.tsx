"use client";
import { Tarefa } from "@/utils/tarefas";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import {
  MdConfirmationNumber,
  MdLanguage,
  MdNote,
  MdTypeSpecimen,
} from "react-icons/md";

export default function ViewTarefa({ params }: { params: { id: number } }) {
  // const navigate = useRouter();

  const [tarefa, setTarefa] = useState<Tarefa | null>(null);

  useEffect(() => {
    const chamadaApi = async () => {
      try {
        const response = await fetch(
          `${window.location.origin}/api/tarefa/${params.id}`
        );
        if (!response.ok) {
          throw new Error("Erro ao obter tarefa!");
        }
        const data: Tarefa = await response.json();
        console.log(data);
        setTarefa(data);
      } catch (error) {
        console.error("Erro: " + error);
        setTarefa(null);
      }
    };
    chamadaApi();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-7 max-w-screen-lg m-auto mt-36">
        {tarefa ? (
          <>
            {tarefa.foto ? (
              <Image
                src={tarefa.foto}
                height={400}
                width={700}
                objectFit="cover"
                className="object-cover h-[400px] w-[700px]"
                alt={`Foto sobre a tarefa ${tarefa.titulo}, por ${tarefa.autor}`}
              />
            ) : (
              ""
            )}
            <h2 className="text-red-custom text-center text-4xl tracking-wider">
              {tarefa.titulo}
            </h2>
            <div className="flex gap-3 items-center justify-center m-auto w-max my-3 bg-">
              <BsPersonCircle color="#ec4899" size={30} />{" "}
              <p className="text-primary-text font-semibold tracking-wide text-xl">
                {tarefa.autor}
              </p>
            </div>
            <div className="flex gap-3 items-center w-max m-auto">
              <div className="flex items-center gap-3 w-max m-auto">
                <MdTypeSpecimen color="#ec4899" size={20} />
                <p className="text-primary-text">{tarefa.materia}</p>
              </div>
              <div className="flex items-center gap-3 w-max m-auto">
                <MdLanguage color="#ec4899" size={20} />
                <p className="text-primary-text">{tarefa.tipo}</p>
              </div>
              <div className="flex items-center gap-3 w-max m-auto">
                <MdConfirmationNumber color="#ec4899" size={20} />
                <p className="w-max m-auto text-primary-text">
                  {tarefa.semestre ?? "1"}º Semestre
                </p>
              </div>
              <div className="flex items-center gap-3 w-max m-auto ">
              <MdNote size={20} color="#ec4899" />
              <p className="text-primary-text">Nota: {tarefa.nota}</p>
            </div>
            </div>

            <p className="text-primary-text text-xl text-center">
              {tarefa.descricao}
            </p>
            {tarefa.feedback ? (
              <p className="text-primary-text text-xl text-center">Feedback: {tarefa.feedback}</p>
            ) : ''} 
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
