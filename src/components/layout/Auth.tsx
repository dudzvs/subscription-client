import { Outlet } from 'react-router';

const AuthLayout = () => {
	return (
		<div className="flex flex-col md:flex-row md:items-center items-baseline w-full justify-center gap-20">
			<div className="flex flex-col items-center h-full justify-between">
				<div>
					<h1>Origams</h1>
					<p className="text-3xl max-w-xl h-max text-white opacity-80">
						Access to thousands of design resources and templates
					</p>
				</div>
				<img src="/images/Illustration.png" alt="illustration" />
			</div>
			<Outlet />
		</div>
	);
};

export default AuthLayout;
