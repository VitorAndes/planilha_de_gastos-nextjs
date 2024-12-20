import { Aside } from "@/components/Home/Aside";
import { Cards } from "@/components/Home/Cards";
import { ExpenseLocation } from "@/components/Home/ExpenseLocation";
import { Header } from "@/components/Home/Header";

export default function Home() {
	return (
		<div className="flex flex-col bg-zinc-900 min-h-screen w-full">
			<div className="flex gap-5 flex-1">
				<Aside />
				<main className="flex-1 p-10">
					<Header />
					<div className="flex flex-col gap-8">
						<Cards />
						<ExpenseLocation />
					</div>
				</main>
			</div>
		</div>
	);
}
