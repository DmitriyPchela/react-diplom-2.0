import React from 'react';
import {Link} from "react-router-dom";
import LC from "local-storage";


const ModalSuccess = ({title, desc, success}) => {
	
	const modalClose = () => {
		document.getElementById('modal-success').classList.remove('show');
	};
	
	return (
		<div className={success ? 'modal-container show' : 'modal-container'} id="modal-success">
			<div className="modal-box">
				<div className="modal-header justify-content-center">
					<h5 className="modal-title">Ваші дані збережно!</h5>
				</div>
				<div className="modal-body text-center">
					Їх можно переглянути у <Link to={LC.get('profile').isAuthorized ? '/account' : '/login'}>особистому кабінеті</Link>, якщо ви не зареєстровані, то спочатку
					<Link to='/registration'> зарееструйтесь</Link>!
				</div>
				<div className="modal-footer">
					<button type="button" className="btn-custom" onClick={modalClose}>Закрити</button>
				</div>
			</div>
		</div>
	);
};

export default ModalSuccess;