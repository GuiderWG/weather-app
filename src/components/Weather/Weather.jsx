import React from 'react';
import style from './Weather.module.css'

const Weather = (props) => {
  return (
      <div className={style.weather}>
        <div className={style.toggles}>
          {props.places.map((item, index) => <button className={style.city} key={index}>{item.name}</button>)}
        </div>

        <div className={style.panel}>
          <div className={style.title}><span>Moscow</span>, Russia</div>
          <div className={style.subtitle}>Time 12:13 a.m.</div>
          <div className={style.tempInfo}>
            <div className={style.theTemp}>+18°</div>
            <img src="https://www.metaweather.com/static/img/weather/hc.svg" alt=""/>
            <div className={style.condition}>Heavy Cloud</div>
          </div>
          <div className={style.additionalInformation}>
            <div className={style.aiItem}>
              <div className={style.aiItem__title}>Humidity</div>
              <div className={style.aiItem__value}>53%</div>
            </div>
            <div className={style.aiItem}>
              <div className={style.aiItem__title}>Visibility</div>
              <div className={style.aiItem__value}>16.6 miles</div>
            </div>
            <div className={style.aiItem}>
              <div className={style.aiItem__title}>Pressure</div>
              <div className={style.aiItem__value}>1030mb</div>
            </div>
            <div className={style.aiItem}>
              <div className={style.aiItem__title}>Confidence</div>
              <div className={style.aiItem__value}>61%</div>
            </div>
          </div>
        </div>
      </div>
  )

};

export default Weather;