import React from 'react';
import style from './Weather.module.css'
import Preloader from '../common/preloader/preloader';
import WeatherPanel from './WeatherPanel/WeatherPanel';

const Weather = (props) => {
  return (
      <div className={style.weather}>
        <div className={style.toggles}>
          {props.places.map((place, index) => <button
              onClick={()=>{props.onPageChanged(index, place.loc)}}
              className={`${style.city} ${props.currentPlace === index ? style.active : ''}`}
              key={index}>{place.name}</button>)}
        </div>

       {props.isFetching ? <Preloader/> : <WeatherPanel weatherData={props.weatherData} />}
      </div>
  )

};

export default Weather;