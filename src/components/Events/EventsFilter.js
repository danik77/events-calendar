import { useState } from 'react'
import { EVENTS_TYPES } from '../../constants/events-types'
import { useDispatch } from "react-redux";
import {filterEvents} from '../../app/eventsSlice'
import style from './style.module.scss'

const EventsFilter = () => {

	const [active, setActive] = useState(null)
 
 const dispatch = useDispatch()

 const onFilter = (type) => {
 	setActive(type)
 	dispatch(filterEvents(type))
 }

	return(
		<div className={style.filter}>
			{EVENTS_TYPES.map(eventType => (
				<div 
					key={eventType.type} 
					className={`${style.filter__item} ${style["filter__" + eventType.color]} ${active === eventType.type && style["filter__" + eventType.color + "_active"]}`}   
					onClick={() => onFilter(eventType.type)}
				>
					{eventType.title}
				</div>
			))}
			<div className={`${style.filter__item}`} onClick={() => onFilter("all")}>All</div>
		</div>

	)
}

export default EventsFilter
 