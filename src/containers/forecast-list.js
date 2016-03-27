import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ForecastList extends Component {
  constructor(props){
      super(props);

  }
  render() {
    if(this.props.weather.length === 0){
      return(
        <div>No Weather Data to show yet</div>
      )
    }
    return(
    //  <div>Forecast: {this.props.weather[0].list[0].main.temp}</div>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.props.weather[0].city.name}</td>
            <td>{this.props.weather[0].list[0].main.temp}</td>
          <td>{this.props.weather[0].list[0].main.pressure}</td>
          <td>{this.props.weather[0].list[0].main.humidity}</td>
        </tr>
      </tbody>
    </table>
    );

  }
}
function mapStateToProps(state){
  return {
    weather: state.weather
  };
}
export default connect(mapStateToProps)(ForecastList);
