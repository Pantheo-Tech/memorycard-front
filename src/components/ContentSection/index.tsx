import React from "react";

interface ContentSectionProps {
  isRowReverse?: boolean;
  img: string;
  text: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  img,
  text,
  isRowReverse = false,
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-center gap-4 px-4 md:px-10 lg:px-20 mb-10 ${
        isRowReverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <img src={img} alt="" className="w-full md:w-1/2" />
      <div className="md:w-1/2">
        <p className="mt-4 font-ubuntu text-sm md:text-xl lg:text-2xl">{text}</p>
      </div>
    </section>
  );
};
