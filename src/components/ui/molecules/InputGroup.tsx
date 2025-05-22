import Label from '../atoms/Label.tsx';
import Input from '../atoms/Input.tsx';
import type { ChangeEvent } from 'react';

const InputGroup = ({
	type,
	inputLabel,
	handleChange,
	formValue,
	termsText,
}: {
	type: 'text' | 'email' | 'number' | 'checkbox' | 'password';
	inputLabel: string;
	formValue: string | boolean;
	termsText?: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<>
			{type === 'checkbox' ? (
				<div className="flex flex-col">
					<div className="flex items-baseline gap-2 mt-4">
						<Input
							inputType={type}
							inputName={inputLabel}
							updateFn={handleChange}
							inputValue={formValue}
						/>
						<span>{termsText}</span>
					</div>
				</div>
			) : (
				<div className="flex flex-col items-start gap-2 w-full">
					<Label inputId={inputLabel.toLowerCase()} title={inputLabel} />
					<Input
						inputType={type}
						inputName={inputLabel.toLowerCase()}
						updateFn={handleChange}
						inputValue={formValue}
					/>
				</div>
			)}
		</>
	);
};

export default InputGroup;
