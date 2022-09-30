import React, { useState } from 'react';

export const Footer = () => {
	const [clicks, setClicks] = useState(0);
	const year = new Date().getFullYear();
	const companyName = 'Egg Educacion';
	const handleClicks = () => setClicks((prev) => prev + 1);

	return (
		<footer className="d-flex flex-column justify-content-center align-items-center p-4">
			<p> clicks : {clicks}</p>
			<p>
				{year} {companyName}
			</p>
			<h6> footer</h6>
			<img
				onClick={handleClicks}
				src="https://cdn.icon-icons.com/icons2/749/PNG/512/pacman_icon-icons.com_63747.png"
				className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
				style={{ width: '25px', height: '25px' }}
				alt=".."
			></img>
		</footer>
	);
};
