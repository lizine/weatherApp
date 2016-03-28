import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';

class ForecastList extends Component {

  renderWeather(cityData){
    const temps = cityData.list.map(item => (item.main.temp-273.15));
    console.log(temps);
    const pressures = cityData.list.map(item => item.main.pressure);
    const humidity = cityData.list.map(item => item.main.humidity);


    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td><Chart data={temps} color="red" units="c"/> </td>
        <td><Chart data={pressures} color="grey" units="hPa"/> </td>
        <td> <Chart data={humidity} color="blue" units="%"/></td>
      </tr>
    )
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
          <th>Lämpötila (c)</th>
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
