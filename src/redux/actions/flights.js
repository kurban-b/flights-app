export const loadFlights = () => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "flights/load/start",
      });
      const res = await fetch("http://localhost:5000/result");
      const json = await res.json();
      await dispatch({
        type: "flights/load/success",
        payload: json,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const changeCheckAirlines = (uid, checked) => {
  return {
    type: "airlines/checked/change",
    payload: { uid, checked },
  };
};

export const changeFilter = (checked) => {
  return {
    type: "filter/change",
    payload: checked,
  };
};

export const changePricesFilter = (value) => {
  return {
    type: "prices/change",
    payload: value,
  };
};

export const sortChange = (value) => {
  return {
    type: "sort/change",
    payload: value,
  };
};
