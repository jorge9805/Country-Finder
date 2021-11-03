import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const SET_PAGE = "SET_PAGE";
export const SET_ORDER_ALPHABETIC = "SET_ORDER_ALPHABETIC";
export const SET_ORDER_POPULATION = "SET_ORDER_POPULATION";
export const SET_CONTINENT = "SET_CONTINENT";
export const SET_NAME = "SET_NAME";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SET_ACTIVITY = "SET_ACTIVITY";
// export const GET_COUNTRIES_BY_ACTIVITY = "GET_COUNTRIES_BY_ACTIVITY";

// export const getCountriesByActivity = (activityId) => {
//   return { type: GET_COUNTRIES_BY_ACTIVITY, payload: activityId };
// };

export const getActivities = () => {
  return (dispatch) => {
    axios
      .get("/activities")
      .then((activities) => {
        return dispatch({
          type: GET_ACTIVITIES,
          payload: activities.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const createActivity = (activity) => {
  return (dispatch) => {
    axios
      .post(`/activities`, activity)
      .then(() => {
        return dispatch({
          type: CREATE_ACTIVITY,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCountries = ({
  orderAlphabetic,
  orderPopulation,
  continent,
  name,
  activity,
}) => {
  return (dispatch) => {
    axios
      .get(
        `/countries/?alphabetic=${orderAlphabetic || ""}&population=${
          orderPopulation || ""
        }&continent=${continent || ""}&name=${name || ""}`
      )
      .then((countries) => {
        return dispatch({
          type: GET_ALL_COUNTRIES,
          payload: [countries.data, activity],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getCountryById = (id) => {
  return (dispatch) => {
    axios.get(`/countries/${id}`).then(({ data }) => {
      return dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: data,
      });
    });
  };
};
export const setActivity = (activity) => {
  return { type: SET_ACTIVITY, payload: activity };
};

export const setPage = (page) => {
  return { type: SET_PAGE, payload: page };
};
export const setOrderAlphabetic = (order) => {
  return { type: SET_ORDER_ALPHABETIC, payload: order };
};
export const setOrderPopulation = (order) => {
  return { type: SET_ORDER_POPULATION, payload: order };
};
export const setContinent = (continent) => {
  return { type: SET_CONTINENT, payload: continent };
};
export const setName = (name) => {
  return { type: SET_NAME, payload: name };
};
