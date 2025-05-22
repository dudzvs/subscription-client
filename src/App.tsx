import SignUpPage from './components/page/SignUp.tsx';
import { Route, Routes } from 'react-router';

function App() {
	return (
		<div className="h-screen flex flex-col">
			<header>{/*<Nav />*/}</header>
			<main className="my-auto">
				<Routes>
					<Route path="/signup" element={<SignUpPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
