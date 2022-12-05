import { useState } from "react";
import ModalForm from "../ModalForm";
import edit from "../../assets/icons/edit.svg"; 

const EventEdit = ({ event }) => { 

	const [showForm, setShowForm] = useState(false);  

	const closeForm = () => {
		setShowForm(false);
	};

	const onClickHandler = () => {
		setShowForm(!showForm); 
	};

	return (
		<>
			<img className="icon" src={edit} alt="edit" onClick={onClickHandler} />

			{showForm && (
				<ModalForm
					closeForm={closeForm}
					formType="edit"
					event={event}
					eventDate={event.date}
				/>
			)}
		</>
	);
};

export default EventEdit;