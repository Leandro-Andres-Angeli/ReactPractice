import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ mascota }) => {
	return (
		<div className="col">
			<div className="card shadow-sm">
				<img
					src={mascota.image}
					alt=""
					className="responsive-img  card-img-top"
					width="100%"
				></img>

				<div className="card-body">
					<h6>{mascota.species}</h6>
					<h3 className="card-title">{mascota.name}</h3>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in
						to additional content. This content is a little bit longer.
					</p>
					<div className="d-flex justify-content-between align-items-center">
						<div className="btn-group">
							<button
								type="button"
								className="btn btn-sm btn-outline-secondary"
							>
								View
							</button>

							<button
								type="button"
								className="btn btn-sm btn-outline-secondary"
							>
								<Link to={`/details/${mascota.id}`}>Detalle</Link>
							</button>
						</div>
						<small className="text-muted">9 mins</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
