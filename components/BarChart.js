import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const BarChartComponent = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const revenueData = [
    18450, // Monday
    21500, // Tuesday
    13200, // Wednesday
    24500, // Thursday
    19800, // Friday
    16750, // Saturday
    23100, // Sunday
  ];

  return (
    <div className="w-full md:col-span-2 relative mx-auto lg:h-[70vh] h-[50vh] p-4 rounded-lg bg-white">
      <BarChart
        className="w-full h-full"
        title="Daily Revenue"
        xAxis={[
          {
            data: daysOfWeek,
            label: "Day of Week",
            scaleType: "band",
          },
        ]}
        yAxis={[
          {
            label: "Revenue (USD)",
          },
        ]}
        series={[
          {
            data: revenueData,
            color: "rgb(9, 103, 227,0.4)",
          },
        ]}
        tooltip={{ trigger: "item" }}
        grid={{
          vertical: true,
          horizontal: true,
        }}
      />
    </div>
  );
};

export default BarChartComponent;
