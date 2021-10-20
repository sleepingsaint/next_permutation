import React from "react";
import { Line } from "react-chartjs-2";

interface PlotProps extends React.HTMLProps<HTMLDivElement> {
	arr: Array<Number>;
}

export default function Plot(props: PlotProps) {
	const labels = []
	for(var i = 0; i < props.arr.length; i++){
		labels.push(i);
	}

	const data = {
		type: "line",
		labels: labels,
		datasets: [
			{
				label: "Permutation Data",
				data: props.arr,
				fill: false,
				borderColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
		],
	};

	return <div {...props}>
		<Line data={data} />
	</div>;
}
