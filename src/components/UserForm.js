import React, { useEffect, useState } from 'react';
import { useUserForm } from '../hooks/Custom.hooks';

const UserForm = () => {
	const { form, setForm, handleChanges } = useUserForm();
	const [areEquals, setAreEquals] = useState(true);
	const [passwordConfirmation, setPasswordConfirmation] = useState();
	const [checked, setChecked] = useState(false);
	const handlePasswordConfirmation = (e) => {
		setPasswordConfirmation(e.target.value);
	};
	useEffect(() => {
		const { password } = form;
		setAreEquals(passwordConfirmation === password);
	}, [passwordConfirmation]);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(form);
	};

	return (
		<div className="p-5">
			<h2>Registrarse</h2>
			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						name="email"
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						onChange={handleChanges}
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						name="password"
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						onChange={handleChanges}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword2" className="form-label">
						Repetir Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword2"
						onChange={handlePasswordConfirmation}
					/>
				</div>
				<input type="checkbox" name="" onChange={() => setChecked(!checked)} />
				{!areEquals && <p>Las contraseñas deben ser iguales</p>}
				<button
					type="submit"
					className="btn btn-primary"
					onClick={handleSubmit}
					disabled={!checked}
				>
					Registrarse
				</button>
			</form>
		</div>
	);
};

export default UserForm;
