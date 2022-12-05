import { EVENTS_TYPES } from "../../constants/events-types";
import style from "./style.module.scss";

const EventsMarkers = ({ events }) => {

	const showMarker = (eventType) => {
		return events.find((event) => event.type === eventType.type)
	}

	return (
		<div className={style.markers}>
			{EVENTS_TYPES.map((eventType) => (
				<div
					key={eventType.type}
					className={`${style.markers__item} ${style[eventType.color]}`}
					style={{display: showMarker(eventType) ? "block"	: "none"}}
				></div>
			))}
		</div>
	);
};

export default EventsMarkers; 
