import type { InputHTMLAttributes, ReactNode } from "react";

type InputProps = {
	icon?: () => ReactNode;
	onClick?: () => void;
	ref: React.Ref<HTMLInputElement>;
	errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
	icon,
	onClick,
	errorMessage,
	ref,
	...rest
}: InputProps) => {
	return (
		<div className="flex items-center w-full rounded-md p-2 bg-white shadow shadow-black text-black">
			<input ref={ref} className="w-full outline-none" {...rest} />
			{icon && (
				<button
					type="button"
					onClick={onClick}
					aria-label="icon button"
					className="ml-2"
				>
					{icon()}
				</button>
			)}
			{errorMessage && <p>{errorMessage}</p>}
		</div>
	);
};
