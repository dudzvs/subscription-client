import InputGroup from '../ui/molecules/InputGroup.tsx';
import Button from '../ui/atoms/Button.tsx';
import FormWrapper from '../layout/Form.tsx';
import React, { useState } from 'react';
import { NavLink } from 'react-router';

const SignUpPage = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		useTerms: false,
		marketingTerms: false,
	});
	const [onError, setOnError] = useState({
		username: { error: true, msg: '' },
		email: { error: false, msg: '' },
		password: { error: false, msg: '' },
		terms: { error: false, msg: '' },
	});

	function handleClick() {
		console.log('clicked');
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, type, value, checked } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		try {
			type FieldName = 'username' | 'email' | 'password' | 'terms';
			const response = await fetch('http://localhost:5500/api/v1/auth/sign-up', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			const { error, token } = await response.json();

			const updatedErrors = {
				username: { error: false, msg: '' },
				email: { error: false, msg: '' },
				password: { error: false, msg: '' },
				terms: { error: false, msg: '' },
			};

			if (!response.ok) {
				error.forEach((err: { path: string; msg: string }) => {
					const field = err.path as FieldName;

					if (err.path in updatedErrors) {
						updatedErrors[field].error = true;
						updatedErrors[field].msg = err.msg;
					}
				});

				setOnError(updatedErrors);
				return;
			}
			localStorage.setItem('token', token);

			setFormData({
				username: '',
				email: '',
				password: '',
				useTerms: false,
				marketingTerms: false,
			});
		} catch (err) {
			console.log('erro:' + err);
		}
	}

	return (
		<FormWrapper submitFn={handleSubmit}>
			<h3>SignUp</h3>
			<InputGroup
				inputLabel={'username'}
				type={'text'}
				formValue={formData.username}
				handleChange={handleChange}
				error={onError.username.error}
				errorMessage={onError.username.msg}
			/>
			<InputGroup
				inputLabel={'email'}
				type={'email'}
				formValue={formData.email}
				handleChange={handleChange}
				error={onError.email.error}
				errorMessage={onError.email.msg}
			/>
			<InputGroup
				inputLabel={'password'}
				type={'password'}
				formValue={formData.password}
				handleChange={handleChange}
				error={onError.password.error}
				errorMessage={onError.password.msg}
			/>
			<InputGroup
				type={'checkbox'}
				inputLabel={'useTerms'}
				termsText={
					'By creating an account, I agree to our Terms of use and Privacy Policy '
				}
				formValue={formData.useTerms}
				handleChange={handleChange}
				error={onError.terms.error}
				errorMessage={onError.terms.msg}
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
