import React from 'react';
import style from './Weather.module.css'

const Weather = (props) => {
  return (
      <div className={style.weather}>
        {props.places.map((item, index) => {
          return (
              <button className={style.city} key={index}>{item.name}</button>
          )
        })}

        <div className={style.panel}>
          123
        </div>
      </div>
  )

};

export default Weather;