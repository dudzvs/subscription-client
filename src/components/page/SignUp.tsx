import InputGroup from '../ui/molecules/InputGroup.tsx';
import Button from '../ui/atoms/Button.tsx';
import SignUp from '../layout/SignUp.tsx';

const SignUpPage = () => {
	function handleClick() {
		console.log('clicked');
	}

	function onChange() {
		console.log('handleChange');
	}

	return (
		<div className="flex flex-row-reverse items-center h-screen w-full p-16">
			<SignUp>
				<InputGroup inputLabel={'Username'} type={'text'} handleChange={onChange} />
				<InputGroup inputLabel={'Email'} type={'email'} handleChange={onChange} />
				<InputGroup inputLabel={'Password'} type={'password'} handleChange={onChange} />
				<InputGroup inputLabel={'terms'} type={'checkbox'} handleChange={onChange} />
				<Button
					btnType={'submit'}
					label={'Sign Up'}
					handleClick={handleClick}
					variant={'login'}
				/>
			</SignUp>
			<div>another</div>
		</div>
	);
};
export default SignUpPage;
