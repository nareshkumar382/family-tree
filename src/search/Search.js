import React, { Component } from 'react';
import SearchDisplay from "./SearchDisplay"


export default class Search extends Component{


  constructor(props){
    super(props);
    this.state ={search:''};
    this.handleSearch = this.handleSearch.bind(this);
  }

handleSearch(e){
  this.setState({search:e.target.value});
  console.log(e.target.value);
}

renderfamily(family){
  return <SearchDisplay />
}
//{this.renderfamily(this.state.search)} <SearchDisplay personName={this.state.search}/>
  render() {

    return (
      <div className="search">
      <div>
        <input type="text" value = {this.state.value} onChange={this.handleSearch}/>
      </div>
      <SearchDisplay personName={this.state.search}/>

      </div>
    );
  }

}
