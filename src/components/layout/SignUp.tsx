import React from 'react';

const SignUpLay = ({ children }: { children: React.ReactNode }) => {
	return (
		<form className="bg-white w-2xl rounded-2xl py-24 items-start flex flex-col gap-6 px-24">
			{children}
		</form>
	);
};

export default SignUpLay;
