export const postAuthData = async (
	type: string,
	data: { [key: string]: string | boolean },
): Promise<string> => {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};

	const response =
		type === 'signup'
			? await fetch('http://localhost:5500/api/v1/auth/sign-up', options)
			: await fetch('http://localhost:5500/api/v1/auth/sign-in', options);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const { token } = await response.json();

	return token;
};
