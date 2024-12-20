"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
	{ month: "January", desktop: 186 },
	{ month: "February", desktop: 305 },
	{ month: "March", desktop: 237 },
	{ month: "April", desktop: 73 },
	{ month: "May", desktop: 209 },
	{ month: "June", desktop: 214 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export function ExpenseLocationChart() {
	return (
		<Card className="bg-transparent border-none">
			<CardContent className="">
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{
							top: 20,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickMargin={10}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar
							stroke="rgb(228 228 231 / 0.3)"
							dataKey="desktop"
							fill="#7837c8"
							radius={8}
						>
							<LabelList
								position="top"
								offset={12}
								className="white"
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
