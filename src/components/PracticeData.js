import React, { useState } from 'react';

const Random = ({ random }) => {
	const [rand, setRand] = useState(0 + random);
	const sum = () => setRand((prev) => prev + 1);
	return (
		<div>
			<p>Numero Random es {rand}</p>
			<button onClick={() => sum()}>+</button>
			<button onClick={() => setRand((prev) => prev - 1)}>-</button>
		</div>
	);
};
const PracticeData = ({ persona, ...props }) => {
	const { name, username, ...rest } = persona;
	console.log(props);

	return (
		<div className="card p-5 border ">
			{name} {username}
			<Random random={props.random}></Random>
		</div>
	);
};

export default PracticeData;
