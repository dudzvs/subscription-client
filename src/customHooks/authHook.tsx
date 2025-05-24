import { postAuthData } from '../utils/utils.ts';
import React, { useState } from 'react';

const useAuthForm = (type: 'signup' | 'signin') => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		useTerms: false,
		marketingTerms: false,
	});
	const [errors, setErrors] = useState<{ [key: string]: string }>({});

	function validateForm(type: string, data: typeof formData): { [key: string]: string } {
		const errors: { [key: string]: string } = {};

		if (type === 'signup') {
			if (!data.username) errors.username = 'Username is required';
			if (!data.email) errors.email = 'Email is required';
			if (!data.password) errors.password = 'Password is required';
			if (!data.useTerms) errors.useTerms = 'You must accept the terms';
		} else if (type === 'signin') {
			if (!data.username) errors.username = 'Username is required';
			if (!data.password) errors.password = 'Password is required';
		}

		return errors;
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, type, value, checked } = e.target;

		setErrors((prev) => {
			const error = { ...prev };
			delete error[name];
			return error;
		});

		setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const validationErrors = validateForm(type, formData);

		if (Object.entries(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setErrors({});

		try {
			if (type === 'signup') {
				const token = await postAuthData('signup', formData);
				localStorage.setItem('token', token);
				setFormData({
					username: '',
					email: '',
					password: '',
					useTerms: false,
					marketingTerms: false,
				});
			} else if (type === 'signin') {
				const { username, password } = formData;
				const payload = { username, password };
				const token = await postAuthData('signin', payload);
				localStorage.setItem('token', token);
			}
		} catch (err) {
			console.log(err);
		}
	}

	return {
		handleChange,
		handleSubmit,
		formData,
		errors,
	};
};

export default useAuthForm;
