"use client";

import { autores, materias, Tarefa, tiposTarefa } from "@/utils/tarefas";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdConfirmationNumber, MdDescription, MdFeedback, MdLanguage, MdNote, MdPerson, MdTopic, MdTypeSpecimen } from "react-icons/md";

export default function EditTarefa({ params }: { params: { id: number } }) {

    const navigate = useRouter();

    const [tarefa, setTarefa] = useState<Tarefa>({
        id:0,
        autor:"Felipe Ribeiro",
        titulo: "",
        tipo: "Challenge", 
        materia: "Artificial Intelligence and Chatbot", 
        descricao: "",
        foto: "",
        nota: 0,
        feedback: ""
    });

    useEffect(() => {
        const chamadaApi = async() => {
            const response = await fetch(`${window.location.origin}/api/tarefa/${params.id}`)
            const data  = await response.json();
            console.log(data);
            setTarefa(data);
        }
        chamadaApi();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try{
          const data = await fetch(`${window.location.origin}/api/tarefa/${params.id}`,{
            method:"PUT",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify(tarefa)
          })
          if(data.ok){
            setTarefa({
              id:0,
              autor:"Felipe Ribeiro",
              titulo: "",
              tipo: "Challenge", 
              materia: "Artificial Intelligence and Chatbot", 
              descricao: "",
              foto: "",
              nota: 0,
              feedback: ""
          })
            navigate.push("/")
          }
        }catch(err){
          console.error("Erro ao editar tarefa: ",err)
        }
        

    }

    return(
        <div className='bg-[#011625] rounded-xl p-6 flex flex-col gap-4 m-auto'>
        <form onSubmit={handleSubmit} className="w-full [&_input]:w-full [&_select]:w-full [&_textarea]:w-full p-6 flex flex-col gap-4 m-auto">
        
        <h3 className='text-white text-center text-3xl'>Editar Tarefa</h3>
        <label className='text-xl text-primary-text font-semibold flex gap-2 items-center' htmlFor="">
          <MdTopic color='#ec4899' size={20} />
          Título da tarefa: 
        </label>
        <input type="text"  name="titulo" id="titulo" placeholder='Digite o título' value={tarefa.titulo} onChange={e=>setTarefa({...tarefa,titulo: e.target.value })} className=' p-2 rounded-sm outline-none text-[#000]' />
        <label className='text-xl text-primary-text font-semibold flex gap-2 items-center' htmlFor="">
          <MdPerson size={20} color='#ec4899' />
          Autor
        </label>
        <select required value={tarefa.autor} onChange={e=>setTarefa({...tarefa,autor: e.target.value as "Gustavo Dias" | "Júlia Monteiro" | "Júlia Angelozi" | "Felipe Ribeiro" | "Sofia Petruk" })} className='p-2 outline-none rounded-sm ' name="" id="">
          <option className=''>Selecione o autor</option>
          {autores.map((autor, indice)=>(
            <option value={autor} key={indice}>{autor}</option>
          ))}
        </select>
        <label className='text-xl text-primary-text font-semibold flex gap-2 items-center' htmlFor="">
          <MdTypeSpecimen color='#ec4899' size={20} />
          Matéria
        </label>
        <select value={tarefa.materia} onChange={e=>setTarefa({...tarefa,materia: e.target.value as "Artificial Intelligence and Chatbot" | "Domain Driven Design Using Java" | "Computational Thinking Using Python" | "Software Engineering and Business Model" | "Building Relational Database" | "Front-End Design Engineering" })} required className='p-2 outline-none rounded-sm' name="" id="">
          <option value="">Selecione a matéria</option>
          {materias.map((materia, indice)=>(
            <option value={materia} key={indice}>{materia}</option>
          ))}
        </select>
        <label className='text-xl text-primary-text font-semibold flex gap-2 items-center' htmlFor="">
          <MdLanguage color='#ec4899' size={20} />
          Tipo de Matéria
        </label>
        <select value={tarefa.tipo} onChange={e=>setTarefa({...tarefa,tipo: e.target.value as "Challenge" | "Global Solution" | "Checkpoints"})} required className='p-2 outline-none rounded-sm' name="" id="">
          <option value="">Selecione o tipo de matéria</option>
          {tiposTarefa.map((tipo, indice)=>(
            <option value={tipo} key={indice}>{tipo}</option>
          ))}
        </select>

        <fieldset className="flex gap-4 py-2 flex-col">
          <div className="flex gap-2 items-center">
            <MdConfirmationNumber color='#ec4899' size={20} />
            <legend className='text-xl text-primary-text font-semibold'>Escolha o semestre da atividade: </legend>
          
          </div>
          
          <div className="flex gap-4">

            <div className="flex gap-2">
              <input type="radio" name="semestre" onChange={e=>setTarefa({...tarefa,semestre: 1})} className='text-primary-text w-6' value={"1º Semestre"} id="semestreChoice1" />
              <label htmlFor="semestreChoice1" className='text-white'>
                1º Semestre
              </label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="semestre" onChange={e=>setTarefa({...tarefa,semestre: 2})} className='text-primary-text' value={"2º Semestre"} id="semestreChoice2" />
              <label htmlFor="semestreChoice2" className='text-white'>
                2º Semestre
              </label>
            </div>
          </div>
        </fieldset>
        <label htmlFor="inputDescricao" className='text-primary-text text-xl flex gap-2 items-center'>
          <MdDescription size={20} color='#ec4899'/>
          Descrição:
        </label>
        <textarea value={tarefa.descricao} onChange={e=>setTarefa({...tarefa,descricao: e.target.value})} name="inputDescricao" id="" cols={30} rows={5} placeholder='Descreva a tarefa ' className='p-3 outline-none text-black rounded-sm'></textarea>
        <label htmlFor="nota" className='text-primary-text text-xl flex gap-2 items-center'>
          <MdNote size={20} color='#ec4899' />
          Nota
        </label>
        <input value={tarefa.nota} onChange={e=>setTarefa({...tarefa,nota: parseInt(e.target.value)})} type="number" min={0} max={100} name="nota" id="nota" placeholder='Nota' className=' p-2 rounded-sm text-lg text-gray-500 tracking-wide outline-none' />
        <label htmlFor="inputFeedback" className='text-primary-text text-xl flex gap-2 items-center'>
          <MdFeedback size={20} color='#ec4899'/>
          Feedback
        </label>
        <textarea onChange={e=>setTarefa({...tarefa,feedback: e.target.value})} value={tarefa.feedback} name="inputFeedback" id="inputFeedback" cols={30} rows={5} placeholder='Feedback do professor ' className='p-3 outline-none text-black rounded-sm'></textarea>
        <button type='submit' className='group flex gap-2 items-center p-5 justify-between w-1/8 m-auto bg-[#ec4899] hover:text-white hover:shadow-md hover:scale-110 shadow-gray-300 rounded-sm transition-all duration-300 '><IoMdCheckboxOutline size={20} color='#000' className='group-hover:invert transition-all duration-300'/> Criar tarefa</button>
        </form>
    </div>

    )

}