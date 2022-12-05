import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EventsMarkers from "../Events/EventsMarkers";
import Popover from "./Popover";
import style from "./style.module.scss";
import { dateFromObjectToString } from "../../functions";

export const DayContext = React.createContext({
		showPopover: false,
		setShowPopover: () => {}
});

const Day = ({ dayObject }) => {
	const [filteredEvents, setFilteredEvents] = useState([]);
	const [todayEvents, setTodayEvents] = useState([]);
	const [showPopover, setShowPopover] = useState(false);
	const events = useSelector((state) => state.events.events);
	const filter = useSelector((state) => state.events.filter);

	// Filter events by type
	useEffect(() => {
		filter === "all"
			? setFilteredEvents(events)
			: setFilteredEvents(events.filter((event) => event.type === filter));
	}, [events, filter]);

	// Filter events by current day
	useEffect(() => {
		if (dayObject.type === "currentMonth") {
			const date = dateFromObjectToString(dayObject);
			const eventsToday = filteredEvents.filter((event) => event.date === date);
			setTodayEvents(eventsToday);
		}
	}, [filteredEvents]);

	const handleClick = () => {
		if (dayObject.type !== "currentMonth") {
			return;
		}
		setShowPopover(!showPopover);
	};

	return (
		<DayContext.Provider value={{showPopover, setShowPopover }}>
			<div>
				<div
					className={`${style.day__cell} ${dayObject.type !== "currentMonth" ? style.day__paddingDays : ""}`}
					onClick={handleClick}
				>
					{dayObject.day}
					{!!todayEvents.length && <EventsMarkers events={todayEvents} />}
				</div>

				{showPopover && <Popover events={todayEvents} dayObject={dayObject} />}
			</div>
		</DayContext.Provider>
	);
};

export default Day;
