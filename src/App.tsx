import Button from './components/ui/atoms/Button.tsx';
import InputGroup from './components/ui/molecules/InputGroup.tsx';
import SignUp from './components/layout/SignUp.tsx';

function App() {
	function handleClick() {
		console.log('click');
	}

	return (
		<>
			<SignUp>
				<InputGroup inputLabel={'Username'} type={'text'} />
				<InputGroup inputLabel={'Email'} type={'email'} />
				<InputGroup inputLabel={'Password'} type={'password'} />
				<InputGroup inputLabel={'terms'} type={'checkbox'} />
				<Button
					btnType={'submit'}
					label={'Sign Up'}
					handleClick={handleClick}
					variant={'login'}
				/>
			</SignUp>
		</>
	);
}

export default App;
