import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react"; // Importe os ícones que você deseja

const Register: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center font-roboto w-full">
      <div className="flex-1  w-full px-10 sm-custom:w-[473px]">
        <h1 className="text-2xl sm:text-3xl text-center font-medium md:font-bold py-5 px-10">
          Crie sua conta
        </h1>
        <form className="flex flex-col justify-center items-center w-full">
          <div className="relative w-full">
            <User className="absolute left-3 top-5 text-red" size={20} />
            <Input placeholder="Nome" type="text" name="name" value="" onChange={() => {}} />
          </div>
          <div className="relative w-full">
            <Mail className="absolute left-3 top-5 text-red" size={20} />
            <Input placeholder="Seu email" type="email" name="email" value="" onChange={() => {}} />
          </div>
          <div className="relative w-full">
            <Lock className="absolute left-3 top-5 text-red" size={20} />
            <Input
              placeholder="Sua senha"
              type="password"
              name="password"
              value=""
              onChange={() => {}}
            />
          </div>
          <div className="pt-4 w-full">
            <Button title="Criar conta" className="h-[45px] w-full text-[20px]" />
          </div>
        </form>
        <div className="flex flex-col justify-center items-center mt-8">
          <p className="opacity-50">Já possui uma conta?</p>
          <Link className="underline text-red font-bold hover:text-buttonHover" to="/login">
            Fazer login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
