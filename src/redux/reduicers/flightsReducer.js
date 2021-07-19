const initialState = {
  flights: [],
  airlines: [],
  price: {
    min: "",
    max: "",
  },
  filter: {
    withoutTransfer: false,
    oneTransfer: false,
  },
  sortValues: "ascendingInPrice",
  loading: false,
};

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "flights/load/start":
      return {
        ...state,
        loading: true,
      };
    case "flights/load/success":
      return {
        ...state,
        flights: action.payload.flights,
        airlines: uniqueArr(
          action.payload.flights.map((item) => item.flight.carrier),
          "uid"
        ).map((airline) => {
          return {
            ...airline,
            checked: true,
          };
        }),
        price: {
          min: "0",
          max: Math.max(
            ...action.payload.flights.map(
              (item) => +item.flight.price.total.amount
            )
          ),
        },
        loading: false,
      };
    case "airlines/checked/change":
      return {
        ...state,
        airlines: state.airlines.map((airline) => {
          if (airline.uid === action.payload.uid) {
            return {
              ...airline,
              checked: action.payload.checked,
            };
          }
          return airline;
        }),
      };
    case "filter/change":
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      };
    case "prices/change":
      return {
        ...state,
        price: {
          ...state.price,
          ...action.payload,
        },
      };
    case "sort/change":
      return {
        ...state,
        sortValues: action.payload,
      };
    default:
      return state;
  }
};

// Функция для возвращения массива уникальных объектов по уникальному свойству объекта,
// принимает массив и строку - наименование свойства объекта
function uniqueArr(arr, key) {
  let array = [];
  return arr.filter((item) => {
    if (array.some((el) => el[key] === item[key])) {
      return false;
    }
    array.push(item);
    return true;
  });
}
