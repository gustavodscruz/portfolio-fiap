import { Tarefa, tarefas } from "@/utils/fakelist";
import React, { useState } from "react";
import { FaCheckSquare, FaFilter, FaTrash } from "react-icons/fa";
import Section from "../MotionSection/section";

const FilteredTable = ({tipoTarefa} : {tipoTarefa : Tarefa['tipo']} ) => {
  const [openDisplay, setOpenDisplay] = useState(false);

  const toggleDisplay = () => {
    setOpenDisplay(!openDisplay);
  };
  const handleAuthorChoose = (autor: Tarefa["autor"]) => {
    setSelectAuthor(autor);
  };

  const clearAuthorChoose = () => {
    setSelectAuthor(false);
    if (openDisplay) setOpenDisplay(false);
  };

  const [selectAuthor, setSelectAuthor] = useState<boolean | Tarefa["autor"]>(
    false
  );

  return (
    <>
      <Section>
        <div
          className={`${
            openDisplay ? "flex" : "hidden"
          } bg-[#011625] w-max rounded *:text-primary-text flex-col gap-1`}
        >
          <div
            onClick={() => handleAuthorChoose("Gustavo Dias")}
            className="group flex p-4 cursor-pointer min-w-40 justify-between font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300"
          >
            <p>Gustavo Dias</p>
            <FaCheckSquare
              color="#16a34a"
              size={15}
              className=" hidden group-hover:flex transition-colors duration-300"
            />
          </div>
          <div
            onClick={() => handleAuthorChoose("Sofia Petruk")}
            className="group flex p-4 cursor-pointer min-w-40 justify-between font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300"
          >
            <p>Sofia Petruk</p>
            <FaCheckSquare
              color="#16a34a"
              size={15}
              className=" hidden group-hover:flex transition-colors duration-300"
            />
          </div>
          <div
            onClick={() => handleAuthorChoose("Felipe Ribeiro")}
            className="group flex p-4 cursor-pointer min-w-40 justify-between font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300"
          >
            <p>Felipe Ribeiro</p>
            <FaCheckSquare
              color="#16a34a"
              size={15}
              className=" hidden group-hover:flex transition-colors duration-300"
            />
          </div>
          <div
            onClick={() => handleAuthorChoose("Júlia Monteiro")}
            className="group flex p-4 cursor-pointer min-w-40 justify-between font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300"
          >
            <p>Júlia Monteiro</p>
            <FaCheckSquare
              color="#16a34a"
              size={15}
              className=" hidden group-hover:flex transition-colors duration-300"
            />
          </div>
          <div
            onClick={() => handleAuthorChoose("Júlia Angelozi")}
            className="group flex p-4 cursor-pointer min-w-40 justify-between font-primary tracking-wide text-sm gap-3 items-center hover:bg-[#022c4b] transition-all duration-300"
          >
            <p>Júlia Angelozi</p>
            <FaCheckSquare
              color="#16a34a"
              size={15}
              className=" hidden group-hover:flex transition-colors duration-300"
            />
          </div>
        </div>
      </Section>
      <table className="w-full mt-8">
        <thead className="bg-[#011625]">
          <tr className="">
            <th className=" flex p-5 items-center gap-3">
              <p className="text-primary-text font-primary text-lg">Autor</p>
              <FaFilter
                color="#FFF"
                size={15}
                className="hover:scale-125 hover:brightness-0 hover:saturate-100 hover:invert-[50%] cursor-pointer transition-all duration-300"
                onClick={toggleDisplay}
              />
              <FaTrash
                color="#fff"
                size={15}
                className={`${
                  selectAuthor ? "block" : "hidden"
                } hover:scale-125 hover:brightness-0 hover:saturate-100 hover:invert-[50%] cursor-pointer transition-all duration-300`}
                onClick={clearAuthorChoose}
              />
            </th>
            <th className="p-5 items-center gap-3">
              <p className="text-primary-text font-primary text-lg">Tarefa</p>
            </th>
            <th className="p-5 items-center gap-3">
              <p className="text-primary-text font-primary text-lg">Matéria</p>
            </th>
            <th className="rounded-tr-md p-5 items-center gap-3">
              <p className="text-primary-text font-primary text-lg">Tipo</p>
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#001d31] last:rounded-b-md">
          {tarefas.map((tarefa, indice) =>
            selectAuthor ? (
              tarefa.tipo.includes(tipoTarefa) &&
              tarefa.autor == selectAuthor ? (
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
              ) : (
                ""
              )
            ) : tarefa.tipo.includes(tipoTarefa) ? (
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
            ) : (
              ""
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default FilteredTable;
