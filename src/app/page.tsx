import { Aside } from "@/components/Home/Aside";
import { CardsSection } from "@/components/Home/CardsSection";
import { Header } from "@/components/Home/Header";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen w-full">
			<div className="flex gap-5 flex-1">
				<Aside />
				<main className="flex-1 p-10">
					<Header />
					<CardsSection />
				</main>
			</div>
		</div>
	);
}
