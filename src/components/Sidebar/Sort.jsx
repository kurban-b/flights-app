import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortChange } from "../../redux/actions/flights";
import { sortSelector } from "../../redux/selectors/flights";

function Sort() {
  const dispatch = useDispatch();
  const sortValue = useSelector(sortSelector);

  const handleChange = (event) => {
    dispatch(sortChange(event.target.value));
  };

  return (
    <div className="sort">
      <h3>Сортировать</h3>
      <div>
        <input
          id={"radio1"}
          type="radio"
          value={"ascendingInPrice"}
          checked={sortValue === "ascendingInPrice"}
          onChange={handleChange}
        />
        <label htmlFor={"radio1"}>- по возрастание в цене</label>
        <br />
        <input
          id={"radio2"}
          type="radio"
          value={"descendingInPrice"}
          checked={sortValue === "descendingInPrice"}
          onChange={handleChange}
        />
        <label htmlFor={"radio2"}>- по убывание в цене</label>
        <br />
        <input
          id={"radio3"}
          type="radio"
          value={"timeInTransit"}
          checked={sortValue === "timeInTransit"}
          onChange={handleChange}
        />
        <label htmlFor={"radio3"}>- по времени в пути</label>
      </div>
    </div>
  );
}

export default Sort;
