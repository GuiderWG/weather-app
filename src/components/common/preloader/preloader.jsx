import React from "react"
import style from "./preloadar.module.css"

const Preloader = ({ isError }) => (
  <div className={style.preloader}>
    <span className={`${style.load}${isError ? ` ${style.error}` : ""}`} />
    {isError ? (
      <span className={`${style.errorText}`}>
        Failed loading weather data, please try again later
      </span>
    ) : (
      ""
    )}
  </div>
)

export default Preloader
