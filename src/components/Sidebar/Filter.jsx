import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector } from "../../redux/selectors/flights";
import { changeFilter } from "../../redux/actions/flights";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const handleChange = (prop) => (event) => {
    dispatch(changeFilter({ [prop]: event.target.checked }));
  };
  return (
    <div className="filter">
      <h3>Фильтровать</h3>
      <div>
        <input
          id={"checkbox1"}
          type="checkbox"
          checked={filter.oneTransfer}
          onChange={handleChange("oneTransfer")}
        />
        <label htmlFor="checkbox1">- 1 пересадка</label>
        <br />
        <input
          id={"checkbox2"}
          type="checkbox"
          checked={filter.withoutTransfer}
          onChange={handleChange("withoutTransfer")}
        />
        <label htmlFor="checkbox2">- без пересадок</label>
      </div>
    </div>
  );
}

export default Filter;
