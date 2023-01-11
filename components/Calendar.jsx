import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
const Calendar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="relative ">
      <div className="px-4 flex items-center justify-center">
        <span
          className="border p-2 m-4 cursor-pointer w-screen md:w-full text-center"
          onClick={() => setOpenDate(!openDate)}
        >
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>
      </div>
      {openDate && (
        <div className="absolute top-[80%] left-[50%] translate-x-[-50%]">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;