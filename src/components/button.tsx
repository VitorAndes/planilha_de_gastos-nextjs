import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonType = {
	type: "Primary" | "Secondary" | "Default";
};

const Button = ({ children, type, className, ...rest }: ButtonProps) => {
	return (
		<button
			className={clsx(
				"flex text-center justify-center p-4 w-full rounded-md shadow shadow-black hover:bg-primary hover:shadow-accent transition-all",
				className,
			)}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
};

const ButtonPrimary = ({ children, type, className, ...rest }: ButtonProps) => {
	return (
		<Button
			type={type}
			className={clsx("font-bold bg-accent border  border-black", className)}
			{...rest}
		>
			{children}
		</Button>
	);
};

const ButtonSecondary = ({
	children,
	type,
	className,
	...rest
}: ButtonProps) => {
	return (
		<Button
			type={type}
			className={clsx("items-center gap-4 border border-accent", className)}
			{...rest}
		>
			{children}
		</Button>
	);
};

export const ButtonFactory = ({ type }: ButtonType) => {
	switch (type) {
		case "Primary":
			return ButtonPrimary;
		case "Secondary":
			return ButtonSecondary;
		case "Default":
			return Button;
	}
};
