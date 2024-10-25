"use client";
import { autores, materias, Tarefa, tiposTarefa, TipoTarefa } from "@/utils/fakelist";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Tarefa({ params }: { params: { id: number } }) {

    const navigate = useRouter();

    const [tarefa, setTarefa] = useState<Tarefa>({
        autor: autores[0], 
        titulo: "",
        tipo: tiposTarefa[0], 
        materia: materias[0], 
        descricao: "",
        foto: "",
        nota: 0,
        feedback: ""
    });

    useEffect(() => {
        const chamadaApi = async() => {
            const response = await fetch(`localhost:3000/api/tarefa/${params.id}`)
            const data = await response.json();
            console.log(data);
            setTarefa(data);
        }
        chamadaApi();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    }

}