import { NavLink } from 'react-router';
import Button from '../atoms/Button.tsx';

const NavBar = () => {
	function handleClick() {
		console.log('clicked');
	}

	return (
		<nav className="flex items-center justify-self-center py-2 md:py-0 justify-center md:justify-between w-full md:max-w-9/12 ">
			<h2 className="hidden md:block">Origams</h2>

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
