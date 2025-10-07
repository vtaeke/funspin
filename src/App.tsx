import './App.css';
import NavBar from './components/NavBar/NavBar.tsx';
import Counter from './components/Counter/Counter.tsx';
import Roulette from './components/Roulette/Roulette.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouletteCs from "./components/Roulette/Versions/RouletteCs.tsx";
import RandomNumber from "./components/Roulette/Versions/RandomNumber.tsx";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<h2 style={{ textAlign: 'center' }}>Добро пожаловать</h2>}
				></Route>
				<Route path="/counter" element={<Counter />} />
				<Route path="/roulette" element={<Roulette />} />
				<Route path="/roulettecs" element={<RouletteCs />} />
				<Route path="/randomnumber" element={<RandomNumber />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
