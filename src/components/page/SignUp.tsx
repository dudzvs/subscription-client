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
		<div className="flex items-center justify-center w-full h-screen">
			<div className="flex flex-row-reverse w-full p-16 justify-evenly items-baseline">
				<SignUp>
					<h3>SignUp</h3>
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
				<div className="flex flex-col items-start h-[900px] justify-between">
					<div>
						<h1>Design with us</h1>
						<p className="text-3xl max-w-xl h-max text-white opacity-80">
							Access to thousands of design resources and templates
						</p>
					</div>
					<img className="" src="/images/Illustration.png" alt="illustration" />
				</div>
			</div>
		</div>
	);
};
export default SignUpPage;
