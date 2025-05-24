import FormWrapper from '../layout/Form.tsx';
import InputGroup from '../ui/molecules/InputGroup.tsx';
import Button from '../ui/atoms/Button.tsx';
import useAuthForm from '../../customHooks/authHook.tsx';

const SignInPage = () => {
	const { handleSubmit, handleChange, formData, errors } = useAuthForm('signin');

	return (
		<FormWrapper submitFn={handleSubmit} type={'login'}>
			<h3>SignIn</h3>
			<InputGroup
				inputLabel={'username'}
				type={'text'}
				formValue={formData.username}
				handleChange={handleChange}
				error={Boolean(errors.username)}
				errorMessage={errors.username}
			/>
			<InputGroup
				inputLabel={'password'}
				type={'password'}
				formValue={formData.password}
				handleChange={handleChange}
				error={Boolean(errors.password)}
				errorMessage={errors.password}
			/>

			<Button btnType={'submit'} label={'Login'} variant={'login'} />
		</FormWrapper>
	);
};

export default SignInPage;
