const Input = ({
	inputType,
	inputName,
	updateFn,
}: {
	inputType: string;
	inputName: string;
	updateFn: () => void;
}) => {
	return (
		<>
			<input type={inputType} name={inputName} id={inputName} onChange={updateFn} />
		</>
	);
};

export default Input;
