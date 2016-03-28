import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class ForecastList extends Component {

  renderWeather(cityData){
    const temps = cityData.list.map(item => (item.main.temp-273.15));
    console.log(temps);
    const pressures = cityData.list.map(item => item.main.pressure);
    const humidity = cityData.list.map(item => item.main.humidity);
    //ES6 magic, just pullinh lon and lat from data
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}<br/><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="red" units="°C"/> </td>
        <td><Chart data={pressures} color="grey" units="hPa"/> </td>
        <td> <Chart data={humidity} color="blue" units="%"/></td>
      </tr>
    );
  }
  constructor(props){
      super(props);

  }
  render() {

    return(
    //  <div>Forecast: {this.props.weather[0].list[0].main.temp}</div>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Kaupunki</th>
          <th>Lämpötila (°C)</th>
          <th>Ilmanpaine (hPa)</th>
          <th>Ilmankosteus (%)</th>
        </tr>
      </thead>
      <tbody>
        {this.props.weather.map(this.renderWeather)}
      </tbody>
    </table>
    );

  }
}
function mapStateToProps({weather}){
  return { weather };
}
export default connect(mapStateToProps)(ForecastList);
