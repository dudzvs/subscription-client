import React from 'react';

const FormWrapper = ({
	children,
	submitFn,
	type,
}: {
	children: React.ReactNode;
	type?: string;
	submitFn: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
	return (
		<form
			onSubmit={submitFn}
			method="POST"
			className={`bg-white max-w-2xl rounded-2xl py-16 ${type === 'login' ? 'items-center' : 'items-start'} flex flex-col gap-10 px-12 md:px-24 h-full`}>
			{children}
		</form>
	);
};

export default FormWrapper;
