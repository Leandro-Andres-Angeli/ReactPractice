import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RickAndMortyService from '../services/RickAndMorty.service';

const Detail = () => {
	const [mascota, setMascota] = useState({});
	const { id } = useParams();
	useEffect(() => {
		console.log('render');
		RickAndMortyService.getCharacterById(id)
			.then((data) => setMascota(data))
			.catch((err) => console.log(err));
	}, [id]);

	return (
		<div className="row">
			<div className="col">
				<div className="card" style={{ width: '18rem' }}>
					<img src={mascota.image} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{mascota.name}</h5>
						<p className="card-text">{mascota.species}</p>
						<Link to={'/'} className="btn btn-primary">
							Volver
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
