import React from 'react';
import { Component } from 'react';
import SearchBar from './search-bar';
import ForecastList from './forecast-list';
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
