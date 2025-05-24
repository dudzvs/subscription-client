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

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, type, value, checked } = e.target;

		setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
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
				const { username, password, email } = formData;
				const payload = { username, password, email };
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
	};
};

export default useAuthForm;
