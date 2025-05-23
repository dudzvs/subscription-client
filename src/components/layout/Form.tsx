import React from 'react';

const FormWrapper = ({
	children,
	submitFn,
}: {
	children: React.ReactNode;
	submitFn: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
	return (
		<form
			onSubmit={submitFn}
			method="POST"
			className="bg-white w-2xl rounded-2xl py-16 items-start flex flex-col gap-10 px-24">
			{children}
		</form>
	);
};

export default FormWrapper;
