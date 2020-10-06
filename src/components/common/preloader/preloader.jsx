import React from 'react';
import style from './preloadar.module.css';


let Preloader = (props) => {
  return (
      <div className={style.preloader}>
        <span className={`${style.load}${props.isError ? ` ${style.error}` : ''}`}></span>
        {props.isError ? <span className={`${style.errorText}`}>Failed loading weather data, please try again later</span> : ''}
      </div>
  )
};

export default Preloader;