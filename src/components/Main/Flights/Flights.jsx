import React from "react";
import Flight from "./Flight";

function Flights({ flights }) {
  return (
    <div className={"flights"}>
      <div className="header">
        <div className="logo">{flights.flight.carrier.caption}</div>
        <div className="price">
          <div className="title">
            {flights.flight.price.total.amount}{" "}
            {flights.flight.price.total.currencyCode}
          </div>
          <div className="subtitle">Стоимость с одного пассажира</div>
        </div>
      </div>
      <div className="segments">
        {flights.flight.legs.map((segment, index) => {
          return <Flight key={index} segment={segment} />;
        })}
      </div>
      <div>
        <button>Выбрать</button>
      </div>
    </div>
  );
}

export default Flights;
