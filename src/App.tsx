import SignUpPage from './components/page/SignUp.tsx';
import { Route, Routes } from 'react-router';
import AuthLayout from './components/layout/Auth.tsx';

function App() {
	return (
		<div className="h-screen flex flex-col">
			<header>{/*<Nav />*/}</header>
			<main className="my-auto flex">
				<Routes>
					{/*<Route index element={<Home />} />*/}
					<Route element={<AuthLayout />}>
						<Route path="/login" element={<SignUpPage />} />
						{/*<Route path="register" element={<SignInPage />} />*/}
					</Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
