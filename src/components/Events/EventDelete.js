import { useDispatch, } from "react-redux";
import { deleteEvent } from "../../app/eventsSlice";

const EventDelete = ({ eventId }) => {
	const dispatch = useDispatch();

	const onDelete = () => {
		dispatch(deleteEvent(eventId));
	};

	return (
		<button className="btn btn-translucent" onClick={onDelete}>
			Delete
		</button>
	);
};

export default EventDelete;
