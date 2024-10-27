"use client";
import { autores, materias, tiposTarefa } from '@/utils/tarefas'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoMdCheckboxOutline } from 'react-icons/io'
import {MdConfirmationNumber, MdDescription, MdFeedback, MdLanguage, MdNote, MdPerson, MdTopic, MdTypeSpecimen } from 'react-icons/md'



const AdicionarTarefa = () => {

  const router = useRouter();
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [materia, setMateria] = useState("");
  const [tipo, setTipo] = useState("");
  const [semestre, setSemestre] = useState("");
  const [descricao, setDescricao] = useState("");
  const [nota, setNota] = useState<number | undefined>(undefined);
  const [feedback, setFeedback] = useState("");
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const novaTarefa = {
      titulo,
      autor,
      materia,
      tipo,
      semestre,
      descricao,
      nota,
      feedback,
    };

    try {
      const response = await fetch(`http://localhost:3000/api/tarefa`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaTarefa),
      });

      if (response.ok) {
        router.back();
        setTitulo("");
        setAutor("");
        setMateria("");
        setTipo("");
        setSemestre("");
        setDescricao("");
        setNota(undefined);
        setFeedback("");
      } 
      
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao adicionar tarefa.");
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className='bg-[#011625] rounded-xl p-6 flex flex-col gap-4 m-auto'>
        <h3 className='text-white text-center text-3xl'>Adicionar Tarefa</h3>
        <label className='text-xl text-primary-text font-semibold flex gap-2 items-center' htmlFor="">
          <MdTopic color='#ec4899' size={20} />
          Título da tarefa: 
        </label>
        <input type="text"  name="titulo" id="titulo" placeholder='Digite o título' onChange={(e) => setTitulo(e.target.value)} className=' p-2 rounded-sm outline-none text-[#000]' />
        <label className='text-xl text-primary-text font-semibold flex gap-2 items-center' htmlFor="">
          <MdPerson size={20} color='#ec4899' />
          Autor
        </label>
        <select required className='p-2 outline-none rounded-sm ' name="" id="" onChange={(e) => setAutor(e.target.value)}>
          <option value="" className=''>Selecione o autor</option>
          {autores.map((autor, indice)=>(
            <option value={autor} key={indice}>{autor}</option>
          ))}
        </select>
        <label className='text-xl text-primary-text font-semibold flex gap-2 items-center' htmlFor="">
          <MdTypeSpecimen color='#ec4899' size={20} />
          Matéria
        </label>
        <select required className='p-2 outline-none rounded-sm' name="" id="" onChange={(e) => setMateria(e.target.value)}>
          <option value="">Selecione a matéria</option>
          {materias.map((materia, indice)=>(
            <option value={materia} key={indice}>{materia}</option>
          ))}
        </select>
        <label className='text-xl text-primary-text font-semibold flex gap-2 items-center' htmlFor="">
          <MdLanguage color='#ec4899' size={20} />
          Tipo de Matéria
        </label>
        <select required className='p-2 outline-none rounded-sm' name="" id="" onChange={(e) => setTipo(e.target.value)}>
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
              <input type="radio" name="semestre" className='text-primary-text' value={"1º Semestre"} id="semestreChoice1" onChange={(e) => setSemestre(e.target.value)}/>
              <label htmlFor="semestreChoice1" className='text-white'>
                1º Semestre
              </label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="semestre" className='text-primary-text' value={"2º Semestre"} id="semestreChoice2"  onChange={(e) => setSemestre(e.target.value)}/>
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
        <textarea name="inputDescricao" id="" cols={30} rows={5} placeholder='Descreva a tarefa ' className='p-3 outline-none text-black rounded-sm' onChange={(e) => setDescricao(e.target.value)}></textarea>
        <label htmlFor="nota" className='text-primary-text text-xl flex gap-2 items-center'>
          <MdNote size={20} color='#ec4899' />
          Nota
        </label>
        <input type="number" min={0} max={100} name="nota" id="nota" placeholder='Nota' onChange={(e) => setNota(parseFloat(e.target.value))} className=' p-2 rounded-sm text-lg text-gray-500 tracking-wide outline-none' />
        <label htmlFor="inputFeedback" className='text-primary-text text-xl flex gap-2 items-center'>
          <MdFeedback size={20} color='#ec4899'/>
          Feedback
        </label>
        <textarea name="inputFeedback" id="inputFeedback" cols={30} rows={5} placeholder='Feedback do professor ' onChange={(e) => setFeedback(e.target.value)} className='p-3 outline-none text-black rounded-sm'></textarea>
        <button type='submit' className='group flex gap-2 items-center p-5 justify-between w-1/8 m-auto bg-[#ec4899] hover:text-white hover:shadow-md hover:scale-110 shadow-gray-300 rounded-sm transition-all duration-300 '><IoMdCheckboxOutline size={20} color='#000' className='group-hover:invert transition-all duration-300' /> Criar tarefa</button>
    </form>
    
  )
}

export default AdicionarTarefa

function useNavigate() {
  throw new Error('Function not implemented.');
}
