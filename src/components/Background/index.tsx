import React from "react";
import background from "../../assets/img/background-landing-page.png";
import Overlay from "../Overlay";

const Background: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen">
      <Overlay />
      {/* Garante que o background tenha no mínimo a altura da tela */}
      <img
        src={background}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
    </div>
  );
};

export default Background;
