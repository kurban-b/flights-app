import { createSelector } from "reselect";

const flights = (state) => state.flights;
const airlines = (state) => state.airlines;
const filter = (state) => state.filter;
const price = (state) => state.price;
const loading = (state) => state.loading;
const sortValues = (state) => state.sortValues;

export const airlinesSelector = createSelector(
  airlines,
  (airlines) => airlines
);

export const loadingSelector = createSelector(loading, (loading) => loading);

export const sortSelector = createSelector(
  sortValues,
  (sortValues) => sortValues
);

export const filterSelector = createSelector(filter, (filter) => filter);

export const priceSelector = createSelector(price, (price) => price);

export const filterdFlightsSelector = createSelector(
  [flights, airlines, filter, price],
  (flights, airlines, filter, price) => {
    return flights
      .filter((el) => {
        if (filter.oneTransfer && filter.withoutTransfer) {
          return true;
        } else if (filter.oneTransfer) {
          return el.flight.legs.some((item) => item.segments.length > 1);
        } else if (filter.withoutTransfer) {
          return el.flight.legs.every((item) => item.segments.length <= 1);
        } else if (!filter.oneTransfer && !filter.withoutTransfer) {
          return true;
        }
        return false;
      })
      .filter((el) => {
        return (
          +el.flight.price.total.amount >= +price.min &&
          +el.flight.price.total.amount <= +price.max
        );
      })
      .filter((el) => {
        return airlines.find((airline) => airline.uid === el.flight.carrier.uid)
          .checked;
      });
  }
);

export const sortFlightsSelector = createSelector(
  [filterdFlightsSelector, sortSelector],
  (flights, sort) => {
    switch (sort) {
      case "ascendingInPrice":
        return flights.sort(
          (a, b) => a.flight.price.total.amount - b.flight.price.total.amount
        );
      case "descendingInPrice":
        return flights.sort(
          (a, b) => b.flight.price.total.amount - a.flight.price.total.amount
        );
      default:
        return flights.sort((a, b) => {
          return (
            a.flight.legs.reduce((acc, el) => acc + el, 0) -
            b.flight.legs.reduce((acc, el) => acc + el, 0)
          );
        });
    }
  }
);
