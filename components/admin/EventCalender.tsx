"use client";

import { Ellipsis } from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div>
      <div className="bg-white rounded-md p-4">
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold my-4">Events</h1>
            <Ellipsis size={40}/>
        </div>
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div key={event.id} className="p-5 rounded-md border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <h2 className="text-xs text-gray-300">{event.time}</h2>
              </div>
              <p className="text-sm text-gray-400 mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalender;
