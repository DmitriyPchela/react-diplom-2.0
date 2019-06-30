import React, { useState, useEffect } from 'react';
import InputText from "../../common/formComponents/InputText";
import InputArea from "../../common/formComponents/InputArea";
import InputSelect from "../../common/formComponents/InputSelect";
import {medicineApi} from "../../../api";
import {toast, ToastContainer} from "react-toastify";


const initState = {
	time: 'default',
	name: '',
	recommend: '',
	userID: ''
};

const ModalMedicine = ({userData}) => {
	const [medicine, setMedicine] = useState(initState);
	
	useEffect(() => {
		setMedicine({...medicine, userID: userData._id});
	}, []);
	
	const handleChange = (e) => {
		const {name, value} = e.target;
		setMedicine({...medicine, [name]: value});
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		medicineApi.create(medicine).then(res => {
			if (res.data.status === 'success') {
				toast.success('✓ Ліки відправлено!', {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true
				});
				setMedicine(initState);
			}
		});
	};
	
	return (
		<div className="container">
			<ToastContainer/>
			<div className="btn-wrap d-flex justify-content-center mt-5">
				<button type="button" className="btn-custom" data-toggle="modal" data-target="#modalCure">Виписати ліки</button>
			</div>
			
			<div className="modal fade" id="modalCure" tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<form name="form-cure" className="modal-content form-container" onSubmit={handleSubmit}>
						<div className="modal-header d-flex justify-content-center">
							<h5 className="modal-title">Ліки для пацієнта</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<InputText
								type="text"
								name="sendTo"
								label="Кому"
								value={`${userData.name} ${userData.surname}`}
								readOnly={true}
								onChange={handleChange}
								className="col-12"
							/>
							<InputSelect
								name="time"
								label="Час"
								optionDefault="Виберіть час прийому ліків:"
								options={['Вранці', 'Вдень', 'Ввечері']}
								value={medicine.time}
								onChange={handleChange}
								className="col-12"
							/>
							<InputText
								type="text"
								name="name"
								label="Назва ліків"
								value={medicine.name}
								onChange={handleChange}
								className="col-12"
							/>
							<InputArea
								name="recommend"
								label="Рекомендації, щодо застосування"
								rows={3}
								value={medicine.recommend}
								onChange={handleChange}
								className="col-12"
							/>
						</div>
						<div className="modal-footer d-flex justify-content-center">
							<button type="submit" className="btn-custom">Підтвердити</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ModalMedicine;