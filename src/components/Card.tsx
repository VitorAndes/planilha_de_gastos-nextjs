type cardProps = {
	title: string;
	value: string | number;
	icon?: () => React.ReactNode;
};

export function Card({ title, icon, value }: cardProps) {
	return (
		<div className="flex flex-col justify-between p-4 bg-primaryMy w-60 h-32 rounded-md shadow shadow-black border border-zinc-200/30">
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold">{title}</h1>
				<span>{icon?.()}</span>
			</div>
			<p className="text-lg font-medium">$ {value}</p>
		</div>
	);
}
