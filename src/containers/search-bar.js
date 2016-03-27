import React, { Component } from 'react';


export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''}; //component level state, not redux level
    this.onInputChange = this.onInputChange.bind(this); //if you don bind, this.setstate wont work, it has wrong context
  }

  onInputChange(event){
  this.setState({term: event.target.value});
  }
onFormSubmit(event){
  event.preventDefault();
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
