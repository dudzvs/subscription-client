import React from 'react';

const SignUpLay = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-white w-2xl rounded-2xl flex py-24 items-center">
			<div className="px-24">
				<form className="flex flex-col gap-6">{children}</form>
			</div>
		</div>
	);
};

export default SignUpLay;
