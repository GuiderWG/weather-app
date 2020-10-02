const SET_WEATHER = 'SET_WEATHER';

let initialState = {
  places: [
    {id: 1, name: "Samara", zip: "94303" },
    {id: 2, name: "Moscow", zip: "94088" },
    {id: 3, name: 'New York', zip: "94028" },
  ],
  weatherData: null,
  activePlace: 0,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {...state, weatherData: action.weather};

    default:
      return state;
  }
};

export let setWeather = weather => ({type: SET_WEATHER, weather})

export default weatherReducer;