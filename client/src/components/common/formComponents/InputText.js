import React from 'react';

const InputText = ({name, label, type, value, error, small, minVal, maxVal, readOnly, className, onChange}) => {
	let wrapClass = `form-group`;
	if (error !== '') {
		wrapClass += ' has-error';
	}
	if (className) {
		wrapClass += ` ${className}`
	}
	return (
		<div className={wrapClass}>
			<label htmlFor={name}>{label}</label>
			<input type={type} className="form-control" name={name} value={value} onChange={onChange} min={minVal} readOnly={readOnly}/>
			{
				error && <div className="help-block">{error}</div>
			}
			{
				small && <small className="text-muted">{small}</small>
			}
		</div>
	);
};

export default InputText;
