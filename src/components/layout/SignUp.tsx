import React from 'react';

const SignUp = ({ children, submitFn }: { children: React.ReactNode; submitFn: () => void }) => {
	return (
		<form
			onSubmit={submitFn}
			method="POST"
			className="bg-white w-2xl rounded-2xl py-24 items-start flex flex-col gap-6 px-24">
			{children}
		</form>
	);
};

export default SignUp;
