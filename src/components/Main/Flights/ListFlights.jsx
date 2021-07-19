import React from "react";
import { useSelector } from "react-redux";
import {
  filterdFlightsSelector,
  loadingSelector,
  sortSelector,
} from "../../../redux/selectors/flights";
import Flights from "./Flights";
import Loader from "react-loader";

function ListFlights() {
  const filteredFlights = useSelector(filterdFlightsSelector);
  const sortValue = useSelector(sortSelector);
  const loading = useSelector(loadingSelector);

  if (loading) {
    return (
      <div>
        <Loader
          lines={13}
          length={20}
          width={10}
          radius={30}
          corners={1}
          rotate={0}
          direction={1}
          color="#000"
          speed={1}
          trail={60}
          shadow={false}
          hwaccel={false}
          className="spinner"
          zIndex={2e9}
          scale={1.0}
          loadedClassName="loadedContent"
        />
      </div>
    );
  }

  if (filteredFlights.length === 0) {
    return <h3 className={"message-info"}>Нет подходящих рейсов</h3>;
  }

  return (
    <div>
      {sortValue === "ascendingInPrice" &&
        filteredFlights
          .sort(
            (a, b) => a.flight.price.total.amount - b.flight.price.total.amount
          )
          .map((item, index) => {
            return <Flights key={index} flights={item} />;
          })}
      {sortValue === "descendingInPrice" &&
        filteredFlights
          .sort(
            (a, b) => b.flight.price.total.amount - a.flight.price.total.amount
          )
          .map((item, index) => {
            return <Flights key={index} flights={item} />;
          })}
      {sortValue === "timeInTransit" &&
        filteredFlights
          .sort((a, b) => {
            return (
              a.flight.legs.reduce((acc, el) => acc + el.duration, 0) -
              b.flight.legs.reduce((acc, el) => acc + el.duration, 0)
            );
          })
          .map((item, index) => {
            return <Flights key={index} flights={item} />;
          })}
    </div>
  );
}

export default ListFlights;
