import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react"; // Importe os ícones que você deseja
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

type RegisterData = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterData) => {
    console.log(data);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center font-roboto w-full">
      <div className="flex-1  w-full px-10 sm-custom:w-[473px]">
        <h1 className="text-2xl sm:text-3xl text-center font-medium md:font-bold py-5 px-10">
          Crie sua conta
        </h1>
        <form
          className="flex flex-col justify-center items-center w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative w-full">
            <User className="absolute left-3 top-5 text-red" size={20} />
            <Input
              name="name"
              placeholder="Nome"
              type="text"
              register={register}
              error={errors.name?.message}
            />
          </div>
          <div className="relative w-full">
            <Mail className="absolute left-3 top-5 text-red" size={20} />
            <Input
              name="email"
              placeholder="Seu email"
              type="email"
              register={register}
              error={errors.email?.message}
            />
          </div>
          <div className="relative w-full">
            <Lock className="absolute left-3 top-5 text-red" size={20} />
            <Input
              name="password"
              placeholder="Sua senha"
              type="password"
              register={register}
              error={errors.password?.message}
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
