import React from "react"
import Preloader from "../common/preloader/preloader"
import style from "./Weather.module.css"
import WeatherPanel from "./WeatherPanel/WeatherPanel"

const Weather = ({
  places,
  onPageChanged,
  currentPlace,
  isError,
  weatherData,
  isFetching,
}) => {
  return (
    <div className={style.weather}>
      <div className={style.toggles}>
        {places.map((place, index) => (
          <button
            onClick={() => {
              onPageChanged(index, place.loc)
            }}
            className={`${style.city} ${
              currentPlace === index ? style.active : ""
            }`}
            key={place.id}
          >
            {place.name}
          </button>
        ))}
      </div>
      {isFetching ? (
        <Preloader isError={isError} />
      ) : (
        <WeatherPanel weatherData={weatherData} />
      )}
    </div>
  )
}

export default Weather
