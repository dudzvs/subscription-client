import Label from '../atoms/Label.tsx';
import Input from '../atoms/Input.tsx';

const InputGroup = ({
	type,
	inputLabel,
	handleChange,
}: {
	type: 'text' | 'email' | 'number' | 'checkbox' | 'password';
	inputLabel: string;
	handleChange: () => void;
}) => {
	return (
		<>
			{type === 'checkbox' ? (
				<div className="flex flex-col gap-5 mt-12">
					<div className="flex items-baseline gap-2">
						<Input inputType={type} inputName={inputLabel} updateFn={handleChange} />
						<span>By creating an account, I agree to our Terms of use and Privacy</span>
					</div>

					<div className="flex items-baseline gap-2">
						<Input inputType={type} inputName={inputLabel} updateFn={handleChange} />
						<span>
							By creating an account, I am also consenting to receive SMS messages and
							emails, including product new feature updates, events, and marketing
							promotions.
						</span>
					</div>
				</div>
			) : (
				<div className="flex flex-col items-start gap-3">
					<Label inputId={inputLabel.toLowerCase()} title={inputLabel} />
					<Input
						inputType={type}
						inputName={inputLabel.toLowerCase()}
						updateFn={handleChange}
					/>
				</div>
			)}
		</>
	);
};

export default InputGroup;
