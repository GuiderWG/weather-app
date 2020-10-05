import React from 'react';
import s from './preloadar.module.css';

let Preloader = (props) => {
  return (
      <div className={s.preloader}>
        <span className={s.load}></span>
      </div>
  )
};

export default Preloader;