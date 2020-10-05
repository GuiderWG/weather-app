import React from 'react';
import Weather from "./Weather";
import {connect} from "react-redux";
import {setCurrent, setWeather, toggleIsFetching} from "../../redux/weatherReducer";
import * as axios from "axios";

class WeatherContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`/api/location/615702/`).then(response => {
      this.props.setWeather(response.data);
      this.props.toggleIsFetching(false);
    });
  }

  onPageChanged = (currentNum, zip) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrent(currentNum);
    axios.get(`/api/location/${zip}/`).then(response => {
      this.props.setWeather(response.data);
      this.props.toggleIsFetching(false);
    });
  }
  render() {
    return <Weather
        weatherData={this.props.weatherData}
        onPageChanged={this.onPageChanged}
        places={this.props.places}
        toggleIsFetching={this.props.toggleIsFetching}
        isFetching={this.props.isFetching}
        currentPlace={this.props.currentPlace}/>
  }
}

let mapStateToProps = (state) => {
  return {
    places: state.weatherPage.places,
    currentPlace: state.weatherPage.currentPlace,
    weatherData: state.weatherPage.weatherData,
    isFetching: state.weatherPage.isFetching,
  }
};

export default connect(mapStateToProps, {setWeather, setCurrent, toggleIsFetching})(WeatherContainer);