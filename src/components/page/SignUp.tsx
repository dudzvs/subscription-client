import InputGroup from '../ui/molecules/InputGroup.tsx';
import Button from '../ui/atoms/Button.tsx';
import FormWrapper from '../layout/Form.tsx';
import { NavLink } from 'react-router';
import useAuthForm from '../../customHooks/authHook.tsx';

const SignUpPage = () => {
	const { handleSubmit, handleChange, formData, errors } = useAuthForm('signup');

	function handleClick() {
		console.log('clicked');
	}

	return (
		<FormWrapper submitFn={handleSubmit}>
			<h3>SignUp</h3>
			<InputGroup
				inputLabel={'username'}
				type={'text'}
				formValue={formData.username}
				handleChange={handleChange}
				error={Boolean(errors.username)}
				errorMessage={errors.username}
			/>
			<InputGroup
				inputLabel={'email'}
				type={'email'}
				formValue={formData.email}
				handleChange={handleChange}
				error={Boolean(errors.email)}
				errorMessage={errors.email}
			/>
			<InputGroup
				inputLabel={'password'}
				type={'password'}
				formValue={formData.password}
				handleChange={handleChange}
				error={Boolean(errors.password)}
				errorMessage={errors.password}
			/>
			<InputGroup
				type={'checkbox'}
				inputLabel={'useTerms'}
				termsText={
					'By creating an account, I agree to our Terms of use and Privacy Policy '
				}
				formValue={formData.useTerms}
				handleChange={handleChange}
			/>
			<InputGroup
				type={'checkbox'}
				inputLabel={'marketingTerms'}
				termsText={
					'By creating an account, I am also consenting to receive SMS \n' +
					'messages and emails, including product new feature updates, \n' +
					'events, and marketing promotions'
				}
				formValue={formData.marketingTerms}
				handleChange={handleChange}
			/>
			<Button
				btnType={'submit'}
				label={'Register'}
				handleClick={handleClick}
				variant={'signup'}
			/>
			<span className="text-center w-full mt-6">
				Already have an count?{' '}
				<NavLink to="/login" className="underline">
					Log in
				</NavLink>
			</span>
		</FormWrapper>
	);
};
export default SignUpPage;
