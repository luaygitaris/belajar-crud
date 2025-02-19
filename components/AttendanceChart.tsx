"use client"

import { Ellipsis } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 40,
    absent: 24,
  },
  {
    name: "Tue",
    present: 30,
    absent: 30,
  },
  {
    name: "Wed",
    present: 20,
    absent: 80,
  },
  {
    name: "Thu",
    present: 80,
    absent: 30,
  },
  {
    name: "Fri",
    present: 90,
    absent: 10,
  },
];

const AttendaceChart = () => {
    return (
      <div className="bg-white rounded-lg h-full p-4 ">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Attendance</h1>
          <Ellipsis size={40}/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray"}}/>
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
};
export default AttendaceChart