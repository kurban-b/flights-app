import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { airlinesSelector } from "../../redux/selectors/flights";
import { changeCheckAirlines } from "../../redux/actions/flights";

function Airlines() {
  const dispatch = useDispatch();

  const airlines = useSelector(airlinesSelector);

  const handleChange = (uid) => (event) => {
    dispatch(changeCheckAirlines(uid, event.target.checked));
  };
  return (
    <div className="airlines">
      <h3>Авиакомпании</h3>
      <ul>
        {airlines.map((airline) => {
          return (
            <li key={airline.uid}>
              <input
                id={`airline-${airline.uid}`}
                type="checkbox"
                checked={airline.checked}
                onChange={handleChange(airline.uid)}
              />
              <label htmlFor={`airline-${airline.uid}`}>
                - {airline.caption}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Airlines;
