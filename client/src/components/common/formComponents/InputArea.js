import React from 'react';

const InputArea = ({name, label, value, rows, cols, error, small, className, onChange}) => {
	let wrapClass = `form-group`;
	if (error) {
		wrapClass += ' has-error';
	}
	if (className) {
		wrapClass += ` ${className}`
	}
	return (
		<div className={wrapClass}>
			<label htmlFor={name}>{label}</label>
			<textarea className="form-control" name={name} value={value} onChange={onChange} rows={rows} cols={cols}/>
			{
				error && <div className="help-block">{error}</div>
			}
			{
				small && <small className="text-muted">{small}</small>
			}
		</div>
	);
};

export default InputArea;
