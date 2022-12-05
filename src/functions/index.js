import {WEEKDAYS} from '../constants/weekdays'


/**
 * Convert data from dayObject to string to store in events list in redux
 * @param {object} dayObject {day: 1, month: 8, year: 2022} 
 * @returns {string} "2022-08-01"
 */
export function dateFromObjectToString(dayObject) {
		return dayObject.year + "-" + ("0" + dayObject.month).slice(-2) + "-" + ("0" + dayObject.day).slice(-2);
}


/**
 * Convert data from string to user interface view
 * @param {string} "2022-11-24" 
 * @returns {string} "24 November"
 */
 
export function dateFromStringToUI(dateString) {
		const dateArray = dateString.split("-");
		const date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);

		return dateArray[2] + " " + date.toLocaleString("en-US", { month: "long" });
 
}


/**
 * Constructs list of months from current month 
 * @param {number} Count of months 
 * @returns {Array} Array of objects with month and year
*/

export function constructMonthsList(count) {
	 const monthList = [];

    Array.apply(null, { length: count }).map((item, i) => {
      const date = new Date(); 
      date.setMonth(date.getMonth() + i, 1);
      const month = date.getMonth();
      const year = date.getFullYear();

      monthList.push({ month, year });
    });

    return monthList
}

/**
 * Constructs list of days in month to display, include days from prev and next month 
 * @param {object} monthObject {month, year}
 * @returns {Array} Array of objects with day, month and year
*/

export function constructDaysList({month, year}) {
	  const date = new Date(year, month);  

    // Get month name from date
    const monthName = date.toLocaleDateString("en-En", {month: "long"});

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const daysInLastMonth = new Date(year, month, 0).getDate();

    // Get count of days from next month to show in current month component
    let lastWeekday = lastDayOfMonth.toLocaleDateString("en-us", {weekday: "long"});
    let nextMonthDays = 6 - WEEKDAYS.indexOf(lastWeekday);

    // Get count from days from prev month to show in current month component
    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "short",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const prevMonthDays = WEEKDAYS.indexOf(dateString.split(",")[0]);

    // Construct array of days to show in month component (from prev, current and next month)
    const daysList = [];

    for (let i = 1; i <= prevMonthDays + daysInMonth + nextMonthDays; i++) {
      if (i > prevMonthDays && i <= prevMonthDays + daysInMonth) {
        daysList.push({
          type: "currentMonth", 
          day: i - prevMonthDays,
          month: month + 1,
          year: year,
        });
      } else if (i <= prevMonthDays) {
        daysList.push({
          type: "prevMonth",
          day: daysInLastMonth + i - prevMonthDays,
        });
      } else {
        daysList.push({ type: "nextMonth", day: i - daysInMonth - prevMonthDays });
      }
    }

    return {daysList, monthName}
}