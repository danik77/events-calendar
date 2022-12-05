import { EVENTS_TYPES } from "../../constants/events-types";
import { TIMESLOTS } from "../../constants/timeslots";
import { useDispatch } from "react-redux";
import { useState, useEffect, useContext } from "react";
import { addEvent, editEvent } from "../../app/eventsSlice";
import style from "./style.module.scss";
import cancel from "../../assets/icons/cancel.svg";
import EventDelete from "../Events/EventDelete";
import { DayContext } from "../Calendar/Day";
import { dateFromStringToUI } from '../../functions';

const inialEventData = {
	title: "",
	desc: "", 
	location: "",
	type: EVENTS_TYPES[0].type,
	time: TIMESLOTS[0]
};

const ModalForm = ({ formType, closeForm, event, eventDate }) => {
	const [eventData, setEventData] = useState(event);

	const dispatch = useDispatch();	
	const dayContext = useContext(DayContext);
 
	useEffect(() => {
		if (!event) {
			setEventData(inialEventData);
		}
	}, []);

	const onChange = (e) => {
		setEventData({ ...eventData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (formType === "add") {
			// Make id from current timestamp
			const id = Date.now();
			dispatch(addEvent({ ...eventData, id: id, date: eventDate }));
		}

		if (formType === "edit") {
			dispatch(editEvent({ ...eventData }));
		}

		closeForm();
		dayContext.setShowPopover(false)
 
	};

	return (
		<>
			{eventData && (
				<div className={style.modalForm}>
					<div className={style.modalForm__header}>
						<h3>{formType === "add" ? "Add event" : "Edit event"}</h3>
						<img className="icon" alt="cancel" src={cancel} onClick={closeForm} />
					</div>

					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="title"
							placeholder="Event name..."
							onChange={onChange}
							value={eventData.title}
							required={true}
						/>
						<textarea
							name="desc"
							placeholder="Event description..."
							onChange={onChange}
							value={eventData.desc}
							required={true}
						/>
						<input
							type="text"
							name="location"
							placeholder="Event location..."
							onChange={onChange}
							value={eventData.location}
							required={true}
						/>
						<div className={style.modalForm__datetime}>
							<div className={style.modalForm__date}>
								{dateFromStringToUI(eventDate)} at
							</div>

							<select
								className={style.modalForm__time}
								name="time"
								value={eventData.time}
								onChange={onChange}
								required={true}
							>
								{TIMESLOTS.map((time) => (
									<option key={time} value={time}>{time}</option>
								))}
							</select>
						</div>

						<select
							name="type"
							value={eventData.type}
							onChange={onChange}
							required={true}
						>
							{EVENTS_TYPES.map((eventType) => (
								<option key={eventType.type} value={eventType.type}>{eventType.title}</option>
							))}
						</select>

						<div className={style.modalForm__buttons}>

	 
								<button className="btn btn-transparent" onClick={closeForm}>
									Cancel
								</button>
		 

							{formType === "edit" && <EventDelete eventId={event.id} />}

							<button className="btn btn-solid" type="submit">
								{formType === "add" ? "Add" : "Save"}
							</button>
						</div>
					</form>
				</div>
			)}
			<div className={style.overlay} onClick={closeForm}></div>
		</>
	);
};

export default ModalForm;
