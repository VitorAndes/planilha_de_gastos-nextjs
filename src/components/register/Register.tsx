"use client";

import { ButtonFactory } from "@/components/button";
import { Input } from "@/components/input";
import { AtSign, CircleUserRound, LockKeyhole, LockOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useRef, useState } from "react";
import GoogleImage from "/public/Google.svg";
import RegisterImage from "/public/GraphImage.png";

export function RegisterPage() {
	const ButtonPrimary = ButtonFactory({ type: "Primary" });
	const ButtonSecondary = ButtonFactory({ type: "Secondary" });
	const [showPassword, setShowPassoword] = useState(false);
	const [showPasswordConfirm, setShowPassowordConfirm] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const togglePasswordVisibility = () => {
		setShowPassoword(!showPassword);
	};

	const togglePasswordConfirmVisibility = () => {
		setShowPassowordConfirm(!showPasswordConfirm);
	};

	const handleRegisterSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(inputRef.current?.value);
	};

	return (
		<div className="flex min-h-screen bg-secondaryMy">
			<div className="bg-zinc-900 shadow-lg shadow-primaryMy border-r border-primaryMy w-[730px] p-20">
				<h1 className="font-bold text-3xl mb-2">Cadastre-se gratuitamente</h1>
				<form
					onSubmit={(event) => handleRegisterSubmit(event)}
					className="mt-8 flex flex-col gap-6"
				>
					<div className="flex flex-col gap-3 ">
						<label className="font-semibold " htmlFor="name">
							Seu nome
						</label>
						<Input
							id="name"
							type="text"
							placeholder="Seu nome"
							required
							ref={inputRef}
							icon={() => <CircleUserRound />}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label className="font-semibold " htmlFor="email">
							E-mail
						</label>
						<Input
							id="email"
							type="email"
							required
							placeholder="Seu e-mail"
							ref={inputRef}
							icon={() => <AtSign />}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label className="font-semibold " htmlFor="password">
							Senha
						</label>
						<Input
							id="password"
							type={showPassword ? "text" : "password"}
							placeholder="Deve ter no mínimo 8 caracteres"
							required
							minLength={8}
							ref={inputRef}
							icon={() => (showPassword ? <LockOpen /> : <LockKeyhole />)}
							onClick={togglePasswordVisibility}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label className="font-semibold " htmlFor="passwordConfirm">
							Confime sua senha
						</label>
						<Input
							id="passwordConfirm"
							type={showPasswordConfirm ? "text" : "password"}
							required
							minLength={8}
							placeholder="Deve ter no mínimo 8 caracteres"
							ref={inputRef}
							icon={() =>
								showPasswordConfirm ? <LockOpen /> : <LockKeyhole />
							}
							onClick={togglePasswordConfirmVisibility}
						/>
					</div>
					<div className="flex flex-col items-center gap-6 mt-5">
						<ButtonPrimary className="w-full">Cadastrar</ButtonPrimary>

						<div className="flex items-center gap-4 pb-8 border-b">
							<p className="font-semibold">ou se preferir</p>
							<ButtonSecondary>
								Entre com o google
								<Image
									src={GoogleImage}
									alt="google image"
									className="size-10"
								/>
							</ButtonSecondary>
						</div>
						<Link
							href="login"
							className="hover:text-primaryMy underline text-slate-200"
						>
							Já possui conta? faça o login
						</Link>
					</div>
				</form>
			</div>
			<div className="m-auto drop-shadow-xl shadow-white">
				<Image
					className="drop-shadow-2xl shadow-white size-[750px]"
					alt="register image"
					src={RegisterImage}
				/>
			</div>
		</div>
	);
}
