import React, { useState } from "react";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const dates = [
  new Date(2023, 3, 3).toDateString(),
  new Date(2023, 3, 10).toDateString(),
  new Date(2023, 3, 17).toDateString(),
  new Date(2023, 4, 24).toDateString(),
  new Date(2023, 5, 17).toDateString(),
  new Date(2023, 7, 24).toDateString(),
  new Date(2023, 8, 17).toDateString(),
  new Date(2023, 9, 24).toDateString(),
  new Date(2023, 12, 17).toDateString(),
  new Date(2023, 4, 24).toDateString(),
];

console.log(dates);

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
    let backgroundColor = "";
    if (dates.includes(new Date(year, month, i).toDateString())) {
      backgroundColor = "red";
    }
    cells.push(
      <td key={`day-${i}`} style={{ backgroundColor }}>
        {i}
      </td>
    );
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
