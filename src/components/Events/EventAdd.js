import { useState } from "react";
import { dateFromObjectToString } from "../../functions";
import ModalForm from "../ModalForm";

const EventAdd = ({ dayObject }) => {
	const [showForm, setShowForm] = useState(false);

	const closeForm = () => {
		setShowForm(false);
	};

	const onClickHandler = () => {
		setShowForm(!showForm);
	};

	return (
		<>
			<button className="btn btn-solid" onClick={onClickHandler}>
				Add Event
			</button>
			
			{showForm && (
				<ModalForm
					closeForm={closeForm}
					formType="add"
					event={null}
					eventDate={dateFromObjectToString(dayObject)}
				/>
			)}
		</>
	);
};

export default EventAdd;
