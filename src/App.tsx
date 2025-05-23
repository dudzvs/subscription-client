import SignUpPage from './components/page/SignUp.tsx';
import { Route, Routes } from 'react-router';
import AuthLayout from './components/layout/Auth.tsx';
import NavBar from './components/ui/molecules/NavBar.tsx';

function App() {
	return (
		<div className="h-screen flex flex-col ">
			<header>
				<NavBar />
			</header>
			<main className="my-auto flex">
				<Routes>
					{/*<Route index element={<Home />} />*/}
					<Route element={<AuthLayout />}>
						<Route path="/register" element={<SignUpPage />} />
						{/*<Route path="login" element={<SignInPage />} />*/}
					</Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
