import React from 'react';

const SignUpLay = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-white w-2xl rounded-2xl flex py-40 items-center">
			<div className=" py-12 px-32">
				<form className="flex flex-col gap-6">{children}</form>
			</div>
		</div>
	);
};

export default SignUpLay;
