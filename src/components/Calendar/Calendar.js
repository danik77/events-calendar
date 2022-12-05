import { useState, useEffect } from "react";
import Month from "./Month";
import style from "./style.module.scss";

import { constructMonthsList } from '../../functions';

const monthsCount = 6;

const Calendar = () => {
  const [monthList, setMonthList] = useState([]);

  // Set month list
  useEffect(() => {
    setMonthList(constructMonthsList(monthsCount));
  }, []);

  return (
    <div className={style.calendar}>
      {monthList.map((monthObject) => (
        <Month key={monthObject.month} month={monthObject.month} year={monthObject.year} />
      ))}
    </div>
  );
};

export default Calendar;
