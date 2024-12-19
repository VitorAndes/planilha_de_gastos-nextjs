import { Plus } from "lucide-react";
import { ButtonFactory } from "../button";

export function CardsSection() {
	const ButtonPrimary = ButtonFactory({ type: "Primary" });
	return (
		<section className="bg-[#540ca7]/25 backdrop-blur shadow shadow-secondary border border-white/20 rounded-md p-10 flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<h1 className="text-text text-2xl font-semibold">Cartões</h1>
				<ButtonPrimary className="w-64">
					<Plus />
					Adicionar novo cartão
				</ButtonPrimary>
			</div>
			<div className="flex gap-5 w-full">
				<div className="bg-accent w-60 h-32 rounded-md shadow shadow-black">
					card
				</div>
				<div className="bg-accent w-60 h-32 rounded-md shadow shadow-black">
					card
				</div>
				<div className="bg-accent w-60 h-32 rounded-md shadow shadow-black">
					card
				</div>
			</div>
		</section>
	);
}
