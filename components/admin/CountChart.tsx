"use client";

import { Ellipsis } from "lucide-react";
import { BiFemale, BiMale } from "react-icons/bi";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 76,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 30,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 ">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Students</h1>
        <Ellipsis size={40}/>
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <BiMale size={50} className="text-lamaSky"/>
          <BiFemale size={50} className="text-yellow-300" />
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="felx flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-lamaSky"/>
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (45%)</h2>
        </div>
        <div className="felx flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-yellow-300"/>
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (55%)</h2>
        </div>
      </div>
    </div>
  );
};
export default CountChart;
