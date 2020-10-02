import React from 'react';
import Weather from "./Weather";
import {connect} from "react-redux";
import {setWeather} from "../../redux/weatherReducer";
import * as axios from "axios";

class WeatherContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://www.metaweather.com/api/location/44418/`).then(response => {
      this.props.setWeather(response.data.items);
    });
  }
  render() {
    return <Weather places={this.props.places} />
  }
}

let mapStateToProps = (state) => {
  return {
    places: state.weatherPage.places,
  }
};

export default connect(mapStateToProps, {setWeather})(WeatherContainer);