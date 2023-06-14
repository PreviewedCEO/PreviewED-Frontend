import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const InterviewCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const events = [
    // Sample event data (replace with your own data)
    {
      id: 1,
      title: "Interview with John Doe",
      start: new Date(2023, 4, 20, 9, 0),
      end: new Date(2023, 4, 20, 10, 0),
    },
    {
      id: 2,
      title: "Interview with Jane Smith",
      start: new Date(2023, 4, 21, 14, 0),
      end: new Date(2023, 4, 21, 15, 0),
    },
    // Add more events as needed
  ];

  const handleSelectEvent = (event) => {
    setSelectedDate(event.start);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Interview Calendar</h2>

      <div className="my-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelectEvent}
          selectable
          style={{ height: 500 }}
        />
      </div>

      {selectedDate && (
        <div>
          <h3 className="text-xl font-semibold">
            {moment(selectedDate).format("MMMM D, YYYY")}
          </h3>
          <p>Hour-by-hour breakdown goes here</p>
        </div>
      )}
    </div>
  );
};

export default InterviewCalendar;

