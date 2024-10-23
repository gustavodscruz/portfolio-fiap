import { autores, materias, Tarefa, tarefas } from "@/utils/fakelist";
import React, { useState } from "react";
import { FaCheckSquare, FaFilter, FaTrash } from "react-icons/fa";
import Section from "../MotionSection/section";

const FilteredTable = ({ tipoTarefa }: { tipoTarefa: Tarefa["tipo"] }) => {
  const [openDisplay, setOpenDisplay] = useState({
    autor: false,
    materia: false,
  });

  const [selectAuthor, setSelectAuthor] = useState<Tarefa["autor"] | false>(false);
  const [materia, setMateria] = useState<Tarefa["materia"] | false>(false);

  const toggleDisplay = (field: "autor" | "materia") => {
    setOpenDisplay((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChoose = (field: "autor" | "materia",value: Tarefa["autor"] | Tarefa["materia"]) => {
    setOpenDisplay((prev) => ({ ...prev, [field]: false }));
    if (field === "autor") return setSelectAuthor(value as Tarefa["autor"]);
    setMateria(value as Tarefa["materia"]);
    
  };

  const clearChoose = (field: "autor" | "materia") => {
    setOpenDisplay((prev) => ({ ...prev, [field]: false }));
    if (field === "autor") return setSelectAuthor(false);
    setMateria(false);
    
  };

  return (
    <>
      <Section>
        <div
          className={`${
            openDisplay.autor ? "flex" : "hidden"
          } bg-[#011625] w-max rounded *:text-primary-text flex-col gap-1`}
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
                className=" hidden group-hover:flex transition-colors duration-300"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div
          className={`${
            openDisplay.materia ? "flex" : "hidden"
          } bg-[#011625] w-max rounded *:text-primary-text flex-col gap-1`}
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
                className=" hidden group-hover:flex transition-colors duration-300"
              />
            </div>
          ))}
        </div>
      </Section>

      <table className="w-full mt-8">
        <thead className="bg-[#011625]">
          <tr>
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
                className={`${
                  selectAuthor ? "block" : "hidden"
                } hover:scale-125 hover:brightness-0 hover:saturate-100 hover:invert-[50%] cursor-pointer transition-all duration-300`}
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
                className={`${
                  materia ? "block" : "hidden"
                } hover:scale-125 hover:brightness-0 hover:saturate-100 hover:invert-[50%] cursor-pointer transition-all duration-300`}
                onClick={() => clearChoose("materia")}
              />
            </th>
            <th className="p-5 text-primary-text font-primary text-lg">Tipo</th>
          </tr>
        </thead>
        <tbody className="bg-[#001d31]">
          {tarefas
            .filter((tarefa) => {
              const matchesTipo = tarefa.tipo.includes(tipoTarefa);
              const matchesAuthor = selectAuthor ? tarefa.autor === selectAuthor : true;
              const matchesMateria = materia ? tarefa.materia === materia : true;
              return matchesTipo && matchesAuthor && matchesMateria;
            })
            .map((tarefa, indice) => (
              <tr key={indice}>
                <td className="p-5 text-primary-text font-secondary font-light text-left border-b border-[#1b3040]">
                  {tarefa.autor}
                </td>
                <td className="p-5 text-primary-text font-secondary font-light text-center border-b border-[#1b3040]">
                  {tarefa.titulo}
                </td>
                <td className="p-5 text-primary-text font-secondary font-light text-center border-b border-[#1b3040]">
                  {tarefa.materia}
                </td>
                <td className="p-5 text-primary-text font-secondary font-light text-center border-b border-[#1b3040]">
                  {tarefa.tipo}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default FilteredTable;
