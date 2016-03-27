import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''}; //component level state, not redux level
    this.onInputChange = this.onInputChange.bind(this); //if you don bind, this.setstate wont work, it has wrong context
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

onInputChange(event){
  this.setState({term: event.target.value});
  }

onFormSubmit(event){
  event.preventDefault();
  //fetch weather data.
  this.props.fetchWeather(this.state.term);
  this.setState({term: ''}); //this changes only the component state
}
  render(){
    return (
      <form onSubmit={this.onFormSubmit}className="input-group">
       <input
       placeholder="Etsi sääennustetta haluamastasi kaupungista"
       className="form-control"
       value = {this.state.term}
       onChange={this.onInputChange}
       />
       <span className="input-group-btn">
        <button className="btn btn-secondary">Search</button>
       </span>
      </form>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
