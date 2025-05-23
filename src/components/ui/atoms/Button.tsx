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
		login: 'px-[25px] py-[12px] rounded transition duration-300 ',
		signup: 'py-[25px] px-[40px] rounded-[40px] font-bold text-bold mt-4 transition duration-300',
	};

	return (
		<button type={btnType} onClick={handleClick} className={buttonFor[variant]}>
			{label}
		</button>
	);
};

export default Button;
