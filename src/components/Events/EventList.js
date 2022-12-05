import EventListItem from "./EventListItem";

const EventList = ({ events }) => {
	return (
		<div>
			{!!events.length &&
				events.map((event) => <EventListItem key={event.id} event={event} />)}

			{!events.length &&  <p>(No events)</p>}
		</div>
	);
};

export default EventList;
 