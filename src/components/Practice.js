import React, { useState, useEffect } from 'react';
import PracticeData from './PracticeData';

const Practice = () => {
	const [personas, setPersonas] = useState([]);

	const fetchData = () =>
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				setPersonas(data);
			})
			.catch((err) => console.log('error'));
	useEffect(() => {
		console.log('render');
		fetchData();
	}, []);

	return (
		<>
			<h1>Parrafo</h1>
			{/* <p>{personas.length > 0 ? JSON.stringify(personas) : 'error'}</p> */}
			{personas.length > 0 &&
				personas.map((persona) => (
					<PracticeData
						key={persona.id}
						random={Math.trunc(Math.random() * 10)}
						persona={persona}
					></PracticeData>
				))}
		</>
	);
};

export default Practice;
