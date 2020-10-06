import React from 'react';
import Weather from './Weather';
import {connect} from 'react-redux';
import {setCurrent, setWeather, toggleIsError, toggleIsFetching} from '../../redux/weatherReducer';
import * as axios from 'axios';

class WeatherContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    this.props.toggleIsError(false);
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/615702/`).then(response => {
      this.props.setWeather(response.data);
      this.props.toggleIsFetching(false);
    }).catch(() => this.props.toggleIsError(true));
  }

  onPageChanged = (currentNum, zip) => {
    this.props.toggleIsFetching(true);
    this.props.toggleIsError(false);
    this.props.setCurrent(currentNum);
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${zip}/`).then(response => {
      this.props.setWeather(response.data);
      this.props.toggleIsFetching(false);
    }).catch(() => this.props.toggleIsError(true));
  }
  render() {
    return <Weather
        weatherData={this.props.weatherData}
        onPageChanged={this.onPageChanged}
        places={this.props.places}
        toggleIsFetching={this.props.toggleIsFetching}
        isFetching={this.props.isFetching}
        isError={this.props.isError}
        currentPlace={this.props.currentPlace}/>
  }
}

let mapStateToProps = (state) => {
  return {
    places: state.weatherPage.places,
    currentPlace: state.weatherPage.currentPlace,
    weatherData: state.weatherPage.weatherData,
    isFetching: state.weatherPage.isFetching,
    isError: state.weatherPage.isError,
  }
};

export default connect(mapStateToProps, {setWeather, setCurrent, toggleIsFetching, toggleIsError})(WeatherContainer);