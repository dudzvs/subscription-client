import type { ChangeEvent } from 'react';

const Input = ({
	inputType,
	inputName,
	updateFn,
	inputValue,
	error,
	errorText,
}: {
	inputType: string;
	inputName: string;
	inputValue: string | boolean;
	error?: boolean;
	errorText?: string;
	updateFn: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<>
			<input
				className={error ? 'border-red-600' : ''}
				type={inputType}
				name={inputName}
				id={inputName}
				onChange={updateFn}
				{...(inputType === 'checkbox'
					? { checked: inputValue as boolean }
					: { value: inputValue as string | number })}
			/>
			{error && <span className="text-red-500 text-xs absolute top-[88px]">{errorText}</span>}
		</>
	);
};

export default Input;
