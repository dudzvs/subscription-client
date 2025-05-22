const Label = ({ inputId, title }: { inputId: string; title: string }) => {
	return <label htmlFor={inputId}>{title.charAt(0).toUpperCase() + title.slice(1)}</label>;
};

export default Label;
