import React, { useState } from "react";
import faqUp from "../../assets/img/faq-up.png";
import faqDown from "../../assets/img/faq-down.png";

const faqData = [
  {
    question: "O que é o MemoryCard?",
    answer:
      "O MemoryCard é uma plataforma para gamers organizarem sua jornada nos jogos. Aqui, você pode registrar os jogos que já jogou, os que está jogando e os que planeja jogar, além de criar listas, compartilhar dicas e marcar conquistas.",
  },
  {
    question: "Como posso criar listas de jogos?",
    answer:
      "É simples! Após criar sua conta, você pode adicionar jogos à sua biblioteca e organizá-los em listas personalizadas, como 'Jogados', 'Jogando Agora' e 'Quero Jogar'.",
  },
  {
    question: "Posso compartilhar minhas dicas e conquistas?",
    answer:
      "Sim! No MemoryCard, você pode registrar dicas para cada jogo e compartilhá-las com a comunidade. Além disso, é possível marcar suas conquistas e celebrar cada vitória com outros gamers.",
  },
  {
    question: "O MemoryCard é gratuito?",
    answer:
      "Sim, o MemoryCard é totalmente gratuito! Queremos que todos os gamers possam organizar e compartilhar sua paixão por jogos sem custo algum.",
  },
  {
    question: "Posso me conectar com outros usuários?",
    answer:
      "Com certeza! O MemoryCard é uma comunidade de gamers. Você pode seguir outros usuários, ver suas listas, dicas e conquistas, e interagir com quem compartilha dos mesmos interesses.",
  },
  {
    question: "Como faço para começar?",
    answer:
      "Basta clicar em 'Comece Agora' e criar sua conta gratuitamente. Em poucos minutos, você já estará organizando sua biblioteca de jogos e explorando tudo que o MemoryCard tem a oferecer.",
  },
  {
    question: "Posso usar o MemoryCard no celular?",
    answer:
      "Sim, o MemoryCard é responsivo e funciona perfeitamente em dispositivos móveis. Assim, você pode organizar e acessar sua biblioteca de jogos de qualquer lugar.",
  },
  {
    question: "Como o MemoryCard ajuda a descobrir novos jogos?",
    answer:
      "Com base nos jogos que você já registrou, o MemoryCard oferece recomendações personalizadas para que você descubra novos títulos que combinam com seu estilo.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <dl className="pb-10 px-10 md:px-20 flex flex-col justify-center items-center w-full max-w-4xl mx-auto font-ubuntu ">
      {faqData.map((faq, index) => (
        <div key={index} className="mb-6 w-full">
          <dt
            className="cursor-pointer flex items-center gap-2 bg-gradientRedToLight bg-clip-text text-transparent font-bold text-lg md:text-2xl"
            onClick={() => toggleAnswer(index)}
          >
            {faq.question}
            <img
              src={openIndex === index ? faqUp : faqDown}
              alt={openIndex === index ? "Close" : "Open"}
              className="w-4 h-4"
            />
          </dt>
          {openIndex === index && <dd>{faq.answer}</dd>}
          <hr className="mt-4 opacity-30" />
        </div>
      ))}
    </dl>
  );
};

export default Faq;
