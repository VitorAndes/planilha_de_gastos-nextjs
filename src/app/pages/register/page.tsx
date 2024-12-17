"use client";

import { Button } from "@/components/button";
import { AtSign, CircleUserRound, LockKeyhole, LockOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GoogleImage from "/public/Google.svg";
import RegisterImage from "/public/GraphImage.svg";

export default function page() {
  const [showPassword, setShowPassoword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassoword(!showPassword);
  };

  const handleOnSubmit = () => {};

  return (
    <div className="flex min-h-screen bg-backgroundMine">
      <div className="bg-secondary shadow shadow-primary border-r border-primary w-[730px] p-20">
        <h1 className="font-bold text-3xl mb-2">Cadastrar</h1>
        <span className="">Insira seus dados para se cadastrar</span>
        <form onSubmit={handleOnSubmit} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-3 ">
            <label className="font-semibold " htmlFor="name">
              Nome
            </label>
            <div className="w-full relative">
              <input
                id="name"
                type="text"
                required
                className=" w-full rounded-md shadow shadow-black p-2 text-black "
              />
              <CircleUserRound className="text-black absolute -top-0.5 right-3 translate-y-2/4" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-semibold " htmlFor="email">
              Email
            </label>
            <div className="relative w-full">
              <input
                id="email"
                placeholder="v@example.com"
                type="email"
                required
                className="w-full rounded-md shadow shadow-black p-2 text-black "
              />
              <AtSign className="text-black absolute -top-0.5 right-3 translate-y-2/4" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-semibold " htmlFor="password">
              Senha
            </label>
            <div className="w-full relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                minLength={8}
                className="w-full rounded-md shadow shadow-black p-2 text-black "
              />
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <LockOpen className="text-black absolute -top-0.5 right-3 translate-y-2/4" />
                ) : (
                  <LockKeyhole className="text-black absolute -top-0.5 right-3 translate-y-2/4" />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-semibold " htmlFor="passwordConfirm">
              Confime a senha
            </label>
            <div className="w-full relative">
              <input
                id="passwordConfirm"
                type={showPassword ? "text" : "password"}
                required
                minLength={8}
                className="w-full rounded-md shadow shadow-black p-2 text-black "
              />
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <LockOpen className="text-black absolute -top-0.5 right-3 translate-y-2/4" />
                ) : (
                  <LockKeyhole className="text-black absolute -top-0.5 right-3 translate-y-2/4" />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 mt-5">
            <Button title="Cadastrar" />
            <Link
              href="/login"
              className="hover:text-primary underline text-slate-400"
            >
              Já possui conta? faça o login
            </Link>
            <p>ou cadastre-se com...</p>
            <Image src={GoogleImage} alt="google image" className="size-14" />
          </div>
        </form>
      </div>
      <div className="m-auto">
        <Image alt="register image" src={RegisterImage} />
      </div>
    </div>
  );
}
