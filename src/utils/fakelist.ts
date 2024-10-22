export type Tarefa = {
    autor : "Gustavo Dias" | "Júlia Monteiro" | "Júlia Angelozi" | "Felipe Ribeiro" | "Sofia Petruk", 
    titulo : string,
    materia : "Artificial Intelligence and Chatbot" | "Domain Driven Design Using Java" | "Computational Thinking Using Python" | "Software Engineering and Business Model" | "Building Relational Database" | "Front-End Design Engineering", 
    tipo : "Challenge" | "Global Solution" | "Checkpoints",
    descricao : string,
    foto? : string ,
    semestre?: 1|2
    nota: number,
    feedback?: string

}


export const tarefas : Tarefa[] = [
    {
        autor: "Gustavo Dias",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Challenge",
        nota: 0
    },
    {
        autor: "Felipe Ribeiro",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Challenge",
        nota: 0
    },
    {
        autor: "Júlia Angelozi",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Challenge",
        nota: 0
    },
    {
        autor: "Sofia Petruk",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Challenge",
        nota: 0
    },
    {
        autor: "Júlia Monteiro",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Challenge",
        nota: 0
    },
    {
        autor: "Gustavo Dias",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Checkpoints",
        nota: 0
    },
    {
        autor: "Felipe Ribeiro",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Checkpoints",
        nota: 0
    },
    {
        autor: "Júlia Angelozi",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Checkpoints",
        nota: 0
    },
    {
        autor: "Sofia Petruk",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Checkpoints",
        nota: 0
    },
    {
        autor: "Júlia Monteiro",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Checkpoints",
        nota: 0
    },
    {
        autor: "Gustavo Dias",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Global Solution",
        nota: 0
    },
    {
        autor: "Felipe Ribeiro",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Global Solution",
        nota: 0
    },
    {
        autor: "Júlia Angelozi",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Global Solution",
        nota: 0
    },
    {
        autor: "Sofia Petruk",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Global Solution",
        nota: 0
    },
    {
        autor: "Júlia Monteiro",
        titulo: "EDA - Análise Exploratória de Dados",
        descricao: "EDA, ou Análise Exploratória de Dados, é o processo inicial de análise de dados destinado a resumir suas principais características frequentemente usando métodos visuais. ",
        materia: "Artificial Intelligence and Chatbot",
        tipo: "Global Solution",
        nota: 0
    },
   
        //Building Relational Database

        {
            autor: "Júlia Monteiro",
            titulo: "CP1 - Entrega",
            descricao: ",entrega checkpoint",
            materia: "Building Relational Database",
            tipo: "Checkpoints",
            semestre: 1,
            nota: 7,
            feedback: " Vários atributos estão sem comentários ou sem conteúdo significativo. A entidade de endereço do paciente carece de atributos, enquanto os da entidade de contatos estão incorretos. Também faltam regras de negócio para pacientes com vários telefones e e-mails."
        },
        {
            autor: "Júlia Monteiro",
            titulo: "CP2 - Entrega",
            descricao: "segundo checkpoint",
            materia: "Building Relational Database",
            tipo: "Checkpoints",
            semestre: 1,
            nota: 9
            
        },
        {
            autor: "Júlia Monteiro",
            titulo: "CP3 - Entrega",
            descricao: "terceiro checkpoint",
            materia: "Building Relational Database",
            tipo: "Checkpoints",
            semestre: 1,
            nota: 6,
            feedback:  "Vários atributos estão sem comentários ou sem conteúdo significativo. A entidade de endereço do paciente carece de atributos, enquanto os da entidade de contatos estão incorretos. Também faltam regras de negócio para pacientes com vários telefones e e-mails."
        },
        {
            autor: "Júlia Monteiro",
            titulo: "Sprint1 - Entrega",
            descricao: "primeira sprint",
            tipo: "Challenge",
            semestre: 1,
            nota: 60,
            feedback: "Estão usando atributos CHAR onde deveria ser VARCHAR. O relacionamento entre MECÂNICO e AVALIAÇÃO não precisa ser identificado.",
            materia: "Building Relational Database",
        },
        {
            autor: "Júlia Monteiro",
            titulo: "Sprint2 - Entrega",
            descricao: "",
            materia: "Building Relational Database",
            tipo: "Challenge",
            semestre: 1,
            nota: 100,
            feedback:"As entidades LOGIN, USUARIO e CADASTRO são redundantes. A entidade OCORRENCIA precisa de mais atributos, e não há padrão de nomenclatura."
        },
        {
            autor: "Júlia Monteiro",
            titulo: "Global Solution - 1º Semestre",
            descricao: "Nota: . Feedback: NULL.",
            materia: "Building Relational Database",
            tipo: "Global Solution",
            semestre: 1,
            nota: 65
           
        },
        {
            autor: "Júlia Monteiro",
            titulo: "CP4 - Entrega",
            descricao: " Feedback: NULL.",
            materia: "Building Relational Database",
            tipo: "Checkpoints",
            semestre: 2,
            nota: 8.6,
            
            
        },
        {
            autor: "Júlia Monteiro",
            titulo: "CP5 - Entrega",
            descricao: "",
            materia: "Building Relational Database",
            tipo: "Checkpoints",
            semestre: 2,
            nota: 9.5
        },
        {
            autor: "Júlia Monteiro",
            titulo: "Sprint3 - Entrega",
            descricao: " DDL 45 Nomeclatura 30 Relacional 20 Erro ao executar cria.",
            materia: "Building Relational Database",
            tipo: "Challenge",
            semestre: 2,
            nota: 95
        }
        //Artificial Intelligence and Chatbot
        ,{
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
            autor: "Júlia Monteiro",
            titulo: "CP2 - Entrega",
            descricao: "segundo checkpoint",
            materia: "Artificial Intelligence and Chatbot",
            tipo: "Checkpoints",
            semestre: 1,
            nota: 9
        },
        {
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
            autor: "Júlia Monteiro",
            titulo: "Sprint1 - Entrega",
            descricao: "primeira sprint",
            tipo: "Challenge",
            semestre: 1,
            nota: 60,
            feedback: "Estão usando atributos CHAR onde deveria ser VARCHAR. O relacionamento entre MECÂNICO e AVALIAÇÃO não precisa ser identificado.",
            materia: "Artificial Intelligence and Chatbot"
        },
        {
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
            autor: "Júlia Monteiro",
            titulo: "Global Solution - 1º Semestre",
            descricao: "Nota: . Feedback: NULL.",
            materia: "Artificial Intelligence and Chatbot",
            tipo: "Global Solution",
            semestre: 1,
            nota: 65
        },
        {
            autor: "Júlia Monteiro",
            titulo: "CP4 - Entrega",
            descricao: "Feedback: NULL.",
            materia: "Artificial Intelligence and Chatbot",
            tipo: "Checkpoints",
            semestre: 2,
            nota: 8.6
        },
        {
            autor: "Júlia Monteiro",
            titulo: "CP5 - Entrega",
            descricao: "entrega do cp",
            materia: "Artificial Intelligence and Chatbot",
            tipo: "Checkpoints",
            semestre: 2,
            nota: 9.5
        },
        {
            autor: "Júlia Monteiro",
            titulo: "Sprint3 - Entrega",
            descricao:"terceira sprint" ,
            materia: "Artificial Intelligence and Chatbot",
            tipo: "Challenge",
            semestre: 2,
            nota: 95
        }
        //java
        ,{
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
            autor: "Júlia Monteiro",
            titulo: "CP2 - Entrega",
            descricao: "segundo checkpoint",
            materia: "Domain Driven Design Using Java",
            tipo: "Checkpoints",
            semestre: 1,
            nota: 9,
            feedback: "N/A"
        },
        {
            autor: "Júlia Monteiro",
            titulo: "CP3 - Entrega",
            descricao: "não realizado",
            materia: "Domain Driven Design Using Java",
            tipo: "Checkpoints",
            semestre: 1,
            nota: 0,
            feedback: "N/A"
        },
        {
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
            autor: "Júlia Monteiro",
            titulo: "Global Solution - 1º Semestre",
            descricao: "entrega global solution.",
            materia: "Domain Driven Design Using Java",
            tipo: "Global Solution",
            semestre: 1,
            nota: 73,
            feedback: ""
        },
        {
            autor: "Júlia Monteiro",
            titulo: "CP4 - Entrega",
            descricao: "Não realizado.",
            materia: "Domain Driven Design Using Java",
            tipo: "Checkpoints",
            semestre: 2,
            nota: 0,
            feedback: "N/A"
        },
        {
            autor: "Júlia Monteiro",
            titulo: "CP5 - Entrega",
            descricao: "cp de java",
            materia: "Domain Driven Design Using Java",
            tipo: "Checkpoints",
            semestre: 2,
            nota: 9,
            feedback: "N/A"
        },
        {
            autor: "Júlia Monteiro",
            titulo: "Sprint3 - Entrega",
            descricao: "DDL 45 Nomeclatura 30 Relacional 20 Erro ao executar cria.",
            materia: "Domain Driven Design Using Java",
            tipo: "Challenge",
            semestre: 2,
            nota: 95,
            feedback: "N/A"
        }

    ];


  
    
    




