import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { priceSelector } from "../../redux/selectors/flights";
import { changePricesFilter } from "../../redux/actions/flights";

function Prices() {
  const dispatch = useDispatch();

  const prices = useSelector(priceSelector);

  const handleChange = (prop) => (event) => {
    dispatch(changePricesFilter({ [prop]: event.target.value }));
  };

  return (
    <div className="prices">
      <h3>Цена</h3>
      <div>
        <div className="price-block">
          <div className={"left"}>От</div>
          <div className="right">
            <input
              type="text"
              value={prices.min}
              onChange={handleChange("min")}
            />{" "}
            руб.
          </div>
        </div>
        <div className="price-block">
          <div className={"left"}>До</div>
          <div className="right">
            <input
              type="text"
              value={prices.max}
              onChange={handleChange("max")}
            />{" "}
            руб.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
