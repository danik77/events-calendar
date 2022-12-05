import { useState, useEffect } from "react";
import { EVENTS_TYPES } from "../../constants/events-types"; 
import style from "./style.module.scss";
import EventEdit from "./EventEdit";
import { dateFromStringToUI } from '../../functions';

const EventListItem = ({ event }) => {
	const [color, setColor] = useState("");
	const [typeTitle, setTypeTitle] = useState("")

	useEffect(() => {
		//get event type color and title by slug
		const matchEventType = EVENTS_TYPES.find(eventType => eventType.type === event.type);
		setColor(matchEventType.color)
		setTypeTitle(matchEventType.title)
	}, [])
 
	return (
		<div className={style.event}>
			<div className={style.event__header}>
				<h3>{event.title}</h3>
				<EventEdit event={event} />
			</div>
			<p className={style.event__desc}>{event.desc}</p>
			<h4 className={style.event__location}>{event.location}</h4>
			<div className={style.event__footer}>
				<div className={`${style.event__datetime} ${style["event__" + color]}`}>
					{dateFromStringToUI(event.date)}, {event.time}
				</div>
				<div className={`${style.event__type} ${style["filter__" + color]} ${style.filter__item}}`}>
					{typeTitle}
				</div>
			</div>
		</div>
	);
};

export default EventListItem;
