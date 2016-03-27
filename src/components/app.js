import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/search-bar';
import ForecastList from '../containers/forecast-list';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <ForecastList/>
      </div>
    );
  }
}
