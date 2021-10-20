import React, { useState } from "react";
import NumberGenerator from "./Components/NumberGenerator";
import Plot from "./Components/Plot";
import { FcRefresh, FcNext, FcInfo } from "react-icons/fc";

function App() {
	const [arr, setArr] = useState<Array<Number>>([]);
	const [perm, setPerm] = useState<Array<Number>>([]);

	const generateNumber = () => {
		let tmp: Array<Number> = [];
		for (var i = 0; i < 10; i++) {
			let num = Math.floor(Math.random() * 10 + 1);
			tmp.push(num);
		}
		setArr(tmp);
		setPerm(tmp);
	};

	const next_permutation = () => {
		var len = perm.length;
		var i = len - 2;
		while (i >= 0 && perm[i + 1] <= perm[i]) {
			i--;
		}

		if (i >= 0) {
			var j = len - 1;
			var permutation = [...perm];
			while (j > i && permutation[j] <= permutation[i]) {
				j--;
			}

			if (j > i) {
				var tmp = permutation[i];
				permutation[i] = permutation[j];
				permutation[j] = tmp;
			}

			setPerm(permutation);
		}
	};

	return (
		<div className="App flex flex-col items-center justify-center w-screen sm:w-2/3 m-auto p-5 sm:p-0">
			<div className="font-mono text-center text-2xl font-bold">
				next_permutation
			</div>
			
      <div className="infoCard">
				<p>
					This is an attempt to visualize and understand the next_permutation
					algorithm. The algorithm used is explained in detail{" "}
					<a
						className="text-red-400"
						href="https://leetcode.com/problems/next-permutation/solution/"
					>
						here
					</a>
					.
				</p>
			</div>

			<div className="infoCard">
					Click on the generate button next to original array below to generate
					new sequence.
			</div>

			<div className="infoCard">
				Click on the next_permutation button next to current permuation below to
				generate the next_permutation sequence
			</div>

			<div className="container flex">
				<div className="container text-center">
					<div className="text-2xl">
						Original Array{" "}
						<FcRefresh
							className="inline cursor-pointer ml-2 hover:bg-gray-200"
							title="Generate new numbers"
							onClick={generateNumber}
						/>
					</div>
					<p>
						{arr.map((val, idx) => (
							<span key={idx}>{val} </span>
						))}
					</p>
				</div>

				<div className="container text-center">
					<div className="text-2xl">
						Current Permutation{" "}
						<FcNext
							className="inline cursor-pointer ml-2"
							title="Generate next permutation"
							onClick={next_permutation}
						/>{" "}
					</div>
					<p>
						{perm.map((val, idx) => (
							<span key={idx}>{val} </span>
						))}
					</p>
				</div>
			</div>

			<Plot arr={perm} className="sm:w-full w-screen" />
		</div>
	);
}

export default App;
