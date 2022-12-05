import { useContext } from "react";
import style from "./style.module.scss";
import EventList from "../Events/EventList";
import EventAdd from "../Events/EventAdd";
import { DayContext } from "./Day";

const Popover = ({ events, dayObject }) => {
	const dayContext = useContext(DayContext);

	const handleClick = () => {
		dayContext.setShowPopover(false);
	};

	return (
		<>
			<div className={style.popover}>
				<h2>Events</h2>
				<EventList events={events} />
				<div className={style.popover__footer}>
					<EventAdd dayObject={dayObject} />
				</div>
			</div>
			<div className={style.overlay} onClick={handleClick}></div>
		</>
	);
};

export default Popover;

 