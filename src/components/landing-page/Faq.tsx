import { useState } from "react";
import faqUp from "../../assets/img/faq-up.png";
import faqDown from "../../assets/img/faq-down.png";

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores delectus, commodi totam quasi a ut ad similique, ab, eligendi qui esse? Corporis aspernatur aperiam obcaecati tempora, accusantium rerum omnis animi!",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores delectus, commodi totam quasi a ut ad similique, ab, eligendi qui esse? Corporis aspernatur aperiam obcaecati tempora, accusantium rerum omnis animi!",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores delectus, commodi totam quasi a ut ad similique, ab, eligendi qui esse? Corporis aspernatur aperiam obcaecati tempora, accusantium rerum omnis animi!",
  },
];

const Faq = () => {
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
