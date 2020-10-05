const SET_WEATHER = 'SET_WEATHER';
const SET_CURRENT = 'SET_CURRENT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  places: [
    {id: 1, name: "Paris", loc: "615702" },
    {id: 2, name: "Moscow", loc: "2122265" },
    {id: 3, name: 'Berlin', loc: "638242" },
  ],
  weatherData: null,
  currentPlace: 0,
  isFetching: true,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {...state, weatherData: action.weather};

    case SET_CURRENT: {
      return {...state, currentPlace: action.currentPlace}
    }

    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }

    default:
      return state;
  }
};

export let setWeather = weather => ({type: SET_WEATHER, weather});
export let setCurrent = currentPlace => ({type: SET_CURRENT, currentPlace});
export const toggleIsFetching = isFetching =>  ({type: TOGGLE_IS_FETCHING, isFetching});

export default weatherReducer;