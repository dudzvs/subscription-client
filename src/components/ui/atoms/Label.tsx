const Label = ({ inputId, title }: { inputId: string; title: string }) => {
	return <label htmlFor={inputId}>{title}</label>;
};

export default Label;
