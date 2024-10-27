import { autores, materias, Tarefa } from "@/utils/tarefas";
import React, { useEffect, useState } from "react";
import { FaCheckSquare, FaFilter, FaTrash } from "react-icons/fa";
import Section from "../MotionSection/section";
import { BiEdit } from "react-icons/bi";
import { MdAddBox, MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import GenericModal from "../GenericModal";

const FilteredTable = ({ tipoTarefa }: { tipoTarefa: Tarefa["tipo"] }) => {
  const [openDisplay, setOpenDisplay] = useState({
    autor: false,
    materia: false,
  });

  const navigate = useRouter();

  const [selectAuthor, setSelectAuthor] = useState<Tarefa["autor"] | false>(false);
  const [materia, setMateria] = useState<Tarefa["materia"] | false>(false);

  const toggleDisplay = (field: "autor" | "materia") => {
    setOpenDisplay((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChoose = (field: "autor" | "materia", value: Tarefa["autor"] | Tarefa["materia"]) => {
    setOpenDisplay((prev) => ({ ...prev, [field]: false }));
    if (field === "autor") return setSelectAuthor(value as Tarefa["autor"]);
    setMateria(value as Tarefa["materia"]);
  };

  const clearChoose = (field: "autor" | "materia") => {
    setOpenDisplay((prev) => ({ ...prev, [field]: false }));
    if (field === "autor") return setSelectAuthor(false);
    setMateria(false);
  };

  const [tarefas, setTarefas] = useState<Tarefa[] | null>(null);
  const handleTarefas = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tarefa/');
      if (!response.ok) {
        throw new Error("Não foi possível recuperar as tarefas!");
      }
      const data: Tarefa[] = await response.json();
      setTarefas(data);
    } catch (error) {
      console.error("Erro: " + error);
      setTarefas(null);
    }
  };

  useEffect(() => {
    handleTarefas();
  }, []);

  const addTarefa = () => {
    navigate.push('http://localhost:3000/adicionar-tarefa/');
  };

  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");

  const fecharModal = () => {
    setDisplayModal(false);
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/tarefa/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setModalText("Produto removido com sucesso!");
        setDisplayModal(true);
        setTimeout(() => {
          navigate.refresh();
          fecharModal();
        }, 5000);
      }
    } catch (error) {
      console.error("Falha ao remover produto.", error);
    }
  };

  const handleReadTarefa = (id: Tarefa['id']) => {
    navigate.push(`http://localhost:3000/tarefa/ver/${id}`)
  }


  return (
    <>
      <div className={`${displayModal ? 'block' : 'hidden'}`}>
        <GenericModal show={displayModal} text={modalText} onClose={fecharModal} />
      </div>
      <Section>
        <div
          className={`${openDisplay.autor ? "flex" : "hidden"} bg-[#011625] w-max rounded *:text-primary-text flex-col gap-1`}
        >
          {autores.map((autor, indice) => (
            <div
              key={indice}
              onClick={() => handleChoose("autor", autor)}
              className="group flex p-4 cursor-pointer min-w-40 justify-between font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300"
            >
              <p>{autor}</p>
              <FaCheckSquare
                color="#16a34a"
                size={15}
                className="hidden group-hover:flex transition-colors duration-300"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div
          className={`${openDisplay.materia ? "flex" : "hidden"} bg-[#011625] w-max rounded *:text-primary-text flex-col gap-1`}
        >
          {materias.map((materia, indice) => (
            <div
              key={indice}
              onClick={() => handleChoose("materia", materia)}
              className="group flex p-4 cursor-pointer min-w-96 justify-between font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300"
            >
              <p>{materia}</p>
              <FaCheckSquare
                color="#16a34a"
                size={15}
                className="hidden group-hover:flex transition-colors duration-300"
              />
            </div>
          ))}
        </div>
      </Section>

      <table className="w-full mt-8 border-[#011625] border-8">
        <thead className="bg-[#011625]">
          <tr className="border-b border-[#1b3040]">
            <th className="flex p-5 items-center gap-3">
              <p className="text-primary-text font-primary text-lg">Autor</p>
              <FaFilter
                color="#FFF"
                size={15}
                className="hover:scale-125 hover:brightness-0 hover:saturate-100 hover:invert-[50%] cursor-pointer transition-all duration-300"
                onClick={() => toggleDisplay("autor")}
              />
              <FaTrash
                color="#fff"
                size={15}
                className={`${selectAuthor ? "block" : "hidden"} hover:scale-125 hover:brightness-0 hover:saturate-100 hover:invert-[50%] cursor-pointer transition-all duration-300`}
                onClick={() => clearChoose("autor")}
              />
            </th>
            <th className="p-5 text-primary-text font-primary text-lg">Tarefa</th>
            <th className="flex p-5 items-center gap-3 justify-center">
              <p className="text-primary-text font-primary text-lg">Matéria</p>
              <FaFilter
                color="#FFF"
                size={15}
                className="hover:scale-125 hover:brightness-0 hover:saturate-100 hover:invert-[50%] cursor-pointer transition-all duration-300"
                onClick={() => toggleDisplay("materia")}
              />
              <FaTrash
                color="#fff"
                size={15}
                className={`${materia ? "block" : "hidden"} hover:scale-125 hover:brightness-0 hover:saturate-100 hover:invert-[50%] cursor-pointer transition-all duration-300`}
                onClick={() => clearChoose("materia")}
              />
            </th>
            <th className="p-5 text-primary-text font-primary text-lg">Tipo</th>
            <th className="text-primary-text font-primary text-lg flex p-5 items-center gap-3 justify-center">Ações
              <MdAddBox color="#d6d9df" size={30} className="hover:scale-110 cursor-pointer transition-all duration-300" onClick={addTarefa} />
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#001d31]">
          {
            tarefas ?
              (tarefas
                .filter((tarefa) => {
                  const matchesTipo = tarefa.tipo.includes(tipoTarefa);
                  const matchesAuthor = selectAuthor ? tarefa.autor === selectAuthor : true;
                  const matchesMateria = materia ? tarefa.materia === materia : true;
                  return matchesTipo && matchesAuthor && matchesMateria;
                })
                .map((tarefa, indice) => (
                  <tr key={indice} onClick={() => handleReadTarefa(tarefa.id)} 
                  className="hover:bg-[#004a7d] transition-all duration-300 cursor-pointer">
                    <td className="p-5 text-primary-text font-secondary font-light text-left ">
                      {tarefa.autor}
                    </td>
                    <td className="p-5 text-primary-text font-secondary font-light text-center ">
                      {tarefa.titulo}
                    </td>
                    <td className="p-5 text-primary-text font-secondary font-light text-center ">
                      {tarefa.materia}
                    </td>
                    <td className="p-5 text-primary-text font-secondary font-light text-center ">
                      {tarefa.tipo}
                    </td>
                    <td className="p-5 text-primary-text font-secondary font-light text-center  flex justify-evenly items-center w-full h-full ">
                      <BiEdit size={30} className="hover:scale-125 cursor-pointer transition-all duration-300 " color="#4300ff" onClick={()=> navigate.push(`/tarefa/${tarefa.id}`)} />
                      <MdDelete size={30} className="hover:scale-125 cursor-pointer transition-all duration-300 " color="#a43400" onClick={() => handleDelete(tarefa.id)} />
                    </td>
                  </tr>
                ))) : (

                  <tr>
                <td colSpan={6} className="p-5 text-primary-text font-secondary font-light text-left border-b border-[#1b3040] w-full m-auto">
                    <p className="text-center">Não foi possível ver as tarefas!</p>
                  </td>
                </tr>
              )
          }
        </tbody>
      </table>
    </>
  );
};

export default FilteredTable;