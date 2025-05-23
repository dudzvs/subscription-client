import { NavLink } from 'react-router';
import Button from '../atoms/Button.tsx';

const NavBar = () => {
	function handleClick() {
		console.log('clicked');
	}

	return (
		<nav className="flex items-center justify-self-center justify-between w-full max-w-7xl">
			<h2>Origams</h2>

			<NavLink to="/login" end>
				<Button
					btnType={'button'}
					label={'Login'}
					variant={'login'}
					handleClick={handleClick}
				/>
			</NavLink>
		</nav>
	);
};

export default NavBar;
