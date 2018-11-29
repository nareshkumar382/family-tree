import React, { Component } from 'react';
import familyList from "./family.json";

export default class SearchDisplay extends Component{
  constructor(props){
    super(props);
    this.state ={fName:""}
  }

  requestData(e){
    this.props.handleSearch(e.target.value);
    this.setState({fName: e.target.value});
  }
  renderpersonName(person){
    const {fName} = this.state;

    return(

      <div>
      
      <li>{person.firstName}</li>
      <li>{person.lastName}</li>
      </div>
    );

  }
  render(){
    const {fName} = this.state
    console.log("i am from display"+fName);
        const filteredfamily = familyList.filter( person =>{
            return person.firstName.toLowerCase().indexOf( fName.toLowerCase() ) !== -1
        })
 return(

   <div className="row">
                       {
                           filteredfamily.map( person =>{
                               return this.renderpersonName(person)
                           })
                       }
                   </div>
  //  <div>
  //   <h1>Hello:{this.props.personName}</h1>
  // </div>
)
  }

}
