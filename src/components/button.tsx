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
				"flex text-center justify-center p-4 rounded-md shadow shadow-black hover:bg-primaryMy hover:shadow-accentMy transition-all",
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
			className={clsx(
				"font-bold bg-accentMy border border-primaryMy",
				className,
			)}
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
			className={clsx("items-center gap-4 border border-accentMy", className)}
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
