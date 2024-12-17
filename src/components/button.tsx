import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
	title: string;
	icon?: () => ReactNode; // Atualize o tipo aqui
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ title, icon, ...rest }: ButtonProps) {
	return (
		<button
			className="flex text-center justify-center font-bold p-4 bg-accent border border-black w-full rounded-md shadow shadow-black hover:bg-primary hover:shadow-accent transition-all"
			type="submit"
			{...rest}
		>
			{title}
			{icon?.()}
		</button>
	);
}
