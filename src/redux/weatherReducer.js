const SET_WEATHER = 'SET_WEATHER'
const SET_CURRENT = 'SET_CURRENT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_ERROR = 'TOGGLE_IS_ERROR'

const initialState = {
  places: [
    { id: 1, name: 'Paris', loc: '615702' },
    { id: 2, name: 'Moscow', loc: '2122265' },
    { id: 3, name: 'Berlin', loc: '638242' },
  ],
  weatherData: null,
  currentPlace: 0,
  isFetching: true,
  isError: false,
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return { ...state, weatherData: action.weather }

    case SET_CURRENT: {
      return { ...state, currentPlace: action.currentPlace }
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }

    case TOGGLE_IS_ERROR: {
      return { ...state, isError: action.isError }
    }

    default:
      return state
  }
}

export const setWeather = (weather) => ({ type: SET_WEATHER, weather })
export const setCurrent = (currentPlace) => ({
  type: SET_CURRENT,
  currentPlace,
})
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})
export const toggleIsError = (isError) => ({ type: TOGGLE_IS_ERROR, isError })

export default weatherReducer
