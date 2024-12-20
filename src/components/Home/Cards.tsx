import { DollarSign, Plus } from "lucide-react";
import { Card } from "../Card";
import { ButtonFactory } from "../button";
import { Section } from "./Section";

export function Cards() {
	const ButtonPrimary = ButtonFactory({ type: "Primary" });
	return (
		<Section>
			<div className="flex items-center justify-between">
				<h1 className="text-text text-2xl font-semibold">Cartões</h1>
				<ButtonPrimary className="w-64">
					<Plus />
					Adicionar novo cartão
				</ButtonPrimary>
			</div>
			<div className="flex gap-5 w-full">
				<Card
					title="Saldo"
					value={"00,00"}
					icon={() => <DollarSign className="size-6" />}
				/>
				<Card
					title="Fatura"
					value={"00,00"}
					icon={() => <DollarSign className="size-6" />}
				/>
			</div>
		</Section>
	);
}
