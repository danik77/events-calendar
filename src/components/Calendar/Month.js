import { useEffect, useState } from "react";
import Day from "./Day"; 
import { WEEKDAYS } from "../../constants/weekdays";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { constructDaysList } from "../../functions";

const Month = ({ month, year }) => {
  const [days, setDays] = useState([]);
  const [title, setTitle] = useState("");
  const events = useSelector(state => state.events.events); 

  // Set days list
  useEffect(() => {
    setDays(constructDaysList({ month, year }).daysList);
    setTitle(constructDaysList({ month, year }).monthName);
  }, []);

  return (
      <div className={style.month}>
        <h2 className={style.month__title}>{title}</h2>
        <div className={style.month__weekdays}>
          {WEEKDAYS.map((dayName) => (
            <div key={dayName}>{dayName}</div>
          ))}
        </div>
        <div className={style.month__days}>
          {days.map((dayObject) => (
            <Day key={dayObject.day + dayObject.type} dayObject={dayObject} />
          ))}
        </div>
      </div>
  );
};

export default Month;
