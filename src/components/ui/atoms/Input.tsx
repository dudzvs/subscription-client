import type { ChangeEvent } from 'react';

const Input = ({
	inputType,
	inputName,
	updateFn,
	inputValue,
}: {
	inputType: string;
	inputName: string;
	inputValue: string | boolean;
	updateFn: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<>
			<input
				type={inputType}
				name={inputName}
				id={inputName}
				onChange={updateFn}
				{...(inputType === 'checkbox'
					? { checked: inputValue as boolean }
					: { value: inputValue as string | number })}
			/>
		</>
	);
};

export default Input;
