import InputGroup from '../ui/molecules/InputGroup.tsx';
import Button from '../ui/atoms/Button.tsx';
import SignUp from '../layout/SignUp.tsx';
import React, { useEffect, useState } from 'react';

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

	useEffect(() => {});

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
			console.log(err);
		}
	}

	return (
		<div className="flex flex-row-reverse w-full p-16 justify-evenly items-baseline">
			<SignUp submitFn={handleSubmit}>
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
					label={'Sign Up'}
					handleClick={handleClick}
					variant={'signup'}
				/>
				<span className="text-center w-full mt-6">
					Already have an count?{' '}
					<a href="#" className="underline">
						Log in
					</a>
				</span>
			</SignUp>

			<div className="flex flex-col items-start h-[900px] justify-between">
				<div>
					<h1>Origams</h1>
					<p className="text-3xl max-w-xl h-max text-white opacity-80">
						Access to thousands of design resources and templates
					</p>
				</div>
				<img className="" src="/images/Illustration.png" alt="illustration" />
			</div>
		</div>
	);
};
export default SignUpPage;
