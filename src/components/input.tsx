import { type InputHTMLAttributes, type ReactNode, forwardRef } from "react";

type InputProps = {
	icon?: () => ReactNode;
	onClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ icon, onClick, ...rest }, ref) => {
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
			</div>
		);
	},
);
