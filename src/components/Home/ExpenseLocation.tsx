import { ExpenseLocationChart } from "../ExpenseLocationChart";
import { Section } from "./Section";

export function ExpenseLocation() {
	return (
		<Section>
			<h1 className="text-text text-2xl font-semibold">Lugares gastos</h1>
			<ExpenseLocationChart />
		</Section>
	);
}
