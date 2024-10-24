export const materias = [
  "Artificial Intelligence and Chatbot",
  "Domain Driven Design Using Java",
  "Computational Thinking Using Python",
  "Software Engineering and Business Model",
  "Building Relational Database",
  "Front-End Design Engineering",
] as const;
export type Materia = (typeof materias)[number];

export const autores = [
  "Gustavo Dias",
  "Júlia Monteiro",
  "Júlia Angelozi",
  "Felipe Ribeiro",
  "Sofia Petruk",
] as const;
export type Autor = (typeof autores)[number];

export const tiposTarefa = [
  "Challenge",
  "Global Solution",
  "Checkpoints",
] as const;
export type TipoTarefa = (typeof tiposTarefa)[number];

export type Tarefa = {
  id: number;
  autor: Autor;
  titulo: string;
  materia: Materia;
  tipo: TipoTarefa;
  descricao: string;
  foto?: string;
  semestre?: 1 | 2;
  nota: number;
  feedback?: string;
};

export const tarefas: Tarefa[] = [
  {
    id: 1,
    autor: "Gustavo Dias",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Challenge",
    nota: 0,
  },

  {
    id: 2,
    autor: "Felipe Ribeiro",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Challenge",
    nota: 0,
  },
  {
    id: 3,
    autor: "Júlia Angelozi",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Challenge",
    nota: 0,
  },
  {
    id: 4,
    autor: "Sofia Petruk",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Challenge",
    nota: 0,
  },
  {
    id: 5,
    autor: "Júlia Monteiro",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Challenge",
    nota: 0,
  },
  {
    id: 6,
    autor: "Gustavo Dias",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Checkpoints",
    nota: 0,
  },
  {
    id: 7,
    autor: "Felipe Ribeiro",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Checkpoints",
    nota: 0,
  },
  {
    id: 8,
    autor: "Júlia Angelozi",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Checkpoints",
    nota: 0,
  },
  {
    id: 9,
    autor: "Sofia Petruk",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Checkpoints",
    nota: 0,
  },
  {
    id: 10,
    autor: "Júlia Monteiro",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Checkpoints",
    nota: 0,
  },
  {
    id: 11,
    autor: "Gustavo Dias",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Global Solution",
    nota: 0,
  },
  {
    id: 12,
    autor: "Felipe Ribeiro",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Global Solution",
    nota: 0,
  },
  {
    id: 13,
    autor: "Júlia Angelozi",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Global Solution",
    nota: 0,
  },
  {
    id: 14,
    autor: "Sofia Petruk",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Global Solution",
    nota: 0,
  },
  {
    id: 15,
    autor: "Júlia Monteiro",
    titulo: "EDA - Análise Exploratória de Dados",
    descricao:
      "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais.",
    materia: "Artificial Intelligence and Chatbot",
    tipo: "Global Solution",
    nota: 0,
  },

  //Building Relational Database
    {
        id: 16,
        autor: "Júlia Monteiro",
        titulo: "CP1 - Entrega",
        descricao: "entrega checkpoint",
        materia: "Building Relational Database",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 7,
        feedback: "Vários atributos estão sem comentários ou sem conteúdo significativo. A entidade de endereço do paciente carece de atributos, enquanto os da entidade de contatos estão incorretos. Também faltam regras de negócio para pacientes com vários telefones e e-mails."
    },
    {
        id: 17,
        autor: "Júlia Monteiro",
        titulo: "CP2 - Entrega",
        descricao: "segundo checkpoint",
        materia: "Building Relational Database",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 9
    },
    {
        id: 18,
        autor: "Júlia Monteiro",
        titulo: "CP3 - Entrega",
        descricao: "terceiro checkpoint",
        materia: "Building Relational Database",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 6,
        feedback: "Vários atributos estão sem comentários ou sem conteúdo significativo. A entidade de endereço do paciente carece de atributos, enquanto os da entidade de contatos estão incorretos. Também faltam regras de negócio para pacientes com vários telefones e e-mails."
    },
    {
        id: 19,
        autor: "Júlia Monteiro",
        titulo: "Sprint1 - Entrega",
        descricao: "primeira sprint",
        materia: "Building Relational Database",
        tipo: "Challenge",
        semestre: 1,
        nota: 60,
        feedback: "Estão usando atributos CHAR onde deveria ser VARCHAR. O relacionamento entre MECÂNICO e AVALIAÇÃO não precisa ser identificado."
    },
    {
        id: 20,
        autor: "Júlia Monteiro",
        titulo: "Sprint2 - Entrega",
        descricao: "",
        materia: "Building Relational Database",
        tipo: "Challenge",
        semestre: 1,
        nota: 100,
        feedback: "As entidades LOGIN, USUARIO e CADASTRO são redundantes. A entidade OCORRENCIA precisa de mais atributos, e não há padrão de nomenclatura."
    },
    {
        id: 21,
        autor: "Júlia Monteiro",
        titulo: "Global Solution - 1º Semestre",
        descricao: "Nota: . Feedback: NULL.",
        materia: "Building Relational Database",
        tipo: "Global Solution",
        semestre: 1,
        nota: 65
    },
    {
        id: 22,
        autor: "Júlia Monteiro",
        titulo: "CP4 - Entrega",
        descricao: "Feedback: NULL.",
        materia: "Building Relational Database",
        tipo: "Checkpoints",
        semestre: 2,
        nota: 8.6
    },
    {
        id: 23,
        autor: "Júlia Monteiro",
        titulo: "CP5 - Entrega",
        descricao: "",
        materia: "Building Relational Database",
        tipo: "Checkpoints",
        semestre: 2,
        nota: 9.5
    },
    {
        id: 24,
        autor: "Júlia Monteiro",
        titulo: "Sprint3 - Entrega",
        descricao: "DDL 45 Nomeclatura 30 Relacional 20 Erro ao executar cria.",
        materia: "Building Relational Database",
        tipo: "Challenge",
        semestre: 2,
        nota: 95
    },
    {
        id: 25,
        autor: "Júlia Monteiro",
        titulo: "CP1 - Entrega",
        descricao: "entrega checkpoint",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 7,
        feedback: "Vários atributos estão sem comentários ou sem conteúdo significativo. A entidade de endereço do paciente carece de atributos, enquanto os da entidade de contatos estão incorretos. Também faltam regras de negócio para pacientes com vários telefones e e-mails."
    },
    {
        id: 26,
        autor: "Júlia Monteiro",
        titulo: "CP2 - Entrega",
        descricao: "segundo checkpoint",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 9
    },
    {
        id: 27,
        autor: "Júlia Monteiro",
        titulo: "CP3 - Entrega",
        descricao: "terceiro checkpoint",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 6,
        feedback: "Vários atributos estão sem comentários ou sem conteúdo significativo. A entidade de endereço do paciente carece de atributos, enquanto os da entidade de contatos estão incorretos. Também faltam regras de negócio para pacientes com vários telefones e e-mails."
    },
    {
        id: 28,
        autor: "Júlia Monteiro",
        titulo: "Sprint1 - Entrega",
        descricao: "primeira sprint",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Challenge",
        semestre: 1,
        nota: 60,
        feedback: "Estão usando atributos CHAR onde deveria ser VARCHAR. O relacionamento entre MECÂNICO e AVALIAÇÃO não precisa ser identificado."
    },
    {
        id: 29,
        autor: "Júlia Monteiro",
        titulo: "Sprint2 - Entrega",
        descricao: "",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Challenge",
        semestre: 1,
        nota: 100,
        feedback: "As entidades LOGIN, USUARIO e CADASTRO são redundantes. A entidade OCORRENCIA precisa de mais atributos, e não há padrão de nomenclatura."
    },
    {
        id: 30,
        autor: "Júlia Monteiro",
        titulo: "Global Solution - 1º Semestre",
        descricao: "Nota: . Feedback: NULL.",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Global Solution",
        semestre: 1,
        nota: 65
    },
    {
        id: 31,
        autor: "Júlia Monteiro",
        titulo: "CP4 - Entrega",
        descricao: "Feedback: NULL.",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Checkpoints",
        semestre: 2,
        nota: 8.6
    },
    {
        id: 32,
        autor: "Júlia Monteiro",
        titulo: "CP5 - Entrega",
        descricao: "entrega do cp",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Checkpoints",
        semestre: 2,
        nota: 9.5
    },
    {
        id: 33,
        autor: "Júlia Monteiro",
        titulo: "Sprint3 - Entrega",
        descricao: "terceira sprint",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Challenge",
        semestre: 2,
        nota: 95
    },

  //java
    {
        id: 34,
        autor: "Júlia Monteiro",
        titulo: "CP1 - Entrega",
        descricao: "entrega checkpoint",
        materia: "Domain Driven Design Using Java",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 9,
        feedback: "Implementação correta dos métodos. Método calularTotalDeDespesas não calcula corretamente o valor total da academia (deveria ser: valorMensalidadeDaAcademia * numeroDeMoradores) e também tem erro de português em seu nome. (-1,0)"
    },
    {
        id: 35,
        autor: "Júlia Monteiro",
        titulo: "CP2 - Entrega",
        descricao: "segundo checkpoint",
        materia: "Domain Driven Design Using Java",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 9
    },
    {
        id: 36,
        autor: "Júlia Monteiro",
        titulo: "CP3 - Entrega",
        descricao: "não realizado",
        materia: "Domain Driven Design Using Java",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 0
    },
    {
        id: 37,
        autor: "Júlia Monteiro",
        titulo: "Sprint1 - Entrega",
        descricao: "primeira sprint",
        materia: "Domain Driven Design Using Java",
        tipo: "Challenge",
        semestre: 1,
        nota: 85,
        feedback: "O diagrama de classes deve estar incluído na documentação. Todas as classes, mesmo sem métodos, devem ter seu espaço representado no modelo UML. \"Cadastro\" não é uma classe válida. Alguns atributos não seguem a convenção de nomenclatura e estão sem tipo definido. O uso do tipo \"string\" está incorreto, pois deveria ser \"String\" com letra maiúscula. Além disso, Oficina e InformacoesOficina deveriam ser uma única classe, pois não há justificativa para a separação."
    },
    {
        id: 38,
        autor: "Júlia Monteiro",
        titulo: "Sprint2 - Entrega",
        descricao: "2° sprint de java",
        materia: "Domain Driven Design Using Java",
        tipo: "Challenge",
        semestre: 1,
        nota: 93,
        feedback: "No Diagrama de Classes, atributos do tipo datas e horas usar tipo coerentes (não String ou int). Rever as classes para melhor adequar ao escopo apresentado: PassoReparo e ServicoExtra. (-2 ptos) Projeto entregue com erro (na classe OrcamentoTotal). (-5 ptos) Na classe de teste, objeto da classe Scanner não é fechado. No diagrama de classes, a herança está incorreta, pois a classe Contato não deveria herdar atributos de Ocorrencia. O método usuarioInfo na classe Usuario retorna apenas um tipo. Os nomes dos métodos no projeto não correspondem ao diagrama UML, e a herança é mal implementada, com repetição de atributos na classe filho. Além disso, a classe de teste não segue a convenção de nomenclatura, e a sobrescrita de métodos é inválida, pois não realiza ações diferentes."
    },
    {
        id: 39,
        autor: "Júlia Monteiro",
        titulo: "Global Solution - 1º Semestre",
        descricao: "entrega global solution.",
        materia: "Domain Driven Design Using Java",
        tipo: "Global Solution",
        semestre: 1,
        nota: 73
    },
    {
        id: 40,
        autor: "Júlia Monteiro",
        titulo: "CP4 - Entrega",
        descricao: "Não realizado.",
        materia: "Domain Driven Design Using Java",
        tipo: "Checkpoints",
        semestre: 2,
        nota: 0
    },
    {
        id: 41,
        autor: "Júlia Monteiro",
        titulo: "CP5 - Entrega",
        descricao: "cp de java",
        materia: "Domain Driven Design Using Java",
        tipo: "Checkpoints",
        semestre: 2,
        nota: 9
    },
    {
        id: 42,
        autor: "Júlia Monteiro",
        titulo: "Sprint3 - Entrega",
        descricao: "DDL 45 Nomeclatura 30 Relacional 20 Erro ao executar cria.",
        materia: "Domain Driven Design Using Java",
        tipo: "Challenge",
        semestre: 2,
        nota: 95
    },

  //Front-End Design Engineering

    {
        id: 43,
        autor: "Júlia Monteiro",
        titulo: "CP1 - Entrega",
        descricao: "entrega checkpoint",
        materia: "Front-End Design Engineering",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 7.5,
        feedback: "estrutura e nomenclatura semantica nota=75"
    },
    {
        id: 44,
        autor: "Júlia Monteiro",
        titulo: "CP2 - Entrega",
        descricao: "segundo checkpoint",
        materia: "Front-End Design Engineering",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 10,
        feedback: "A estrutura está legal, mas faltou atenção em alguns momentos, por exemplo quando vamos examinar seu chatBot, não é possível voltar, tem que fazer isso pelo Navegador."
    },
    {
        id: 45,
        autor: "Júlia Monteiro",
        titulo: "CP3 - Entrega",
        descricao: "terceiro checkpoint",
        materia: "Front-End Design Engineering",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 7.5,
        feedback: "- Contexto: Foi utilizado texto lorem em um projeto real. Qual função da página chat? Esta página quando acessada é impossível retornar para a página inicial. Ela abre em uma nova aba sendo um link interno ao sistema, sem necessidade e não deixa opções de retorno. (-10)"
    },
    {
        id: 46,
        autor: "Júlia Monteiro",
        titulo: "Sprint1 - Entrega",
        descricao: "primeira sprint",
        tipo: "Challenge",
        semestre: 1,
        nota: 60,
        materia: "Front-End Design Engineering"
    },
    {
        id: 47,
        autor: "Júlia Monteiro",
        titulo: "Sprint2 - Entrega",
        descricao: "",
        materia: "Front-End Design Engineering",
        tipo: "Challenge",
        semestre: 1,
        nota: 55
    },
    {
        id: 48,
        autor: "Júlia Monteiro",
        titulo: "Global Solution - 1º Semestre",
        descricao: "entrega de Global Solution",
        materia: "Front-End Design Engineering",
        tipo: "Global Solution",
        semestre: 1,
        nota: 60
    },
    {
        id: 49,
        autor: "Júlia Monteiro",
        titulo: "CP4 - Entrega",
        descricao: "Feedback: N/A.",
        materia: "Front-End Design Engineering",
        tipo: "Checkpoints",
        semestre: 2,
        nota: 3.5
    },
    {
        id: 50,
        autor: "Júlia Monteiro",
        titulo: "CP5 - Entrega",
        descricao: "",
        materia: "Front-End Design Engineering",
        tipo: "Checkpoints",
        semestre: 2,
        nota: 8.5,
        feedback: "Estrutura e organização do projeto (20 pontos): 220 Implementação de rotas e rotas dinâmicas (30 pontos): 20 Página de erro personalizada (10 pontos): 10 Endpoints do projeto (30 pontos): 25 Colaboração e versionamento (10 pontos): 10"
    },
    {
        id: 51,
        autor: "Júlia Monteiro",
        titulo: "Sprint3 - Entrega",
        descricao: "",
        materia: "Front-End Design Engineering",
        tipo: "Challenge",
        semestre: 2,
        nota: 80,
        feedback: "Existem erros semanticos não observados no projeto."
    },
    {
        id: 52,
        autor: "Júlia Monteiro",
        titulo: "CP1 - Entrega",
        descricao: "entrega checkpoint",
        materia: "Software Engineering and Business Model",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 9.5,
        feedback: "Feedback ao vivo"
    },
    {
        id: 53,
        autor: "Júlia Monteiro",
        titulo: "CP2 - Entrega",
        descricao: "segundo checkpoint",
        materia: "Software Engineering and Business Model",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 9.5
    },
    {
        id: 54,
        autor: "Júlia Monteiro",
        titulo: "CP3 - Entrega",
        descricao: "terceiro checkpoint",
        materia: "Software Engineering and Business Model",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 0
    },
    {
        id: 55,
        autor: "Júlia Monteiro",
        titulo: "Sprint1 - Entrega",
        descricao: "primeira sprint",
        tipo: "Challenge",
        semestre: 1,
        nota: 93,
        materia: "Software Engineering and Business Model"
    },
    {
        id: 56,
        autor: "Júlia Monteiro",
        titulo: "Sprint2 - Entrega",
        descricao: "entrega segunda sprint",
        materia: "Software Engineering and Business Model",
        tipo: "Challenge",
        semestre: 1,
        nota: 97,
        feedback: "Backlog excepcional! Descrição excelente. Pitch ótimo. Matriz CSD legal. Diagrama bem legal algumas questões mas no geral muito bom."
    },
    {
        id: 57,
        autor: "Júlia Monteiro",
        titulo: "Global Solution - 1º Semestre",
        descricao: "entrega Global solution",
        materia: "Software Engineering and Business Model",
        tipo: "Global Solution",
        semestre: 1,
        nota: 95
    },
    {
        id: 58,
        autor: "Júlia Monteiro",
        titulo: "CP4 - Entrega",
        descricao: "quarto checkpoint",
        materia: "Software Engineering and Business Model",
        tipo: "Checkpoints",
        semestre: 2,
        nota: 9,
        feedback: "Não traz sobre a tela de erro do Ifood que não informa sobre qual é o erro. As primeiras heurísticas têm mais coisas que poderiam ter sido detalhadas."
    },
    {
        id: 59,
        autor: "Júlia Monteiro",
        titulo: "CP5 - Entrega",
        descricao: "quinto checkpoint",
        materia: "Software Engineering and Business Model",
        tipo: "Checkpoints",
        semestre: 2,
        nota: 8,
        feedback: "No seu diagrama de atividades faltaram as formas de entrega."
    },
    {
        id: 60,
        autor: "Júlia Monteiro",
        titulo: "Sprint3 - Entrega",
        descricao: "",
        materia: "Software Engineering and Business Model",
        tipo: "Challenge",
        semestre: 2,
        nota: 100,
        feedback: "Os diagramas de vocês estão OK. O protótipo está legal! Backlog ok. Parabéns 10/10."
    },

  //Computational Thinking Using Python
    {
        id: 61,
        autor: "Júlia Monteiro",
        titulo: "CP1 - Entrega",
        descricao: "entrega checkpoint",
        materia: "Computational Thinking Using Python",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 9,
        feedback: "Exe1 (4,5) - Faltou somar as comissões com o salário fixo. Exe2 (4,5) - Fluxograma - o teste composto deve ser realizado com a variável em todas as partes | não possui inicio e fim - cálculo não realizado."
    },
    {
        id: 62,
        autor: "Júlia Monteiro",
        titulo: "CP2 - Entrega",
        descricao: "segundo checkpoint",
        materia: "Computational Thinking Using Python",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 7,
        feedback: "Exe1(4,0) - não há necessidade de implementar uma estrutura de repetição para executar uma única vez | condição de parada não atende ao solicitado | lógica ok. Exe2(3,0) poderiam ter utilizado o mesmo laço para captar as informações, pois possuem a mesma lógica | Programa todo sequencial, sem aplicação de condições e repetição."
    },
    {
        id: 63,
        autor: "Júlia Monteiro",
        titulo: "CP3 - Entrega",
        descricao: "terceiro checkpoint",
        materia: "Computational Thinking Using Python",
        tipo: "Checkpoints",
        semestre: 1,
        nota: 8
    },
    {
        id: 64,
        autor: "Júlia Monteiro",
        titulo: "Sprint1 - Entrega",
        descricao: "primeira sprint",
        tipo: "Challenge",
        semestre: 1,
        nota: 95,
        feedback: "Aplicações dos conceitos vistos em aula - Muito bom! de acordo com o solicitado | validação ok.",
        materia: "Computational Thinking Using Python"
    },
    {
        id: 65,
        autor: "Júlia Monteiro",
        titulo: "Sprint2 - Entrega",
        descricao: "",
        materia: "Computational Thinking Using Python",
        tipo: "Challenge",
        semestre: 1,
        nota: 40,
        feedback: "Pouca evolução da Sprint 1. Não foram encontradas explicações sobre os pontos de melhorias e/ou fluxograma."
    },
    {
        id: 66,
        autor: "Júlia Monteiro",
        titulo: "Global Solution - 1º Semestre",
        descricao: "entrega global solution",
        materia: "Computational Thinking Using Python",
        tipo: "Global Solution",
        semestre: 1,
        nota: 95,
        feedback: "N/A"
    }

];
