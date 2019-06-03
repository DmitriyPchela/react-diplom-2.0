import React from 'react';

const AlertSuccess = ({ message }) => {
	return (
		<div className="alert alert-success alert-dismissible fade show" role="alert">
			<p>{message}</p>
			<button type="button" className="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	);
};

export default AlertSuccess;
