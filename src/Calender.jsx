import React, { useState } from "react";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();

  const rows = [];

  let cells = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    cells.push(<td key={`empty-${i}`} />);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    cells.push(<td key={`day-${i}`}>{i}</td>);
    if ((i + firstDayOfMonth) % 7 === 0 || i === daysInMonth) {
      rows.push(<tr key={`row-${i / 7}`}>{cells}</tr>);
      cells = [];
    }
  }

  const prevMonth = () => {
    const newDate = new Date(year, month - 1, 1);
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(year, month + 1, 1);
    setCurrentDate(newDate);
  };

  return (
    <div>
      <h2>{`${year} - ${month + 1}`}</h2>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <button onClick={prevMonth}>Previous Month</button>
      <button onClick={nextMonth}>Next Month</button>
    </div>
  );
};

export default Calendar;
