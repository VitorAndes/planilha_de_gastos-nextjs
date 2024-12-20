import { DollarSign, RotateCcw, Wallet } from "lucide-react";
import { ButtonFactory } from "../button";

export function Header() {
	const Button = ButtonFactory({ type: "Secondary" });
	return (
		<header className="flex items-center h-32 p-4 border-b border-primaryMy mb-12">
			<h1 className="flex-1 text-text text-3xl font-bold ">
				Planilha de gastos
			</h1>
			<div className="flex items-center gap-4">
				<Button className="font-medium gap-2 hover:bg-secondaryMy hover:shadow-white">
					<Wallet className="text-lime-600" />
					Adicionar saldo
				</Button>
				<Button className="font-medium gap-2 hover:bg-secondaryMy hover:shadow-white">
					<DollarSign className="text-red-600" />
					Adicionar gasto
				</Button>
				<Button className="font-medium gap-2 hover:bg-secondaryMy hover:shadow-white">
					<RotateCcw className="text-primaryMy" />
					Resetar dados
				</Button>
			</div>
		</header>
	);
}
