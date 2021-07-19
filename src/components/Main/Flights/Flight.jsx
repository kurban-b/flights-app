import React from "react";
import moment from "moment";
import "moment/locale/ru";

function Flight({ segment }) {
  const firstSegment = segment.segments[0];
  const lastSegment = segment.segments[segment.segments.length - 1];

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + "ч. " + minutes + "мин.";
  }

  return (
    <div className={"segment"}>
      <div className="path">
        <div className={"nameRoute"}>
          {firstSegment.departureAirport.caption}
          <span> ({firstSegment.departureAirport.uid}) &rarr; </span>
          {lastSegment.arrivalAirport.caption}
          <span> ({lastSegment.arrivalAirport.uid}) </span>
        </div>
        <div className={"time"}>
          <div>
            {moment(firstSegment.departureDate).locale("ru").format("HH:MM ")}
            <span>
              {moment(firstSegment.departureDate)
                .locale("ru")
                .format("DD MMM dd")}
            </span>
          </div>
          <div className={"duration"}>{getTimeFromMins(segment.duration)}</div>
          <div>
            <span>
              {moment(lastSegment.arrivalDate)
                .locale("ru")
                .format("DD MMM dd ")}
            </span>
            {moment(lastSegment.arrivalDate).locale("ru").format("HH:MM")}
          </div>
        </div>
        <div className="transfer">
          <div className="line" />
          <div className="title">
            {segment.segments.length > 1
              ? `${segment.segments.length - 1} пересадка`
              : "Без пересадок"}
          </div>
          <div className="line" />
        </div>
        <div className="carrier">
          Рейс выполняет: {firstSegment.airline.caption}
        </div>
      </div>
    </div>
  );
}

export default Flight;
