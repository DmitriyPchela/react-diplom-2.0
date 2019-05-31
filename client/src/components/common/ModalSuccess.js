import React, { useState } from 'react';


const ModalSuccess = ({title, desc, success}) => {
	const [isSuccess, setSuccess] = useState(success);

	const modalClose = () => {
		document.getElementById('modal-success').classList.remove('show');
		setSuccess(false);
	};
	
	return (
		<div className={isSuccess ? 'modal-container show' : 'modal-container'} id="modal-success">
			<div className="modal-box">
				<div className="modal-header justify-content-center">
					<h5 className="modal-title">{title}</h5>
				</div>
				<div className="modal-body text-center">{desc}</div>
				<div className="modal-footer">
					<button type="button" className="btn-custom" onClick={modalClose}>Закрити</button>
				</div>
			</div>
		</div>
	);
};

export default ModalSuccess;