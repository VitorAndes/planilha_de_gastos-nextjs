import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<"div">;

export function Section({ children }: SectionProps) {
	return (
		<section className="bg-[#540ca7]/10 backdrop-blur shadow shadow-secondaryMy border border-zinc-200/30 rounded-md p-10 flex flex-col gap-12">
			{children}
		</section>
	);
}
