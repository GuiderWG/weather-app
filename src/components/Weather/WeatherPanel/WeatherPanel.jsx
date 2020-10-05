import React from 'react';
import style from './WeatherPanel.module.css'

const WeatherPanel = ({weatherData: data}) => {
  let parseDate = new Date(data.time);
  return (
      <div className={style.panel}>
        <div className={style.title}><span>{data.title}</span>, {data.parent.title}</div>
        <div className={style.subtitle}>{parseDate.toDateString()}</div>
        {data.consolidated_weather.filter((_, index) => index === 0).map((item) => {
          console.log(item)
          return (
              <div className={style.generalInfo}>
                <div className={style.tempInfo}>
                  <div className={style.theTemp}>{item.the_temp > 0 ? `+${Math.round(item.the_temp)}°` : `${Math.round(item.the_temp)}°`}</div>
                  <img src={`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`} alt=""/>
                  <div className={style.condition}>{item.weather_state_name}</div>
                </div>
                <div className={style.additionalInformation}>
                  <div className={style.aiItem}>
                    <div className={style.aiItem__title}>Humidity</div>
                    <div className={style.aiItem__value}>{item.humidity}%</div>
                  </div>
                  <div className={style.aiItem}>
                    <div className={style.aiItem__title}>Visibility</div>
                    <div className={style.aiItem__value}>{item.visibility.toFixed(1)} miles</div>
                  </div>
                  <div className={style.aiItem}>
                    <div className={style.aiItem__title}>Pressure</div>
                    <div className={style.aiItem__value}>{Math.round(item.air_pressure)}mb</div>
                  </div>
                  <div className={style.aiItem}>
                    <div className={style.aiItem__title}>Confidence</div>
                    <div className={style.aiItem__value}>{item.predictability}%</div>
                  </div>
                </div>
              </div>
          )
        })}
      </div>
  )
};

export default WeatherPanel;