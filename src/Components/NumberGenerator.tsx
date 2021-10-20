import React from "react";

interface NumberGeneratorProps {
	arr: Array<Number>;
	setArr: React.Dispatch<React.SetStateAction<Array<Number>>>;
	setPerm: React.Dispatch<React.SetStateAction<Array<Number>>>;
}

export default function NumberGenerator(props: NumberGeneratorProps) {
	const handleClick = () => {
		let tmp: Array<Number> = [];
		for (var i = 0; i < 10; i++) {
			let num = Math.floor(Math.random() * 10 + 1);
			tmp.push(num);
		}
		props.setArr(tmp);
		props.setPerm(tmp);
	};

	return (
		<div className="container">
			<button onClick={handleClick} className="p-2 bg-green-300 rounded">Generate</button>
			<p className="p-2 bg-blue-300 rounded block">{props.arr.map((val, index) => <span key={index}>{val} </span>)}</p>
		</div>
	);
}
