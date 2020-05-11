import React, { Component } from 'react';
import './App.module.css';
import {fetchData} from './Api'
import {Cards , Chart , Country} from './Components'
import CoronaImage from './image.png'

class App extends Component {

  state = {
    data: {},
    country : ""
  }

 async componentDidMount(){
    const fetcheddata = await fetchData();

    console.log(fetcheddata)

    this.setState({
      data : fetcheddata
    }); 

  }

  handelCountry = async (Country) => {
      const fetchdData = await fetchData(Country);

      this.setState({data : fetchdData , country : Country})
  }
  
  render() {
    const { data , country } = this.state
    return (
      <div className = "container">
        <img  className = "corona" src = {CoronaImage} alt = "coronaImage"/>
      <Cards
      data = {data}/>
      <Country handelCountry = {this.handelCountry}/>
      <Chart data = { data } country = {country} />
      </div>
    );
  }
}

export default App;
