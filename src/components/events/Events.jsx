import React from "react";
import { Calendar } from "../ui/calendar.jsx";
import { useState } from "react";

export default function Events() {
  const [date, setDate] = useState( new Date());
  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </div>
  );
}
