import { DollarSign, RotateCcw, Wallet } from "lucide-react";
import { ButtonFactory } from "../button";

export function Header() {
	const Button = ButtonFactory({ type: "Default" });
	return (
		<header className="flex items-center h-32 p-4 border-b border-primary mb-12">
			<h1 className="flex-1 text-text text-3xl font-bold ">
				Planilha de gastos
			</h1>

			<div className="flex items-center w-2/4">
				<Button className="font-medium gap-2 hover:bg-secondary hover:shadow-white">
					<Wallet className="text-lime-600 " />
					Adicionar saldo
				</Button>
				<Button className="font-medium gap-2 hover:bg-secondary hover:shadow-white">
					<DollarSign className="text-red-600 " />
					Adicionar gasto
				</Button>
				<Button className="font-medium gap-2 hover:bg-secondary hover:shadow-white">
					<RotateCcw className="text-primary " />
					Resetar dados
				</Button>
			</div>
		</header>
	);
}
