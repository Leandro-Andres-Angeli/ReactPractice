import './App.css';
import { Footer } from './components/Footer';
import { Switch, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Main } from './components/Main';
import Detail from './components/Detail';
import UserForm from './components/UserForm';
import Practice from './components/Practice';

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<h1>React App</h1>

			{/* <Main></Main> */}

			<Routes>
				<Route path={'/'} element={<Main />}></Route>
				<Route path={'/details/:id'} element={<Detail />}></Route>
				<Route path={'/user-form'} element={<UserForm />}></Route>
				<Route path={'/jsonplaceholder'} element={<Practice />}>
					
				</Route>
			</Routes>

			<Footer></Footer>
		</div>
	);
}

export default App;
