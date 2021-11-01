import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  SET_PAGE,
  SET_ORDER_ALPHABETIC,
  SET_ORDER_POPULATION,
  SET_CONTINENT,
  SET_NAME,
  GET_ACTIVITIES,
  SET_ACTIVITY,
  // GET_COUNTRIES_BY_ACTIVITY,
} from "../actions/index.js";

const initialState = {
  countries: [],
  page: 0,
  orderAlphabetic: "",
  orderPopulation: "",
  continent: "",
  name: "",
  detail: {},
  activities: [],
  activity: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      const [countries, activity] = payload;

      if (activity) {
        const countriesByActivity = countries.filter((country) => {
          // return country.activities.length !== 0;
          // if (country.activities.length !== 0) {
          for (let i = 0; i < country.activities.length; i++) {
            return country.activities[i].id === Number(activity);
          }
          return;
          // }
        });
        console.log(countriesByActivity);
        return {
          ...state,
          countries: countriesByActivity,
        };
      }
      return {
        ...state,
        countries,
      };

    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        detail: payload,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    case SET_ACTIVITY:
      return {
        ...state,
        activity: payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: payload,
      };
    case SET_ORDER_ALPHABETIC:
      return {
        ...state,
        orderAlphabetic: payload,
      };
    case SET_ORDER_POPULATION:
      return {
        ...state,
        orderPopulation: payload,
      };
    case SET_CONTINENT:
      return {
        ...state,
        continent: payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;

// case GET_COUNTRIES_BY_ACTIVITY:
//   console.log(payload);
//   console.log(state.activities);
//   const activitySelected = state.activities.find(
//     (activity) => activity.id == payload
//   );
//   let countriesByActivity = [];
//   activitySelected.countries.forEach((country) => {
//     countriesByActivity = [
//       ...countriesByActivity,
//       state.countries.find((c) => c.name === country.name),
//     ];
//   });
//   console.log(activitySelected.countries);
//   console.log(countriesByActivity);
//   return {
//     ...state,
//     countries: countriesByActivity,
//   };
//
// const countriesByActivity = state.activities.countries?.map(
//   (country) => country.name
// );
