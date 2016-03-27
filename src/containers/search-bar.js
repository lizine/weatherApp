import React, { Component } from 'react';


export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''}; //component level state, not redux level
  }
  render(){
    return(
      <form className="input-group">
       <input
       placeholder="Etsi sääennustetta haluamastasi kaupungista"
       className="form-control"
       value = {this.state.term}
       onChange={event => this.setState({term:event.target.value})}
       />
       <span className="input-group-btn">
        <button className="btn btn-secondary">Search</button>
       </span>
      </form>
    );
  }
}
