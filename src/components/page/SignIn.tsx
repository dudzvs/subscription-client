import FormWrapper from '../layout/Form.tsx';
import InputGroup from '../ui/molecules/InputGroup.tsx';
import Button from '../ui/atoms/Button.tsx';
import useAuthForm from '../../customHooks/authHook.tsx';

const SignInPage = () => {
	const { handleSubmit, handleChange, formData } = useAuthForm('signin');

	return (
		<FormWrapper submitFn={handleSubmit} type={'login'}>
			<h3>SignIn</h3>
			<InputGroup
				inputLabel={'email'}
				type={'text'}
				formValue={formData.email}
				handleChange={handleChange}
			/>
			<InputGroup
				inputLabel={'password'}
				type={'password'}
				formValue={formData.password}
				handleChange={handleChange}
			/>

			<Button btnType={'submit'} label={'Login'} variant={'login'} />
		</FormWrapper>
	);
};

export default SignInPage;
