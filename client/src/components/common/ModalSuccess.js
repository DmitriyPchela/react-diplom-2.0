import React, { useState, useEffect } from 'react';
import { EventEmitter } from 'events';

const initialState = {
	isOpen: false,
	title: '',
	desc: ''
};

const questionEvent = new EventEmitter();

const show= (options) => {
	questionEvent.emit('show', options);
};

const ModalSuccess = props => {
	const [state, setState] = useState(initialState);
	
	const handleShowSuccess = (options) => {
		setState({...options, isOpen: true});
	};
	
	useEffect(() => {
		questionEvent.on('show', handleShowSuccess);
		return () => {
			questionEvent.removeListener('show', handleShowSuccess);
		}
	}, []);
	
	const setAnswer = () => () => {
		resetModal();
	};
	
	const resetModal = () => setState(initialState);
	
	
	return (
		<div className={state.isOpen ? 'modal-container show' : 'modal-container'} id="modal-success">
			<div className="modal-box">
				<div className="modal-header justify-content-center">
					<h5 className="modal-title">{state.title}</h5>
				</div>
				<div className="modal-body">
					<p className="modal-text">{state.desc}</p>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn-custom" onClick={setAnswer(false)}>Закрити</button>
				</div>
			</div>
		</div>
	);
};

export { ModalSuccess, show }