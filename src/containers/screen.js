import React, { useEffect, useState } from "react";
import Card from "../components/card";

import { data } from "../data";
import "./style.css";

export default function Screen({mobile}) {
  const [month, setMonth] = useState([]);
  useEffect(() => {
    let mon = [data[0].start.datetime];
    let prev = data[0].start.datetime;
    data.forEach((value) => {
      if(!mobile) {
        const prevDate = new Date(prev);
        const currentDate = new Date(value.start.datetime);
        if(prevDate.getMonth() !== currentDate.getMonth()) {
          mon.push(value.start.datetime);
          prev = value.start.datetime;
        };
      }else {
        const prevDate = new Date(prev);
        const currentDate = new Date(value.start.datetime);
        if(prevDate.getDate() !== currentDate.getDate()) {
          mon.push(value.start.datetime);
          prev = value.start.datetime;
        };
      }
    });
    setMonth(mon);
  }, [mobile]);
  console.log(month)
  return(
    <div className="screen-container">
      {month.map(month => {
        return <Card date={month} key={month} mobile={mobile} ></Card>
      })}
    </div>
  );
}
