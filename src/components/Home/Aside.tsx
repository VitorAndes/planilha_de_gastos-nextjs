import { Settings } from "lucide-react";

export function Aside() {
	return (
		<aside className="flex flex-col justify-between bg-secondary text-text w-72 p-4">
			<h1 className="text-3xl text-center font-extrabold">AndesFinance</h1>
			<ul>
				<li>
					<a href="#Settings" className="flex items-center gap-2">
						<Settings />
						Settings
					</a>
				</li>
			</ul>
		</aside>
	);
}
