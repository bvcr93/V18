import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
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
    <div className="relative text-black ">
      <div className="px-4 flex items-center justify-around">
        <span
          className="border p-2 m-4 cursor-pointer w-screen md:w-full flex justify-around  text-center"
          onClick={() => setOpenDate(!openDate)}
        >
          <p> {format(date[0].startDate, "MM/dd/yyyy")}</p>

          <p>
            {" "}
            <EastIcon fontSize="small" />{" "}
          </p>

          <p> {format(date[0].endDate, "MM/dd/yyyy")}</p>
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
