"use client"
import { Tarefa } from '@/utils/tarefas';
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<Tarefa['autor'] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/tarefa');
        const data : Tarefa[]  = await response.json()
        setTarefas(data);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    fetchData();
  }, []);

  const autores = ["Gustavo Dias", "Júlia Monteiro", "Júlia Angelozi", "Felipe Ribeiro", "Sofia Petruk"];

  const handleAuthorClick = (author: Tarefa['autor']) => {
    setSelectedAuthor(author);
  };

  const getPieChartData = () => {
    if (!selectedAuthor) return [];

    const authorTarefas = tarefas.filter(tarefa => tarefa.autor === selectedAuthor);
    const materiaCounts = authorTarefas.reduce((acc, tarefa) => {
      acc[tarefa.materia] = (acc[tarefa.materia] || 0) + 1;
      return acc;
    }, {} as Record<Tarefa['materia'], number>);

    return Object.keys(materiaCounts).map(materia => ({
      name: materia,
      value: materiaCounts[materia as Tarefa['materia']],
    }));
  };

  const getBarChartData = () => {
    if (!selectedAuthor) return [];

    const authorTarefas = tarefas.filter(tarefa => tarefa.autor === selectedAuthor);
    const top50PercentTarefas = authorTarefas.sort((a, b) => b.nota - a.nota).slice(0, Math.ceil(authorTarefas.length / 2));

    const materiaCounts = top50PercentTarefas.reduce((acc, tarefa) => {
      acc[tarefa.materia] = (acc[tarefa.materia] || 0) + 1;
      return acc;
    }, {} as Record<Tarefa['materia'], number>);

    return Object.keys(materiaCounts).map(materia => ({
      name: materia,
      value: materiaCounts[materia as Tarefa['materia']],
    }));
  };

  const COLORS = {
    "Artificial Intelligence and Chatbot": '#0088FE',
    "Domain Driven Design Using Java": '#00C49F',
    "Computational Thinking Using Python": '#FFBB28',
    "Software Engineering and Business Model": '#FF8042',
    "Building Relational Database": '#AF19FF',
    "Front-End Design Engineering": '#FF6347'
  };

  return (
    <div>
      <div className="flex gap-4 mb-4 justify-center">
        {autores.map((autor, index) => (
          <button
            key={index}
            onClick={() => handleAuthorClick(autor as Tarefa['autor'])}
            className={`p-2 rounded transition-all duration-300 ${selectedAuthor === autor ? 'bg-red-custom text-primary-text font-semibold' : 'bg-gray-200'}`}
          >
            {autor}
          </button>
        ))}
      </div>

      {selectedAuthor && (
        <div className='flex flex-col py-4'>
         

          <div className="flex gap-8 justify-center items-center">
            <div className='flex flex-col items-center pt-14'>
              <h3 className="text-lg mb-2 text-primary-text">Distribuição por Matéria</h3>
              <PieChart width={500} height={400} className='' >
                <Pie
                  data={getPieChartData()}
                  cx={250}
                  cy={150}
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {getPieChartData().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" align='center' height={36} />
              </PieChart>
            </div>

            <div className='-mt-10'>
              <h3 className="text-lg mb-2 text-primary-text">50% Melhores Notas</h3>
              <BarChart width={500} height={300} data={getBarChartData()} >
                <XAxis dataKey="name" color='#e2e4e9' />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value">
                  {getBarChartData().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
                  ))}
                </Bar>
              </BarChart>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;