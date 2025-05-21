const Button = ({
	btnType,
	label,
	variant,
	handleClick,
}: {
	btnType: 'submit' | 'button' | 'reset';
	label: string;
	variant: 'login' | 'signup';
	handleClick: () => void;
}) => {
	const buttonFor = {
		login: '',
		signup: 'py-[20px] px-[2px] rounded-[40px] font-bold text-bold mt-12 w-full transition duration-300',
	};

	return (
		<button type={btnType} onClick={handleClick} className={buttonFor[variant]}>
			{label}
		</button>
	);
};

export default Button;
