import React from 'react';

const InputSelect = ({name, label, value, error, small, className, options, onChange}) => {
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
			<div className="select-wrapper">
				<select className="form-control" name={name} value={value} onChange={onChange}>
					<option value="default" disabled>Оберіть Ваше самопочуття:</option>
					{
						options.map(opt => <option key={opt} value={opt}>{opt}</option>)
					}
				</select>
			</div>
			{
				error && <div className="help-block">{error}</div>
			}
			{
				small && <small className="text-muted">{small}</small>
			}
		</div>
	);
};

export default InputSelect;
