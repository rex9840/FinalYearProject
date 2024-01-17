import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const events = [
  {
    date: new Date(2024, 1, 2),
    title: "Event 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure corporis dicta explicabo tempora consequuntur eveniet recusandae itaque qui facere nemo? Dolorem quod blanditiis aperiam dolore temporibus tempora tempore id! Totam, alias ab eius eos maiores possimus optio?",
  },
  {
    date: new Date(2024, 0, 10),
    title: "Event 2",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsum commodi dignissimos qui, ut repudiandae esse suscipit officiis tempora voluptate. Itaque temporibus, fuga cupiditate deserunt ratione veritatis magni quaerat omnis? ",
  },
  {
    date: new Date(2024, 2, 20),
    title: "Event 3",
    description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus voluptatem ratione deleniti dolor, velit corporis, doloribus obcaecati cumque molestiae blanditiis iure rerum enim ipsum ea quos quas nostrum. Error saepe harum quas molestias. ",
  },
];

export default function Events() {
  const [value, onChange] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const event = events.find((e) => e.date.getTime() === date.getTime());
      if (event) {
        return "bg-green-200 hover:bg-green-300";
      }
    }
  };

  const handleSelectEvent = (event) => {
    const selectedEvent = events.find(
      (e) => e.date.getTime() === event.getTime()
    );
    setSelectedEvent(selectedEvent);
  };

  return (
    <div className="ml-2  flex justify-center gap-4">
      <div className="">
        <Calendar
          onChange={onChange}
          value={value}
          tileClassName={tileClassName}
          onClickDay={handleSelectEvent}
        />
      </div>
      {selectedEvent && (
        <div className="mt-4 w-80  bg-gray-300  p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">{selectedEvent.title}</h2>
          <p className="text-sm text-gray-500">{selectedEvent.description}</p>
        </div>
      )}
    </div>
  );
}
