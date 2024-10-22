import Card from "@/components/CardMembro/cardmembro";
import Section from "@/components/MotionSection/section";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-5 p-4 w-full m-auto">
      <Section>
        <div className="flex justify-between w-full m-auto ">
          <div className="flex m-auto justify-start w-1/2">
            <h1 className="text-primary-text text-3xl">
              Seja bem-vindo ao nosso portfólio
            </h1>
          </div>
          <div className="flex m-auto justify-center w-1/2">
            <Image
              src="/coding.gif"
              alt="Codando"
              height={1920}
              width={1080}
              className="h-96 object-cover border-red-custom border-4 rounded-md"
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-4 items-center mt-10">
          <Image src="/seta.svg" alt="seta-divisao" height={23} width={23} />
          <h2 className="text-red-custom text-3xl font-bold font-primary">
            Avaliações
          </h2>
          <p className="text-primary-text text-xl font-medium font-secondary">
            Dos estudos para a prática: veja alguns cases
          </p>
          <div className="flex justify-between gap-4 m-auto">
            <Link href="/challenge">
              <div className="flex flex-col border min-h-52 justify-center max-w-96  border-black rounded-md py-5 px-6 gap-4 transition-all duration-300 hover:bg-[#005fa3] group">
                <Image
                  src="/challenge.svg"
                  alt="icone-challenge"
                  height={48}
                  width={48}
                  className="group-hover:brightness-0 group-hover:saturate-100 group-hover:invert transition-all duration-300"
                />
                <h3 className="text-primary-text font-primary">
                  Challenge Sprints
                </h3>
                <p className="text-primary-text font-secondary">
                  Avaliação dividida em desafios, onde se desenvolve uma aplicação
                  proposta por empresas parceiras
                </p>
              </div>
            </Link>
            <Link href="/checkpoint">
              <div className="flex flex-col border min-h-52 justify-center max-w-96  border-black rounded-md py-3 px-4 gap-4 transition-all duration-300 hover:bg-[#ffd7a3] group">
                <Image
                  src="/checkpoint.svg"
                  alt="icone-checkpoint"
                  height={48}
                  width={48}
                  className="group-hover:brightness-0 group-hover:saturate-100 transition-all duration-300"
                />
                <h3 className="text-primary-text font-primary group-hover:text-black transition-all duration-300">
                  Checkpoints
                </h3>
                <p className="text-primary-text font-secondary group-hover:text-black transition-all duration-300">
                  Avaliação intermediária, que visa acompanhar o desemprenho dos
                  alunos em cada matéria
                </p>
              </div>
            </Link>
            <Link href="/global-solution">
              <div className="flex flex-col border min-h-52 justify-center max-w-96  border-black rounded-md py-3 px-4 gap-4 transition-all duration-300 hover:bg-[#8d48f9] group">
                <Image
                  src="/global.svg"
                  alt="icone-global-solution"
                  height={40}
                  width={40}
                  className="group-hover:brightness-0 group-hover:saturate-100 group-hover:invert transition-all duration-300"
                />
                <h3 className="text-primary-text font-primary">
                  Global Solution
                </h3>
                <p className="text-primary-text font-secondary">
                  Avaliação semestral e multidisciplinar onde os alunos resolvem
                  problemas ambientais
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-4 items-center mt-8">
          <Image src="/seta.svg" alt="seta-divisao" height={23} width={23} />
          <h2 className="text-red-custom text-3xl font-bold font-primary">
            Desempenho Geral
          </h2>
          <p className="text-primary-text text-xl font-medium font-secondary">
            Uma pequena amostra
          </p>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-4 items-center mt-8">
          <h2 className="text-primary-text text-3xl font-bold font-primary">
            &lt;Nossos
          </h2>
          <h2 className="text-red-custom text-3xl font-bold font-primary">
            Devs/&gt;
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 justify-center gap-y-8">
          <Card
            nome="Gustavo"
            resumo="Java, Node.js, e Next.js. Utilizo SQL e metodologias ágeis. Dev 🦉"
            foto="/gustavo.jpg"
            github="https://github.com/gustavodscruz"
            linkedin="https://linkedin.com/in/gustavodiasdsc"
          />
          <Card
            nome="Gustavu"
            resumo="Bão demais e lindo, e viado (segundo a Júlia Angelozi, rm 98888"
          />
          <Card
            nome="Júlia Angelozi"
            resumo="Estudante de Análise e Desenvolvimento de Sistemas"
            foto="https://github.com/JuliaAngelozi.png"
            github="https://github.com/JuliaAngelozi"
            linkedin="https://linkedin.com/in/julia-angelozi"
          />
          <Card
            nome="Gustavu"
            resumo="Bão demais e lindo, e viado (segundo a Júlia Angelozi, rm 98888"
          />
          <Card
            nome="Gustavu"
            resumo="Bão demais e lindo, e viado (segundo a Júlia Angelozi, rm 98888"
          />
        </div>
      </Section>
    </div>
  );
}
