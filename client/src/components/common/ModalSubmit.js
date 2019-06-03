import React, { useState, useEffect } from 'react';
import { EventEmitter } from 'events';

const initialState = {
	callback: undefined,
	isOpen: false,
	accent: true,
	message: '',
};

const questionEvent = new EventEmitter();

const ModalSubmit = props => {
	const [state, setState] = useState(initialState);

	const handleAsk = (options) => {
		setState({...options, isOpen: true});
	};

	useEffect(() => {
		questionEvent.on('ask', handleAsk);
		return () => {
			questionEvent.removeListener('ask', handleAsk);
		}
	}, []);

	const setAnswer = (answer) => () => {
		resetModal();
		if (state.callback) {
			state.callback(answer);
		}
	};

	const resetModal = () => setState(initialState);


	return (
		<div className={state.isOpen ? 'modal-container show' : 'modal-container'} id="modal-success">
			<div className="modal-box">
				<div className="modal-header justify-content-center">
					<h5 className="modal-title">Видалити?</h5>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn-custom ok" value="Так" onClick={setAnswer(true)}>Так</button>
					<button type="button" className="btn-custom cancel" value="Ні" onClick={setAnswer(false)}>Ні</button>
				</div>
			</div>
		</div>
	);
};

const ask = (options) => {
	questionEvent.emit('ask', options);
};
export { ModalSubmit, ask }