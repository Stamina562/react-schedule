import React, { useEffect, useState } from "react";
import moment from "moment";
import { data } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import "./style.css";

export default function Card({ date, mobile }) {
  const [listData, setListData] = useState([]);
  const [heading, setHeading] = useState("");
  let temp = [];
  useEffect(() => {
    let headingDate = new Date(date);
    const currentDate = new Date(date);
    
    if (!mobile) {
      setHeading(
        `${moment(headingDate).format("MMMM")} ${moment(headingDate).format("YYYY")}`
      );
      temp = data.filter((value) => {
        const valueDate = new Date(value.start.datetime);
        if (currentDate.getMonth() === valueDate.getMonth()) return value;
      });
    } else {
      setHeading(
        `${moment(headingDate).format("dddd")} ${
          moment(headingDate).format("MMMM")
        } ${moment(headingDate).format("D")}, ${moment(headingDate).format("YYYY")}`
      );
      temp = data.filter((value) => {
        const valueDate = new Date(value.start.datetime);
        if (currentDate.getDate() === valueDate.getDate() && currentDate.getMonth() === valueDate.getMonth()) return value;
      });
    }
    setListData(temp);
    temp = [];
  }, [mobile]);
  const List = ({ data }) => {
    const date = new Date(data.start.datetime);
    return (
      <div className="list">
        <div className="list-left">
          {!mobile && (
            <div className="list-date">
              <div className="list-date-day">{moment(date).format("ddd")}</div>
              <div className="list-date-date">{moment(date).format("D")}</div>
            </div>
          )}
          <div className="list-content">
            <div className="list-content-top">
              <div className="list-home-away">
                {data.home_away === "home" ? "vs." : "@"}
              </div>
              <div className="list-opponent">{data.opponent_name}</div>
            </div>
            <div className="list-content-bottom">{`at ${data.location}`}</div>
          </div>
        </div>
        <div className="list-right">
            {moment(date).format("hh:mm:ss a")} &nbsp;
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div> Added bar</div>
        <div> second bar</div>
      </div>
    );
  };
  return (
    <div className="card">
      <h2>{heading}</h2>
      <div className="lists">
        {listData.map((value) => (
          <List data={value} key={value.id} />
        ))}
      </div>
    </div>
  );
}
